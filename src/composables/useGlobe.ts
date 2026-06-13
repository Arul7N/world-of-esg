import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

/* ── continent mask: ellipse approximations over lon/lat ── */
function isLand(lon: number, lat: number): boolean {
  const E = (cx: number, cy: number, rx: number, ry: number) => {
    const a = (lon - cx) / rx, b = (lat - cy) / ry
    return a * a + b * b <= 1
  }
  if (lat < -62) return true // Antarctica
  return (
    E(-100, 50, 34, 20) || E(-92, 33, 20, 12) || E(-83, 17, 11, 8) || E(-42, 72, 13, 9) ||
    E(-62, -6, 16, 15) || E(-66, -32, 9, 18) ||
    E(12, 52, 20, 13) || E(27, 61, 16, 9) ||
    E(18, 4, 23, 24) || E(26, -24, 12, 11) ||
    E(92, 52, 52, 23) || E(50, 30, 16, 13) || E(78, 23, 13, 12) || E(108, 15, 17, 13) || E(140, 38, 6, 9) ||
    E(134, -25, 16, 10) || E(172, -42, 5, 7)
  )
}

/* ── soft circular sprite texture ── */
function makeSprite(): THREE.CanvasTexture {
  const cn = document.createElement('canvas')
  cn.width = cn.height = 64
  const ctx = cn.getContext('2d')!
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.45, 'rgba(255,255,255,.8)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(32, 32, 32, 0, Math.PI * 2)
  ctx.fill()
  return new THREE.CanvasTexture(cn)
}

/* ═══════════════════════════════════════════════
   HERO GLOBE  (#hero-canvas)
   Dotted Earth: points start scattered → converge
   ═══════════════════════════════════════════════ */
export function initHeroGlobe(reduceMotion = false): () => void {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null
  if (!canvas) return () => {}

  const wrap = canvas.parentElement!
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
  camera.position.set(-2.0, 0, 6.8)

  function resize() {
    const w = wrap.clientWidth, h = wrap.clientHeight
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()

  const group = new THREE.Group()
  scene.add(group)
  group.rotation.z = 0.36 // axial tilt

  const R = 1.95
  const cFor = new THREE.Color(0x1D6B43)
  const cEm = new THREE.Color(0x2FA66A)
  const cAur = new THREE.Color(0x5BE38B)

  // ── build land points via Fibonacci sphere
  const M = window.innerWidth < 768 ? 1800 : window.innerWidth < 1200 ? 8000 : 12000
  const land: [number, number, number, number][] = []
  for (let i = 0; i < M; i++) {
    const t = i / (M - 1)
    const inc = Math.acos(1 - 2 * t)
    const az = Math.PI * (1 + Math.sqrt(5)) * i
    const x = Math.sin(inc) * Math.cos(az)
    const y = Math.cos(inc)
    const z = Math.sin(inc) * Math.sin(az)
    const lon = Math.atan2(z, x) * 180 / Math.PI
    const lat = Math.asin(y) * 180 / Math.PI
    if (isLand(lon, lat)) land.push([x, y, z, lat])
  }

  const N = land.length
  const positions = new Float32Array(N * 3)
  const base = new Float32Array(N * 3)
  const scatter = new Float32Array(N * 3)
  const colors = new Float32Array(N * 3)

  for (let i = 0; i < N; i++) {
    const [x, y, z, lat] = land[i]
    base[i * 3] = x * R; base[i * 3 + 1] = y * R; base[i * 3 + 2] = z * R
    const sp = 4.0 + Math.random() * 6.0
    scatter[i * 3] = x * R * sp + (Math.random() - 0.5) * 12
    scatter[i * 3 + 1] = y * R * sp + (Math.random() - 0.5) * 6
    scatter[i * 3 + 2] = z * R * sp + (Math.random() - 0.5) * 12
    positions[i * 3] = scatter[i * 3]; positions[i * 3 + 1] = scatter[i * 3 + 1]; positions[i * 3 + 2] = scatter[i * 3 + 2]
    let c = cFor.clone().lerp(cEm, 1 - Math.min(1, Math.abs(lat) / 72))
    if (Math.random() < 0.05) c = cAur.clone()
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const mat = new THREE.PointsMaterial({
    size: 0.05, map: makeSprite(), vertexColors: true,
    transparent: true, opacity: 0, depthWrite: false
  })
  group.add(new THREE.Points(geo, mat))

  // ── lat/lon grid
  const ringMat = new THREE.LineBasicMaterial({ color: 0x2FA66A, transparent: true, opacity: 0 })

  function latRing(latRad: number) {
    const pts: THREE.Vector3[] = []
    const r = R * Math.cos(latRad), yy = R * Math.sin(latRad)
    for (let i = 0; i <= 80; i++) {
      const a = i / 80 * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(a) * r, yy, Math.sin(a) * r))
    }
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), ringMat)
  }

  function meridian(rotY: number) {
    const pts: THREE.Vector3[] = []
    for (let i = 0; i <= 80; i++) {
      const a = i / 80 * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0))
    }
    const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), ringMat)
    l.rotation.y = rotY
    return l
  }

  ;[-55, -30, 0, 30, 55].forEach(d => group.add(latRing(d * Math.PI / 180)))
  ;[0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4].forEach(r => group.add(meridian(r)))

  const globeMat = new THREE.MeshBasicMaterial({ color: 0xDDF5E5, transparent: true, opacity: 0, depthWrite: false })
  group.add(new THREE.Mesh(new THREE.SphereGeometry(R * 0.985, 48, 48), globeMat))

  // ── orbiting satellites
  const orbits: { mesh: THREE.Mesh; r: number; speed: number; phase: number; tilt: number; mat: THREE.MeshBasicMaterial }[] = []
  const sphGeo = new THREE.SphereGeometry(0.16, 20, 20)
  const orbitDefs: [number, number, number][] = [[0x5BE38B, 2.9, 0.4], [0xCBBE8A, 3.3, -0.55], [0x2FA66A, 2.6, 0.9]]
  orbitDefs.forEach(([color, r, speed], i) => {
    const orbitMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 })
    const s = new THREE.Mesh(sphGeo, orbitMat)
    orbits.push({ mesh: s, r, speed, phase: i * 2.1, tilt: i * 0.5, mat: orbitMat })
    scene.add(s)
  })

  // ── converge animation triggered by preloader end
  const state = { cp: 0 }

  function startGlobe() {
    if (reduceMotion) {
      state.cp = 1; mat.opacity = 0.95; ringMat.opacity = 0.1; globeMat.opacity = 0.05
      orbits.forEach(o => { o.mat.opacity = 0.5 })
      return
    }
    gsap.to(state, { cp: 1, duration: 2.6, ease: 'power3.out' })
    gsap.to(mat, { opacity: 0.95, duration: 2, delay: 0.2 })
    gsap.to(ringMat, { opacity: 0.1, duration: 1.6, delay: 1.4 })
    gsap.to(globeMat, { opacity: 0.05, duration: 1.6, delay: 1.2 })
    orbits.forEach(o => gsap.to(o.mat, { opacity: 0.5, duration: 1.4, delay: 1.6 }))
  }

  // ── mouse parallax
  let mX = 0, mY = 0, tx = 0, ty = 0
  if (!reduceMotion) {
    wrap.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect()
      mX = (e.clientX - rect.left) / rect.width - 0.5
      mY = (e.clientY - rect.top) / rect.height - 0.5
    })
  }

  // ── render loop
  const clock = new THREE.Clock()
  let running = true

  function animate() {
    if (!running) return

    if (reduceMotion) {
      const pos = geo.attributes.position.array as Float32Array
      for (let i = 0; i < N; i++) {
        pos[i * 3] = base[i * 3]; pos[i * 3 + 1] = base[i * 3 + 1]; pos[i * 3 + 2] = base[i * 3 + 2]
      }
      geo.attributes.position.needsUpdate = true
      orbits.forEach(o => {
        o.mesh.position.set(Math.cos(o.phase) * o.r, Math.sin(o.phase * 0.8 + o.tilt) * o.r * 0.4, Math.sin(o.phase) * o.r)
        o.mesh.scale.setScalar(1)
      })
      renderer.render(scene, camera)
      running = false
      return
    }

    requestAnimationFrame(animate)
    const t = clock.getElapsedTime()
    const cp = state.cp

    if (cp < 1) {
      const pos = geo.attributes.position.array as Float32Array
      for (let i = 0; i < N; i++) {
        pos[i * 3] = scatter[i * 3] + (base[i * 3] - scatter[i * 3]) * cp
        pos[i * 3 + 1] = scatter[i * 3 + 1] + (base[i * 3 + 1] - scatter[i * 3 + 1]) * cp
        pos[i * 3 + 2] = scatter[i * 3 + 2] + (base[i * 3 + 2] - scatter[i * 3 + 2]) * cp
      }
      geo.attributes.position.needsUpdate = true
    }

    group.rotation.y = t * 0.1
    group.position.y = Math.sin(t * 0.5) * 0.07 * cp

    tx += (mX * 0.5 - tx) * 0.05
    ty += (mY * 0.5 - ty) * 0.05
    group.rotation.y += tx * 0.4
    group.rotation.x = -ty * 0.35

    orbits.forEach(o => {
      const a = t * o.speed + o.phase
      o.mesh.position.set(Math.cos(a) * o.r, Math.sin(a * 0.8 + o.tilt) * o.r * 0.4, Math.sin(a) * o.r)
      o.mesh.scale.setScalar(cp)
    })

    renderer.render(scene, camera)
  }

  animate()
  window.addEventListener('resize', resize)

  // pause when off-screen
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !running) { running = true; animate() }
        else if (!e.isIntersecting) { running = false }
      })
    }, { threshold: 0.02 }).observe(canvas)
  }

  // return startGlobe so App.vue can trigger converge after preloader
  return startGlobe
}

/* ═══════════════════════════════════════════════
   CTA GLOBE  (#cta-canvas)
   Fully-formed blue/aurora dotted Earth
   Fades in via ScrollTrigger when #contact enters
   ═══════════════════════════════════════════════ */
export function initCtaGlobe(reduceMotion = false): void {
  const canvas = document.getElementById('cta-canvas') as HTMLCanvasElement | null
  if (!canvas) return

  const wrap = canvas.parentElement!
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
  camera.position.set(0, -0.2, 7.4)

  function resize() {
    const w = wrap.clientWidth, h = wrap.clientHeight
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()
  window.addEventListener('resize', resize)

  const group = new THREE.Group()
  scene.add(group)
  group.rotation.z = 0.32

  const R = 3.1
  const M = window.innerWidth < 768 ? 1600 : 3200
  const cFor = new THREE.Color(0x3A4DB8)
  const cAur = new THREE.Color(0x5BE38B)

  const pts: [number, number, number, number][] = []
  for (let i = 0; i < M; i++) {
    const t = i / (M - 1)
    const inc = Math.acos(1 - 2 * t)
    const az = Math.PI * (1 + Math.sqrt(5)) * i
    const x = Math.sin(inc) * Math.cos(az)
    const y = Math.cos(inc)
    const z = Math.sin(inc) * Math.sin(az)
    const lon = Math.atan2(z, x) * 180 / Math.PI
    const lat = Math.asin(y) * 180 / Math.PI
    if (isLand(lon, lat)) pts.push([x * R, y * R, z * R, lat])
  }

  const N = pts.length
  const pos = new Float32Array(N * 3)
  const col = new Float32Array(N * 3)
  for (let i = 0; i < N; i++) {
    pos[i * 3] = pts[i][0]; pos[i * 3 + 1] = pts[i][1]; pos[i * 3 + 2] = pts[i][2]
    const c = cFor.clone().lerp(cAur, 1 - Math.min(1, Math.abs(pts[i][3]) / 75))
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3))

  const cn = document.createElement('canvas'); cn.width = cn.height = 64
  const c2 = cn.getContext('2d')!
  const g = c2.createRadialGradient(32, 32, 0, 32, 32, 32)
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.5, 'rgba(255,255,255,.7)'); g.addColorStop(1, 'rgba(255,255,255,0)')
  c2.fillStyle = g; c2.beginPath(); c2.arc(32, 32, 32, 0, Math.PI * 2); c2.fill()

  const mat = new THREE.PointsMaterial({
    size: 0.055, map: new THREE.CanvasTexture(cn),
    vertexColors: true, transparent: true, opacity: 0, depthWrite: false
  })
  group.add(new THREE.Points(geo, mat))

  if (reduceMotion) {
    mat.opacity = 0.75
  } else {
    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 85%',
      once: true,
      onEnter: () => gsap.to(mat, { opacity: 0.75, duration: 2.2, ease: 'power2.out' })
    })
  }

  const clock = new THREE.Clock()
  let running = false

  function animate() {
    if (!running) return
    if (reduceMotion) { renderer.render(scene, camera); running = false; return }
    requestAnimationFrame(animate)
    const t = clock.getElapsedTime()
    group.rotation.y = t * 0.06
    group.position.y = Math.sin(t * 0.4) * 0.05
    renderer.render(scene, camera)
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !running) { running = true; animate() }
        else if (!e.isIntersecting) { running = false }
      })
    }, { threshold: 0.02 }).observe(canvas)
  } else {
    running = true; animate()
  }
}

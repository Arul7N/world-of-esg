<template>
  <div id="app">
    <a class="skip-link" href="#main">Skip to content</a>

    <!-- Preloader -->
    <Transition name="pre-exit">
      <div v-if="isLoading" id="preloader" class="preloader" aria-hidden="true">
        <!-- Floating ambient particles -->
        <div class="pre-particles" aria-hidden="true">
          <span v-for="n in 9" :key="n" class="pre-dot" :style="`--i:${n}`"></span>
        </div>

        <!-- Circular progress ring + logo -->
        <div class="pre-mark">
          <svg class="pre-ring-svg" viewBox="0 0 120 120" fill="none">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1D6B43"/>
                <stop offset="55%" stop-color="#2FA66A"/>
                <stop offset="100%" stop-color="#5BE38B"/>
              </linearGradient>
            </defs>
            <!-- Track -->
            <circle cx="60" cy="60" r="52" stroke="rgba(29,107,67,0.10)" stroke-width="2.5"/>
            <!-- Progress arc -->
            <circle id="preRing" cx="60" cy="60" r="52"
              stroke="url(#ringGrad)" stroke-width="2.5" stroke-linecap="round"
              stroke-dasharray="326.73" stroke-dashoffset="326.73"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <!-- Logo mark inside ring -->
          <div class="pre-logo-wrap">
            <img src="/images/logo/logo.png" class="pre-logo-inner" alt="" aria-hidden="true" />
          </div>
        </div>

        <!-- Brand name -->
        <div class="pre-text">
          <div class="pre-mask">
            <span class="pre-inner">World of <em>ESG</em></span>
          </div>
          <div class="pre-sub-mask">
            <span class="pre-sub">Climate Intelligence</span>
          </div>
        </div>

        <!-- Counter -->
        <div class="pre-pct"><span id="prePct">{{ loadingProgress }}</span>%</div>
      </div>
    </Transition>

    <!-- Grain -->
    <div class="grain" aria-hidden="true" />

    <!-- Custom Cursor (Desktop) -->
    <div v-if="!isMobile" id="cur" aria-hidden="true">
      <svg viewBox="0 0 34 34">
        <circle cx="17" cy="17" r="15" fill="none" stroke="#1D6B43" stroke-width="1.3" />
        <path d="M3 17 H31 M17 3 C9 9,9 25,17 31 M17 3 C25 9,25 25,17 31" fill="none" stroke="#2FA66A" stroke-width="1" opacity="0.8" />
      </svg>
    </div>
    <div v-if="!isMobile" id="curMoon" aria-hidden="true" />

    <!-- Progress Bar -->
    <div id="progress" aria-hidden="true" />

    <IconSprite />
    <AppNavigation />

    <main id="main" tabindex="-1">
      <router-view />
    </main>

    <BookingModal />
    <ChatPanel />
    <FloatingActions />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import AppNavigation from '@/components/AppNavigation.vue'
import IconSprite from '@/components/IconSprite.vue'
import BookingModal from '@/components/BookingModal.vue'
import ChatPanel from '@/components/ChatPanel.vue'
import FloatingActions from '@/components/FloatingActions.vue'
import { useAppStore } from '@/stores/app'

gsap.registerPlugin(ScrollTrigger)

const isLoading = ref(true)
const loadingProgress = ref(0)
const isMobile = ref(false)
const appStore = useAppStore()

onMounted(async () => {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches

  await runPreloader()
  isLoading.value = false

  // Signal all child components (HeroSection, ContactSection) that preloader is done
  appStore.setPreloaderDone()

  initLenis()
  initScrollProgress()
  initNavScroll()
  initReveal()
  initCounters()
  initHeroAnimation()
  initManifesto()
  initHorizontalScroll()
  initGlowCards()
  initMagneticButtons()

  if (!isMobile.value) {
    initCustomCursor()
  }

  // iOS Safari: address bar appears/hides on scroll, shifting the viewport height.
  // Refresh ScrollTrigger after the page settles so all trigger positions recalculate.
  setTimeout(() => ScrollTrigger.refresh(), 500)
  window.addEventListener('resize', () => ScrollTrigger.refresh(), { passive: true })
})

async function runPreloader() {
  const seen = (() => { try { return !!sessionStorage.getItem('woePre') } catch { return false } })()
  try { sessionStorage.setItem('woePre', '1') } catch { /* ignore */ }

  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return

  const ring = document.getElementById('preRing') as SVGCircleElement | null
  const CIRC = 326.73

  await new Promise<void>(resolve => {
    const t0 = performance.now()
    // Revisit: fast 600ms preloader so GSAP always has overlay time to initialize.
    // Skipping entirely caused hero text to stay invisible on page reload.
    const HARD = t0 + (seen ? 600 : 2400)
    let loadAt: number | null = document.readyState === 'complete' ? t0 : null
    if (!loadAt) window.addEventListener('load', () => { loadAt = performance.now() }, { once: true })

    const tick = () => {
      const now = performance.now()
      const hard = (now - t0) / (HARD - t0)
      const soft = loadAt ? Math.min(1, (now - loadAt) / 600) : 0
      const p = Math.round(Math.min(1, Math.max(hard, soft * 0.9)) * 100)
      loadingProgress.value = p
      if (ring) ring.style.strokeDashoffset = String(CIRC * (1 - p / 100))
      if (p >= 100) { resolve(); return }
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })

  await new Promise(r => setTimeout(r, 200))
}

function initLenis() {
  const lenis = new Lenis({ lerp: 0.085, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  // iOS: Lenis uses native touch scroll (smoothTouch:false), so its emitter
  // won't fire. Add a native listener so ScrollTrigger always gets updates.
  window.addEventListener('scroll', () => ScrollTrigger.update(), { passive: true })
  gsap.ticker.add(time => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

function initScrollProgress() {
  const el = document.getElementById('progress')
  if (!el) return
  window.addEventListener('scroll', () => {
    const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
    el.style.transform = `scaleX(${p})`
  }, { passive: true })
}

function initNavScroll() {
  const nav = document.querySelector('.nav-shell')
  if (!nav) return
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

function initReveal() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 34 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    })
  })
}

function initCounters() {
  gsap.utils.toArray<HTMLElement>('.counter').forEach(el => {
    const target = parseFloat(el.dataset.target || '0')
    const decimals = parseInt(el.dataset.decimals || '0')
    const obj = { value: 0 }
    gsap.to(obj, {
      value: target, duration: 2, ease: 'power2.out',
      onUpdate() {
        el.textContent = decimals > 0 ? obj.value.toFixed(decimals) : Math.round(obj.value).toString()
      },
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
    })
  })
}

function initHeroAnimation() {
  const tl = gsap.timeline({ delay: 0.3 })
  const eyebrow = document.getElementById('heroEyebrow')
  const masks = gsap.utils.toArray<HTMLElement>('.mask-in')
  const quote = document.getElementById('heroQuote')
  const heroP = document.getElementById('heroP')
  const heroCta = document.getElementById('heroCta')

  if (eyebrow) tl.to(eyebrow, { opacity: 1, duration: 0.6 })
  if (masks.length) tl.fromTo(masks, { y: '115%' }, { y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }, '-=0.3')
  if (quote) tl.to(quote, { opacity: 1, duration: 0.6 }, '-=0.4')
  if (heroP) tl.to(heroP, { opacity: 1, duration: 0.6 }, '-=0.4')
  if (heroCta) tl.to(heroCta, { opacity: 1, duration: 0.6 }, '-=0.3')
}

function initManifesto() {
  const text = document.getElementById('manifesto-text')
  if (!text) return

  if (isMobile.value) {
    // Mobile: skip the ScrollTrigger pin — GSAP pinning uses position:fixed which
    // causes layout chaos on iOS Safari. Just light all words immediately.
    text.querySelectorAll<HTMLElement>('.w').forEach(s => s.classList.add('lit'))
    return
  }

  ScrollTrigger.create({
    trigger: '#manifesto',
    start: 'top top',
    end: '+=100%',
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    onUpdate(self) {
      const spans = text.querySelectorAll<HTMLElement>('.w')
      const total = spans.length
      const lit = Math.round(self.progress * total * 1.1)
      spans.forEach((s, i) => {
        if (i < lit) s.classList.add('lit')
        else s.classList.remove('lit')
      })
    }
  })
}

function initHorizontalScroll() {
  const hWrap = document.getElementById('hWrap')
  const hInner = document.getElementById('hInner')
  if (!hWrap || !hInner) return

  if (isMobile.value || window.innerWidth < 1024) {
    hWrap.classList.add('hstatic')
    return
  }

  hWrap.classList.add('hscroll')

  const getScrollAmount = () => -(hInner.scrollWidth - window.innerWidth)

  ScrollTrigger.create({
    trigger: hWrap,
    start: 'top top',
    end: () => `+=${Math.abs(getScrollAmount())}`,
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    onUpdate(self) {
      gsap.set(hInner, { x: getScrollAmount() * self.progress })
    }
  })
}

function initGlowCards() {
  document.querySelectorAll<HTMLElement>('[data-glow]').forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--gx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--gy', `${e.clientY - rect.top}px`)
    })
  })
}

function initMagneticButtons() {
  document.querySelectorAll<HTMLElement>('.mag').forEach(btn => {
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * 0.25
      const dy = (e.clientY - cy) * 0.25
      gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' })
    })
  })
}

function initCustomCursor() {
  const cursor = document.getElementById('cur')
  const moon = document.getElementById('curMoon')
  if (!cursor || !moon) return

  let mx = window.innerWidth / 2, my = window.innerHeight / 2
  let cx = mx, cy = my, angle = 0

  const tick = () => {
    cx += (mx - cx) * 0.16
    cy += (my - cy) * 0.16
    angle += 0.06
    cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%) rotate(${angle * 12}deg)`
    const r = 24
    moon.style.transform = `translate(${cx + Math.cos(angle) * r}px,${cy + Math.sin(angle) * r}px) translate(-50%,-50%)`
    requestAnimationFrame(tick)
  }

  window.addEventListener('mousemove', (e: MouseEvent) => { mx = e.clientX; my = e.clientY })
  tick()

  document.querySelectorAll('a,button,[data-glow],.mag').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.opacity = '0.45' })
    el.addEventListener('mouseleave', () => { cursor.style.opacity = '1' })
  })
}
</script>

<style>
/* ─── Preloader ─────────────────────────────────────────────── */
.preloader {
  position: fixed; inset: 0; z-index: 10000;
  background: linear-gradient(160deg, #FAFBF9 0%, #EFF2EC 55%, #E8EFE9 100%);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px;
}

/* Iris-close exit via Vue <Transition name="pre-exit"> */
.pre-exit-leave-active {
  transition: clip-path 0.65s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.4s ease;
  pointer-events: none;
}
.pre-exit-leave-to {
  clip-path: circle(0% at 50% 50%);
  opacity: 0;
}

/* ── Ambient floating particles */
.pre-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.pre-dot {
  position: absolute;
  width: calc(3px + (var(--i) * 1.5px));
  height: calc(3px + (var(--i) * 1.5px));
  border-radius: 50%;
  background: radial-gradient(circle, #5BE38B, #2FA66A);
  opacity: 0;
  animation: preFloat calc(2.8s + var(--i) * 0.35s) ease-in-out calc(var(--i) * 0.18s) infinite;
  left: calc(8% + (var(--i) - 1) * 10.5%);
  top: calc(15% + ((var(--i) - 1) % 4) * 22%);
}
@keyframes preFloat {
  0%   { opacity: 0; transform: translateY(0) scale(0.4); }
  25%  { opacity: 0.45; transform: translateY(-14px) scale(1); }
  75%  { opacity: 0.25; transform: translateY(-34px) scale(0.7); }
  100% { opacity: 0; transform: translateY(-54px) scale(0.3); }
}

/* ── Ring + logo mark */
.pre-mark {
  position: relative; width: 120px; height: 120px;
  animation: preFadeIn 0.5s ease 0.05s both;
}
.pre-ring-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
}
#preRing { transition: stroke-dashoffset 0.08s linear; }
.pre-logo-wrap {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  animation: preLogoPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s both;
}
.pre-logo-inner { width: 58px; height: 54px; }
@keyframes preLogoPop {
  from { opacity: 0; transform: scale(0.55); }
  to   { opacity: 1; transform: scale(1); }
}

/* ── Brand text */
.pre-text {
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  animation: preFadeIn 0.4s ease 0.1s both;
}
.pre-mask { overflow: hidden; display: block; }
.pre-sub-mask { overflow: hidden; display: block; }
.pre-inner {
  display: block;
  transform: translateY(115%);
  animation: preMaskUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both;
  font-family: 'Inter Tight', sans-serif; font-weight: 800; letter-spacing: -0.04em;
  font-size: clamp(28px, 6.5vw, 62px); line-height: 1; color: #243128;
}
.pre-inner em {
  font-style: normal;
  background: linear-gradient(100deg, #1D6B43, #2FA66A 50%, #5BE38B);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.pre-sub {
  display: block;
  transform: translateY(100%);
  animation: preMaskUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.58s both;
  font-family: 'Inter Tight', sans-serif; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; font-size: 10.5px;
  color: #465348; opacity: 0.6;
}
@keyframes preMaskUp { to { transform: translateY(0); } }
@keyframes preFadeIn { from { opacity: 0; } to { opacity: 1; } }

/* ── Percentage counter */
.pre-pct {
  font-family: 'Inter Tight', sans-serif; font-size: 11.5px; letter-spacing: 0.14em;
  color: #465348; opacity: 0;
  animation: preFadeIn 0.5s ease 0.5s both;
}

#cur {
  position: fixed; top: 0; left: 0; width: 34px; height: 34px;
  pointer-events: none; z-index: 9999; transform: translate(-50%,-50%);
  will-change: transform; mix-blend-mode: multiply;
}
#curMoon {
  position: fixed; top: 0; left: 0; width: 7px; height: 7px;
  border-radius: 50%; background: var(--gold);
  pointer-events: none; z-index: 9999; transform: translate(-50%,-50%); will-change: transform;
}
@media (max-width: 1024px) { #cur, #curMoon { display: none; } }
</style>

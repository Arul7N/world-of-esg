<template>
  <div id="app">
    <a class="skip-link" href="#main">Skip to content</a>

    <!-- Preloader -->
    <div v-if="isLoading" id="preloader" class="preloader" aria-hidden="true">
      <svg viewBox="0 0 128 120" class="pre-logo-svg" aria-hidden="true"><use href="#i-logo"/></svg>
      <div class="pre-mask">
        <span class="pre-inner" id="preInner">World of <em>ESG</em></span>
      </div>
      <div class="pre-line">
        <span class="pre-fill" id="preFill"></span>
      </div>
      <div class="pre-pct">
        <span id="prePct">{{ loadingProgress }}</span>%
      </div>
    </div>

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
})

async function runPreloader() {
  const seen = (() => { try { return !!sessionStorage.getItem('woePre') } catch { return false } })()
  try { sessionStorage.setItem('woePre', '1') } catch { /* ignore */ }

  if (seen || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return

  const inner = document.getElementById('preInner')
  const fill = document.getElementById('preFill')
  const pct = document.getElementById('prePct')

  if (inner) {
    requestAnimationFrame(() => {
      inner.style.transition = 'transform .8s cubic-bezier(.16,1,.3,1)'
      inner.style.transform = 'translateY(0)'
    })
  }
  if (pct) {
    setTimeout(() => { pct.style.transition = 'opacity .5s'; pct.style.opacity = '1' }, 300)
  }

  await new Promise<void>(resolve => {
    const t0 = performance.now()
    const HARD = t0 + 2200
    let loadAt: number | null = document.readyState === 'complete' ? t0 : null
    if (!loadAt) window.addEventListener('load', () => { loadAt = performance.now() }, { once: true })

    const tick = () => {
      const now = performance.now()
      const hard = (now - t0) / (HARD - t0)
      const soft = loadAt ? Math.min(1, (now - loadAt) / 600) : 0
      const p = Math.round(Math.min(1, Math.max(hard, soft * 0.9)) * 100)
      loadingProgress.value = p
      if (fill) fill.style.width = p + '%'
      if (p >= 100) { resolve(); return }
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })

  await new Promise(r => setTimeout(r, 180))
}

function initLenis() {
  const lenis = new Lenis({ lerp: 0.085, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
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
      scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' }
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

  ScrollTrigger.create({
    trigger: '#manifesto',
    start: 'top top',
    end: '+=100%',
    pin: true,
    pinSpacing: true,
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
.preloader {
  position: fixed; inset: 0; z-index: 10000;
  background: linear-gradient(180deg, #FAFBF9, #EFF2EC);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px;
}
.pre-logo-svg { width: 46px; height: 46px; opacity: 0; transform: scale(0.8); }
.pre-mask { overflow: hidden; display: block; }
.pre-inner {
  display: block; transform: translateY(115%);
  font-family: 'Inter Tight', sans-serif; font-weight: 800; letter-spacing: -0.04em;
  font-size: clamp(30px, 7vw, 66px); line-height: 1; color: #243128;
}
.pre-inner em {
  font-style: normal;
  background: linear-gradient(100deg, #1D6B43, #2FA66A 55%, #5BE38B);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.pre-line { width: 200px; height: 2px; background: rgba(36,49,40,0.1); border-radius: 2px; overflow: hidden; }
.pre-fill { display: block; height: 100%; width: 0%; background: linear-gradient(90deg,#1D6B43,#5BE38B); border-radius: 2px; }
.pre-pct { font-family: 'Inter Tight', sans-serif; font-size: 12px; letter-spacing: 0.12em; color: #465348; opacity: 0; }

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

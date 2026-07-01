<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
    <!-- Canvas BG: full viewport width -->
    <div
      style="
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 0;
        overflow: hidden;
      "
    >
      <canvas
        id="hero-canvas"
        style="display: block; width: 100%; height: 100%"
        aria-hidden="true"
      ></canvas>
    </div>
    <div
      class="blob"
      style="
        width: 560px;
        height: 560px;
        background: radial-gradient(circle, #ddf5e5, transparent 70%);
        top: -120px;
        right: 6%;
      "
    ></div>
    <div
      class="blob"
      style="
        width: 520px;
        height: 520px;
        background: radial-gradient(circle, rgba(116, 48, 164, 0.16), transparent 70%);
        bottom: -160px;
        left: -120px;
        opacity: 0.5;
      "
    ></div>

    <div class="relative max-w-[1380px] mx-auto w-full px-6 md:px-10 z-10">
      <div class="max-w-[620px]">
        <span class="eyebrow mb-7" id="heroEyebrow" style="opacity: 0">World of ESG</span>
        <h1
          class="font-display font-extrabold text-charcoal leading-[1.04] text-[clamp(2.05rem,4.9vw,4.4rem)] mb-6"
        >
          <span class="mask"><span class="mask-in">A next-generation</span></span>
          <span class="mask"
            ><span class="mask-in"
              ><span class="hero-esg-line">ESG &amp; Sustainability</span></span
            ></span
          >
          <span class="mask"><span class="mask-in">company</span></span>
        </h1>
        <p
          class="font-serif-q text-charcoal/75 text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.35] max-w-xl mb-5"
          id="heroQuote"
          style="opacity: 0"
        >
          Helping organizations transition toward
          <span class="text-grad">resilient, compliant, and low-carbon</span> business models.
        </p>
        <p
          class="text-graphite text-[clamp(1.0rem,1.4vw,1.25rem)] leading-relaxed max-w-xl mb-9"
          id="heroP"
          style="opacity: 0"
        >
          We bring strategy, technology, talent, research, legal expertise, and real-world execution
          together — one integrated ecosystem for end-to-end climate transformation.
        </p>
        <div class="flex flex-wrap gap-4 mb-12" id="heroCta" style="opacity: 0">
          <button
            class="btn-primary inline-flex items-center gap-2 px-8 py-4 font-display font-medium"
          >
            Book a Call
            <svg class="icon arrow" style="width: 1.05em; height: 1.05em">
              <use href="#i-arrow" />
            </svg>
          </button>
          <button
            class="btn-ghost inline-flex items-center gap-2 px-8 py-4 font-display font-medium"
          >
            Explore Solutions
            <svg class="icon" style="width: 1em; height: 1em"><use href="#i-arrow-ur" /></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-7 left-6 md:left-10 z-10 flex items-center gap-3 text-graphite/60">
      <span class="w-[1px] h-10 bg-graphite/30 relative overflow-hidden">
        <span
          class="absolute inset-x-0 top-0 h-3 bg-forest"
          style="animation: scrollcue 2s ease-in-out infinite"
        ></span>
      </span>
      <span class="text-[11px] tracking-[0.25em] uppercase font-display">Scroll</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import { initHeroGlobe } from '@/composables/useGlobe'

const appStore = useAppStore()
const reduceMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion:reduce)').matches
    : false

let startGlobe: () => void = () => {}

onMounted(() => {
  // Canvas is in the DOM now — safe to initialize Three.js
  startGlobe = initHeroGlobe(reduceMotion)

  // If preloader already done (e.g. return visit where preloader is skipped),
  // fire immediately; otherwise wait for the store signal
  if (appStore.preloaderDone) {
    startGlobe()
  }
})

watch(
  () => appStore.preloaderDone,
  (done) => {
    if (done) startGlobe()
  }
)
</script>

<style scoped>
@keyframes scrollcue {
  0% {
    transform: translateY(-12px);
  }
  50% {
    transform: translateY(40px);
  }
  100% {
    transform: translateY(-12px);
  }
}

.eyebrow {
  font-family: 'Inter Tight', sans-serif;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--forest);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.eyebrow::before {
  content: '';
  width: 28px;
  height: 1.5px;
  background: var(--forest);
  display: inline-block;
}

.mask {
  overflow: hidden;
  display: block;
  padding-bottom: 0.14em;
  margin-bottom: -0.14em;
}

.mask-in {
  display: block;
  transform: translateY(115%);
}

.btn-primary {
  background: linear-gradient(120deg, var(--forest), var(--ocean));
  color: var(--sand);
  border-radius: 100px;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s;
  box-shadow: 0 10px 26px -12px rgba(29, 107, 67, 0.6);
}

.btn-primary:hover {
  box-shadow: 0 18px 40px -14px rgba(47, 166, 106, 0.7);
}

.btn-primary .arrow {
  transition: transform 0.35s;
  display: inline-block;
}

.btn-primary:hover .arrow {
  transform: translateX(5px);
}

.btn-ghost {
  border: 1.5px solid rgba(70, 83, 72, 0.25);
  color: var(--charcoal);
  border-radius: 100px;
  transition:
    transform 0.35s,
    border-color 0.35s,
    background 0.35s;
}

.btn-ghost:hover {
  border-color: var(--forest);
  background: rgba(221, 245, 229, 0.5);
}

.hero-esg-line {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  /* Capped at 3.6rem so the full string fits the 620px column on every screen */
  font-size: clamp(1.5rem, 3.8vw, 3.6rem);
  white-space: nowrap;
  /* Logo tricolour: purple → indigo → emerald — matches the brand mark */
  background: linear-gradient(110deg, #7430a4 0%, #3a4db8 40%, #2fa66a 78%, #1d6b43 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
}

.icon {
  width: 1.5em;
  height: 1.5em;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
  display: inline-block;
  vertical-align: middle;
}
</style>

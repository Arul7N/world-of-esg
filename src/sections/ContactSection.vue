<template>
  <section
    id="contact"
    class="relative py-24 md:py-36 overflow-hidden text-sand"
    style="background: linear-gradient(178deg, #2a0f52 0%, #33177a 30%, #22308c 62%, #16325e 100%)"
  >
    <div style="position: absolute; inset: 0; z-index: 0; opacity: 0.55" aria-hidden="true">
      <canvas id="cta-canvas" style="display: block; width: 100%; height: 100%"></canvas>
    </div>
    <div
      class="blob"
      style="
        width: 640px;
        height: 640px;
        background: radial-gradient(
          circle,
          rgba(116, 48, 164, 0.4) 0%,
          rgba(58, 77, 184, 0.22) 55%,
          transparent 75%
        );
        top: -180px;
        left: 50%;
        transform: translateX(-50%);
      "
    ></div>
    <div class="max-w-[1000px] mx-auto px-6 md:px-10 text-center relative z-10">
      <span
        class="eyebrow mb-7"
        style="color: var(--lavender); --forest: var(--lavender)"
        data-reveal
        >Ready to Act?</span
      >
      <h2
        class="font-display font-extrabold text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] mb-8"
        data-reveal
      >
        Not just a Consultancy or SaaS company. A climate transformation ecosystem.
      </h2>
      <p
        class="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-7"
        style="color: var(--lavender)"
        data-reveal
      >
        World of ESG is an integrated platform — from advisory to execution. Whether you're starting
        your ESG journey or accelerating toward net-zero, we bring the strategy, the digital tools,
        the talent, the research, the legal expertise, and the execution capability.
      </p>
      <div class="flex flex-wrap justify-center gap-3 mb-12 text-sm font-display" data-reveal>
        <span
          class="px-4 py-1.5 rounded-full border"
          style="border-color: rgba(237, 233, 247, 0.35); color: rgba(237, 233, 247, 0.92)"
          >The Strategy</span
        >
        <span
          class="px-4 py-1.5 rounded-full border"
          style="border-color: rgba(237, 233, 247, 0.35); color: rgba(237, 233, 247, 0.92)"
          >The Digital Tools</span
        >
        <span
          class="px-4 py-1.5 rounded-full border"
          style="border-color: rgba(237, 233, 247, 0.35); color: rgba(237, 233, 247, 0.92)"
          >The Talent</span
        >
        <span
          class="px-4 py-1.5 rounded-full border"
          style="border-color: rgba(237, 233, 247, 0.35); color: rgba(237, 233, 247, 0.92)"
          >The Research</span
        >
        <span
          class="px-4 py-1.5 rounded-full border"
          style="border-color: rgba(237, 233, 247, 0.35); color: rgba(237, 233, 247, 0.92)"
          >The Legal Expertise</span
        >
        <span
          class="px-4 py-1.5 rounded-full border"
          style="border-color: rgba(237, 233, 247, 0.35); color: rgba(237, 233, 247, 0.92)"
          >The Execution Capability</span
        >
      </div>
      <div class="flex flex-wrap justify-center gap-4" data-reveal>
        <button
          @click="openBook"
          class="mag inline-flex items-center gap-2 px-9 py-4 rounded-full bg-aurora text-charcoal font-display font-semibold hover:-translate-y-1 transition-transform duration-300"
        >
          <svg class="icon" style="width: 1.05em; height: 1.05em"><use href="#i-cal" /></svg> Book a
          Call
        </button>
        <a
          href="https://platform.worldofesg.in/demo"
          target="_blank"
          rel="noopener"
          class="mag inline-flex items-center gap-2 px-9 py-4 rounded-full border text-sand font-display font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          style="border-color: rgba(237, 233, 247, 0.45)"
        >
          <svg class="icon" style="width: 1.05em; height: 1.05em"><use href="#i-play" /></svg>
          Request a Platform Demo
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useBookingStore } from '@/stores/booking'
import { initCtaGlobe } from '@/composables/useGlobe'

const bookingStore = useBookingStore()
const openBook = () => bookingStore.openBooking()

const reduceMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion:reduce)').matches
    : false

onMounted(() => {
  initCtaGlobe(reduceMotion)
})
</script>

<template>
  <section id="impact" class="relative py-20 md:py-28 bg-mist overflow-hidden">
    <div class="max-w-[1380px] mx-auto px-6 md:px-10">
      <div class="max-w-3xl mb-12">
        <span class="eyebrow mb-6" data-reveal>Impact Metrics</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]" data-reveal>Numbers that come from <span class="text-grad">real outcomes.</span></h2>
        <p class="text-graphite text-lg leading-relaxed" data-reveal>We measure success by the professionals trained, the reporting time reclaimed, and the capabilities built — not the engagements sold. Every number below is confirmed, not projected.</p>
      </div>

      <div class="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center mb-14" id="impactHero" data-reveal>
        <div>
          <div class="font-display font-extrabold text-forest leading-none text-[clamp(4.5rem,9vw,8rem)]"><span class="counter" data-target="70">0</span><span class="text-[0.45em] align-top">%</span></div>
          <p class="font-display font-semibold text-charcoal text-xl mt-2 mb-3">of reporting time, reclaimed.</p>
          <p class="text-graphite leading-relaxed max-w-md">Pre-built BRSR, GRI, TCFD, and CBAM templates, automated data collection, and real-time compliance dashboards eliminate the manual rework.</p>
        </div>
        <div>
          <div class="flex justify-between text-xs font-display font-semibold text-graphite mb-2">
            <span>Manual reporting process</span><span>With World of ESG</span>
          </div>
          <div class="imp-track" ref="trackEl">
            <div class="imp-fill" id="impFill"><span class="font-display">30%</span></div>
            <div class="imp-saved" id="impSaved"><em class="font-display">70% of the time, back</em></div>
          </div>
          <div class="flex justify-between text-[11px] font-display text-graphite/80 mt-2"><span>0</span><span>first reporting year →</span><span>100%</span></div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-10 lg:gap-0 lg:divide-x lg:divide-stone" id="impactStrip">
        <div class="lg:pr-10" data-reveal>
          <div class="imp-dots" aria-hidden="true">
            <i v-for="(d, i) in dotDelays" :key="i" :style="`--d:${d}s`"></i>
          </div>
          <div class="font-display font-extrabold text-3xl mt-4" style="color:#7430A4"><span class="counter" data-target="500">0</span>+ learners</div>
          <p class="text-graphite text-[15px] leading-relaxed mt-1">Professionals trained across corporate sustainability teams and university cohorts — each dot is ten people.</p>
        </div>
        <div class="lg:px-10" data-reveal>
          <div class="imp-mods" aria-hidden="true">
            <i v-for="(d, i) in modDelays" :key="i" :style="`--d:${d}s`"></i>
          </div>
          <div class="font-display font-extrabold text-3xl mt-4" style="color:#117C50"><span class="counter" data-target="20">0</span>+ platform modules</div>
          <p class="text-graphite text-[15px] leading-relaxed mt-1">Carbon accounting, automated ESG reporting, and sustainability intelligence — built for India's regulatory context.</p>
        </div>
        <div class="lg:pl-10" data-reveal>
          <svg viewBox="0 0 192 64" class="imp-loop" aria-hidden="true">
            <path d="M16 32 a16 16 0 1 1 32 0 a16 16 0 1 1 -32 0" fill="none" stroke="#1D6B43" stroke-width="4"/>
            <path d="M40 32 a16 16 0 1 1 32 0 a16 16 0 1 1 -32 0" fill="none" stroke="#2FA66A" stroke-width="4"/>
            <path d="M64 32 a16 16 0 1 1 32 0 a16 16 0 1 1 -64 0" fill="none" stroke="#3A4DB8" stroke-width="4"/>
            <path d="M88 32 a16 16 0 1 1 32 0 a16 16 0 1 1 -32 0" fill="none" stroke="#22308C" stroke-width="4"/>
            <path d="M112 32 a16 16 0 1 1 32 0 a16 16 0 1 1 -32 0" fill="none" stroke="#7430A4" stroke-width="4"/>
            <path d="M136 32 a16 16 0 1 1 32 0 a16 16 0 1 1 -32 0" fill="none" stroke="#5BE38B" stroke-width="4"/>
            <circle cx="168" cy="32" r="4" fill="#5BE38B" class="an-pulse"/>
          </svg>
          <div class="font-display font-extrabold text-3xl mt-4 text-forest"><span class="counter" data-target="6">0</span> pillars, one system</div>
          <p class="text-graphite text-[15px] leading-relaxed mt-1">Consulting, Platform, Capability, Implementation, Research, and Legal — interlocked so each one compounds the others.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const trackEl = ref<HTMLElement | null>(null)

const dotDelays = Array.from({ length: 50 }, (_, i) => (i * 0.05).toFixed(2))
const modDelays = Array.from({ length: 20 }, (_, i) => (i * 0.07).toFixed(2))

onMounted(() => {
  const strip = document.getElementById('impactStrip')
  const fill = document.getElementById('impFill')
  const saved = document.getElementById('impSaved')
  const track = trackEl.value

  if (!strip || !fill || !saved || !track) return

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      track.classList.add('go')
      strip.classList.add('go')
      observer.disconnect()
    }
  }, { threshold: 0.3 })
  observer.observe(track)
})
</script>

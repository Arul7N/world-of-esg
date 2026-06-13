<template>
  <section id="market" class="relative py-20 md:py-28 overflow-hidden">
    <div class="blob" style="width:560px;height:560px;background:radial-gradient(circle,rgba(58,77,184,.16),transparent 70%);top:-100px;right:-120px;opacity:.4"></div>
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <div class="max-w-3xl mb-12">
        <span class="eyebrow mb-6" data-reveal>Market Opportunity</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]" data-reveal>A once-in-a-generation <span class="text-grad">climate economy.</span></h2>
        <p class="text-graphite text-lg leading-relaxed mt-4" data-reveal>The method matters because the moment does — the market is moving on the same clock as the regulation.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone rounded-3xl overflow-hidden border border-stone mb-20">
        <div class="bg-sand p-9 lg:p-10">
          <div class="font-display font-extrabold text-forest text-[clamp(2.8rem,5vw,4rem)] leading-none mb-3">$<span class="counter" data-target="53">0</span>B</div>
          <p class="text-graphite leading-relaxed">Global ESG advisory market by 2028.</p>
        </div>
        <div class="bg-sand p-9 lg:p-10">
          <div class="font-display font-extrabold text-forest text-[clamp(2.8rem,5vw,4rem)] leading-none mb-3">$<span class="counter" data-target="7">0</span>T</div>
          <p class="text-graphite leading-relaxed">Green investment needed by 2030.</p>
        </div>
        <div class="bg-sand p-9 lg:p-10">
          <div class="font-display font-extrabold text-forest text-[clamp(2.8rem,5vw,4rem)] leading-none mb-3"><span class="counter" data-target="50">0</span>K+</div>
          <p class="text-graphite leading-relaxed">Companies under mandatory reporting.</p>
        </div>
        <div class="bg-sand p-9 lg:p-10">
          <div class="font-display font-extrabold text-forest text-[clamp(2.8rem,5vw,4rem)] leading-none mb-3"><span class="counter" data-target="2.4" data-decimals="1">0</span>M</div>
          <p class="text-graphite leading-relaxed">ESG talent gap by 2030.</p>
        </div>
      </div>
      <div class="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 items-center">
        <div data-reveal>
          <div class="text-forest mb-4">
            <svg class="icon" style="width:2em;height:2em"><use href="#i-zap"/></svg>
          </div>
          <h3 class="font-display font-bold text-charcoal text-2xl md:text-3xl mb-3">Green investment to 2030</h3>
          <p class="text-graphite leading-relaxed text-lg">The $7 trillion the world needs to invest by 2030 — shown as a trajectory.</p>
        </div>
        <div data-reveal>
          <svg id="growth-chart" viewBox="0 0 600 300" class="w-full h-auto" role="img" aria-label="Green investment growth trajectory to 2030">
            <defs>
              <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2FA66A" stop-opacity="0.45"/><stop offset="100%" stop-color="#DDF5E5" stop-opacity="0.05"/></linearGradient>
              <linearGradient id="strokeG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1D6B43"/><stop offset="100%" stop-color="#5BE38B"/></linearGradient>
            </defs>
            <g stroke="#E7E2D8" stroke-width="1"><line x1="40" y1="60" x2="580" y2="60"/><line x1="40" y1="130" x2="580" y2="130"/><line x1="40" y1="200" x2="580" y2="200"/><line x1="40" y1="260" x2="580" y2="260"/></g>
            <path class="chart-area" fill="url(#areaG)" style="opacity:0" d="M40,250 L130,232 L220,205 L310,168 L400,122 L490,72 L560,40 L560,260 L40,260 Z"/>
            <path class="chart-line" fill="none" stroke="url(#strokeG)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray:1400;stroke-dashoffset:1400" d="M40,250 L130,232 L220,205 L310,168 L400,122 L490,72 L560,40"/>
            <circle class="chart-dot" cx="560" cy="40" r="6" fill="#5BE38B" opacity="0"/>
            <circle class="chart-dot" cx="560" cy="40" r="11" fill="#5BE38B" opacity="0"/>
            <g fill="#465348" font-family="Inter Tight" font-size="13" font-weight="600">
              <text x="40" y="285">2024</text>
              <text x="290" y="285" text-anchor="middle">2027</text>
              <text x="560" y="285" text-anchor="end">2030</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const chart = document.getElementById('growth-chart')
  if (!chart) return
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const line = chart.querySelector('.chart-line') as SVGPathElement
      const area = chart.querySelector('.chart-area') as SVGPathElement
      const dots = chart.querySelectorAll<SVGCircleElement>('.chart-dot')
      if (line) {
        line.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.22,1,0.36,1)'
        line.style.strokeDashoffset = '0'
      }
      if (area) {
        area.style.transition = 'opacity 1.2s 1.8s ease'
        area.style.opacity = '1'
      }
      dots.forEach((d, i) => {
        d.style.transition = `opacity 0.4s ${1.8 + i * 0.15}s`
        d.style.opacity = i === 0 ? '1' : '0.4'
      })
      observer.disconnect()
    }
  }, { threshold: 0.3 })
  observer.observe(chart)
})
</script>

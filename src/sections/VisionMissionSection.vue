<template>
  <section id="vm" class="relative py-28 md:py-40 overflow-hidden" style="background:linear-gradient(160deg,#0B1238 0%,#22308C 55%,#0D1545 100%)">
    <div class="blob" style="width:600px;height:600px;background:radial-gradient(circle,rgba(169,188,245,.30),transparent 70%);top:-180px;right:-120px"></div>
    <div class="blob" style="width:420px;height:420px;background:radial-gradient(circle,rgba(91,227,139,.16),transparent 70%);bottom:-160px;left:-100px"></div>
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <span class="eyebrow mb-12" style="color:var(--sky);--forest:var(--sky)" data-reveal>What Drives Us</span>
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x items-start" style="--tw-divide-opacity:1" data-reveal>
        <div class="lg:pr-14">
          <div class="flex items-center gap-5 mb-6">
            <svg viewBox="0 0 64 64" class="w-16 h-16 shrink-0" aria-hidden="true">
              <circle cx="32" cy="32" r="30" fill="rgba(169,188,245,.10)"/>
              <circle cx="32" cy="32" r="22" fill="none" stroke="#A9BCF5" stroke-width="1.2" opacity=".5"/>
              <g class="vis-eye">
                <path d="M10 32 Q32 14 54 32 Q32 50 10 32 Z" fill="#fff" stroke="#3A4DB8" stroke-width="2"/>
                <g class="vis-look">
                  <circle cx="32" cy="32" r="9" fill="#A9BCF5"/>
                  <circle cx="32" cy="32" r="4.5" fill="#0B1238"/>
                  <circle cx="34.5" cy="29.5" r="1.6" fill="#fff"/>
                </g>
              </g>
            </svg>
            <h3 class="font-serif-q text-4xl md:text-5xl" style="color:var(--sky)">Vision</h3>
          </div>
          <p class="text-xl md:text-2xl leading-[1.5]" style="color:rgba(216,231,255,.94)">To become a global leader in ESG integration and Climate Intelligence — through <span style="color:var(--aurora)">Sustainable Growth, Regulatory Resilience, and Measurable Decarbonization.</span></p>
        </div>
        <div class="lg:pl-14 pt-12 lg:pt-0" style="border-color:rgba(169,188,245,.18)">
          <div class="flex items-center gap-5 mb-6">
            <svg viewBox="0 0 64 64" class="w-16 h-16 shrink-0" aria-hidden="true">
              <circle cx="32" cy="32" r="30" fill="rgba(169,188,245,.10)"/>
              <line x1="14" y1="42" x2="50" y2="42" stroke="#A9BCF5" stroke-width="2" stroke-linecap="round" opacity=".45"/>
              <path class="mis-arch" d="M14 42 Q32 18 50 42" fill="none" stroke="#A9BCF5" stroke-width="2" stroke-linecap="round"/>
              <circle cx="14" cy="42" r="4" fill="#3A4DB8"/>
              <circle cx="50" cy="42" r="4" fill="#5BE38B"/>
              <circle r="6.5" fill="#A9BCF5" opacity=".25" class="mis-travel"/>
              <circle r="3.2" fill="#A9BCF5" class="mis-travel"/>
            </svg>
            <h3 class="font-serif-q text-4xl md:text-5xl" style="color:var(--sky)">Mission</h3>
          </div>
          <p class="text-xl md:text-2xl leading-[1.5]" style="color:rgba(216,231,255,.94)">To bridge the gap between sustainability strategy and real-world climate action — through <span style="color:var(--aurora)">expertise, technology, and execution excellence.</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

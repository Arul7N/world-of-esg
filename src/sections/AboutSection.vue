<template>
  <section id="about" class="relative py-20 md:py-28 overflow-hidden">
    <div class="blob" style="width:520px;height:520px;background:radial-gradient(circle,#DDF5E5,transparent 70%);top:8%;left:-160px"></div>
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      <div>
        <span class="eyebrow mb-7" data-reveal>The Integrated Ecosystem</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] mb-8" data-reveal>Six disciplines.<br>One continuous loop.</h2>
        <p class="font-serif-q text-charcoal text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.3] mb-8" data-reveal>Strategy, technology, talent, and execution — not separate offerings, but a single reinforcing system that moves organizations from <span class="text-grad">insight to measurable impact.</span></p>
        <p class="text-graphite text-lg leading-relaxed mb-7" data-reveal>Most firms pick one lane. We deliberately connected six. Consulting insights sharpen the platform. Platform data informs training. Training builds the capacity for real-world implementation. Implementation generates the evidence that refines the next strategy. The loop never stops.</p>
        <div class="flex flex-wrap gap-3" data-reveal>
          <span class="px-4 py-2 rounded-full bg-mint text-forest text-sm font-medium font-display">ESG Strategy Consulting</span>
          <span class="px-4 py-2 rounded-full bg-mint text-forest text-sm font-medium font-display">SaaS Platform</span>
          <span class="px-4 py-2 rounded-full bg-mint text-forest text-sm font-medium font-display">ESG Skill Development</span>
          <span class="px-4 py-2 rounded-full bg-mint text-forest text-sm font-medium font-display">Decarbonization Implementation</span>
          <span class="px-4 py-2 rounded-full bg-mint text-forest text-sm font-medium font-display">ESG Research</span>
          <span class="px-4 py-2 rounded-full bg-mint text-forest text-sm font-medium font-display">Legal Aspects of Environment</span>
        </div>
      </div>
      <!-- ECOSYSTEM ILLUSTRATION -->
      <div data-reveal>
        <svg viewBox="0 0 460 440" class="w-full h-auto" role="img" aria-label="Six disciplines blooming into one integrated ecosystem">
          <defs>
            <path id="petal" d="M230 220 C194 192 194 146 230 104 C266 146 266 192 230 220 Z"/>
            <radialGradient id="bloomGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stop-color="#5BE38B" stop-opacity=".26"/>
              <stop offset="58%" stop-color="#DDF5E5" stop-opacity=".12"/>
              <stop offset="100" stop-color="#DDF5E5" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="230" cy="220" r="200" fill="url(#bloomGlow)"/>
          <circle cx="230" cy="220" r="150" fill="none" stroke="#9BC7A4" stroke-width="1" stroke-dasharray="1 11" opacity=".55"/>
          <g class="bloom">
            <g style="mix-blend-mode:multiply">
              <use href="#petal" fill="#1D6B43" opacity=".5" transform="rotate(0 230 220)"/>
              <use href="#petal" fill="#2FA66A" opacity=".5" transform="rotate(90 230 220)"/>
              <use href="#petal" fill="#0FA37F" opacity=".5" transform="rotate(180 230 220)"/>
              <use href="#petal" fill="#9BC7A4" opacity=".6" transform="rotate(270 230 220)"/>
            </g>
          </g>
          <circle cx="230" cy="104" r="5" fill="#1D6B43"/>
          <circle cx="346" cy="220" r="5" fill="#2FA66A"/>
          <circle cx="230" cy="336" r="5" fill="#0FA37F"/>
          <circle cx="114" cy="220" r="5" fill="#CBBE8A"/>
          <circle class="eco-pulse" cx="230" cy="220" r="48" fill="url(#bloomGlow)"/>
          <circle cx="230" cy="220" r="30" fill="#FAFBF9" stroke="#2FA66A" stroke-width="1.4"/>
          <circle class="eco-pulse" cx="230" cy="220" r="7" fill="#2FA66A"/>
          <circle class="eco-float f1" cx="64" cy="76" r="5" fill="#5BE38B" opacity=".6"/>
          <circle class="eco-float f2" cx="398" cy="360" r="7" fill="#9BC7A4" opacity=".6"/>
          <circle class="eco-float f3" cx="402" cy="92" r="4" fill="#CBBE8A" opacity=".6"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// About section
</script>
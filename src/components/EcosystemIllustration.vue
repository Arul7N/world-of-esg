<template>
  <svg viewBox="0 0 460 440" class="w-full h-auto" role="img" aria-label="Four disciplines blooming into one integrated ecosystem">
    <defs>
      <path id="petal" d="M230 220 C194 192 194 146 230 104 C266 146 266 192 230 220 Z" />
      <radialGradient id="bloomGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#5BE38B" stop-opacity="0.26" />
        <stop offset="58%" stop-color="#DDF5E5" stop-opacity="0.12" />
        <stop offset="100%" stop-color="#DDF5E5" stop-opacity="0" />
      </radialGradient>
    </defs>
    
    <!-- Background glow -->
    <circle cx="230" cy="220" r="200" fill="url(#bloomGlow)" />
    
    <!-- Orbital ring -->
    <circle cx="230" cy="220" r="150" fill="none" stroke="#9BC7A4" stroke-width="1" stroke-dasharray="1 11" opacity="0.55" />
    
    <!-- Rotating petals -->
    <g class="bloom" ref="bloom">
      <g style="mix-blend-mode: multiply">
        <use href="#petal" fill="#1D6B43" opacity="0.5" transform="rotate(0 230 220)" />
        <use href="#petal" fill="#2FA66A" opacity="0.5" transform="rotate(90 230 220)" />
        <use href="#petal" fill="#0FA37F" opacity="0.5" transform="rotate(180 230 220)" />
        <use href="#petal" fill="#9BC7A4" opacity="0.6" transform="rotate(270 230 220)" />
      </g>
    </g>
    
    <!-- Corner dots -->
    <circle cx="230" cy="104" r="5" fill="#1D6B43" />
    <circle cx="346" cy="220" r="5" fill="#2FA66A" />
    <circle cx="230" cy="336" r="5" fill="#0FA37F" />
    <circle cx="114" cy="220" r="5" fill="#CBBE8A" />
    
    <!-- Center elements -->
    <circle class="eco-pulse" cx="230" cy="220" r="48" fill="url(#bloomGlow)" />
    <circle cx="230" cy="220" r="30" fill="#FAFBF9" stroke="#2FA66A" stroke-width="1.4" />
    <circle class="eco-pulse" cx="230" cy="220" r="7" fill="#2FA66A" />
    
    <!-- Floating elements -->
    <circle class="eco-float f1" cx="64" cy="76" r="5" fill="#5BE38B" opacity="0.6" />
    <circle class="eco-float f2" cx="398" cy="360" r="7" fill="#9BC7A4" opacity="0.6" />
    <circle class="eco-float f3" cx="402" cy="92" r="4" fill="#CBBE8A" opacity="0.6" />
  </svg>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const bloom = ref<SVGGElement>()

onMounted(() => {
  if (bloom.value) {
    // Slow rotation animation
    gsap.to(bloom.value, {
      rotation: 360,
      duration: 55,
      ease: 'none',
      repeat: -1
    })
  }
  
  // Pulse animations
  gsap.to('.eco-pulse', {
    scale: 1.14,
    opacity: 0.65,
    duration: 4.5,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
  })
  
  // Floating animations
  gsap.to('.eco-float.f1', {
    y: -10,
    duration: 6,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
  })
  
  gsap.to('.eco-float.f2', {
    y: -10,
    duration: 6,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    delay: 2
  })
  
  gsap.to('.eco-float.f3', {
    y: -10,
    duration: 6,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    delay: 4
  })
})
</script>

<style scoped>
.bloom {
  transform-box: fill-box;
  transform-origin: center;
}

.eco-pulse {
  transform-box: fill-box;
  transform-origin: center;
}

.eco-float {
  transform-box: fill-box;
  transform-origin: center;
}
</style>
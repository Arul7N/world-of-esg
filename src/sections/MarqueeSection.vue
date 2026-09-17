<template>
  <section
    aria-label="Frameworks we navigate"
    class="marq-section text-sand py-6 overflow-hidden"
    style="background: linear-gradient(100deg, #0b1238, #22308c 70%, #101c4a)"
  >
    <div class="marq-fade">
      <div
        ref="trackRef"
        class="marq-track font-display font-semibold text-[clamp(1.1rem,2.4vw,1.9rem)] tracking-tight"
      >
        <!-- Two identical runs: the second lets the scroll loop seamlessly. -->
        <span v-for="run in 2" :key="run" class="marq-inner" :aria-hidden="run === 2 || undefined">
          <template v-for="term in TERMS" :key="`${run}-${term}`">
            <span class="marq-term">{{ term }}</span>
            <i class="marq-dot"></i>
          </template>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/*
 * Single source for the ticker — it renders twice so the scroll can loop
 * seamlessly, and editing this list keeps both runs in sync automatically.
 */
const TERMS = [
  'CBAM',
  'CCTS',
  'BRSR',
  'GRI',
  'TCFD',
  'ISSB',
  'EU CSRD',
  'SBTi',
  'EPR',
  'GHG Accounting',
  'Scope 3',
  'Net Zero',
  'PCF',
  'LCA',
  'DPP',
  'Carbon Credits',
]

const trackRef = ref<HTMLElement | null>(null)
let raf = 0
let x = 0

onMounted(() => {
  const el = trackRef.value
  if (!el) return

  const tick = () => {
    x -= 0.55
    // When we've scrolled exactly one set's worth, snap back imperceptibly
    const half = el.scrollWidth / 2
    if (Math.abs(x) >= half) x += half
    el.style.transform = `translateX(${x}px)`
    raf = requestAnimationFrame(tick)
  }

  raf = requestAnimationFrame(tick)
})

onUnmounted(() => cancelAnimationFrame(raf))
</script>

<style>
.marq-fade {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  overflow: hidden;
}

.marq-track {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  will-change: transform;
}

.marq-inner {
  display: inline-flex;
  align-items: center;
  gap: 1.8rem;
  padding: 0 1.8rem;
  white-space: nowrap;
  flex-shrink: 0;
}

.marq-term {
  white-space: nowrap;
}

.marq-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--aurora);
  display: inline-block;
  flex-shrink: 0;
}
</style>

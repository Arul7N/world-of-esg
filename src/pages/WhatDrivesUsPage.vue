<template>
  <div class="wdu-page">
    <section class="wdu-hero relative overflow-hidden">
      <div class="wdu-orb" aria-hidden="true"></div>
      <div class="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <span class="eyebrow mb-7">What Drives Us</span>
        <h1
          class="font-display font-extrabold text-charcoal text-[clamp(2.6rem,6vw,5.2rem)] leading-[.98] tracking-[-.05em] max-w-4xl"
        >
          Carbon regulation is <span class="text-grad">reshaping business.</span>
        </h1>
        <p
          class="mt-8 max-w-2xl font-serif-q text-[clamp(1.2rem,2.2vw,1.75rem)] leading-[1.4] text-charcoal/80"
        >
          From India's CCTS to the EU's CBAM, the rules are arriving faster than most organisations
          can prepare for. These are the areas where we do the work.
        </p>
      </div>
    </section>

    <!-- The same section the home page uses, so the content has one source. -->
    <ChallengeSection :show-intro="false" />

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import ChallengeSection from '@/sections/ChallengeSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
</script>

<style scoped>
.wdu-page {
  background: var(--mist);
}
.wdu-hero {
  background: linear-gradient(145deg, #f8f6f0 0%, #e8f4eb 70%, #e8f0fb 100%);
}
.wdu-orb {
  position: absolute;
  width: 26rem;
  height: 26rem;
  right: -4rem;
  top: -7rem;
  border-radius: 999px;
  background: rgba(91, 227, 139, 0.22);
  filter: blur(20px);
  pointer-events: none;
}
</style>

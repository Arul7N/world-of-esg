<template>
  <section id="awards" class="relative py-28 md:py-40 overflow-hidden bg-sand">
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

    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <div class="text-center mb-16">
        <span class="eyebrow mb-8" data-reveal>Recognition</span>
        <h2
          class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03] max-w-3xl mx-auto"
          data-reveal
        >
          Awards and Recognitions
        </h2>
        <p class="text-graphite text-lg mt-6 max-w-2xl mx-auto" data-reveal>
          Our commitment to ESG excellence and innovation has been recognized by industry leaders
          and global organizations.
        </p>
      </div>

      <!-- Awards Grid -->
      <div v-if="awards.length > 0" class="grid md:grid-cols-3 gap-8" data-reveal>
        <div
          v-for="award in awards"
          :key="award.id"
          class="award-card rounded-2xl bg-white border border-stone p-8 text-center hover:shadow-lg transition-shadow"
        >
          <div v-if="award.logo" class="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <img
              :src="award.logo"
              :alt="award.title"
              class="max-w-full max-h-full object-contain"
            />
          </div>
          <div
            v-else
            class="w-20 h-20 mx-auto mb-6 rounded-full bg-mint flex items-center justify-center text-forest text-2xl font-bold"
          >
            {{ award.icon }}
          </div>

          <h3 class="font-display font-bold text-charcoal text-lg mb-2">
            {{ award.title }}
          </h3>
          <p class="text-forest font-display font-semibold text-sm mb-3">
            {{ award.issuer }}
          </p>
          <p class="text-graphite text-sm leading-relaxed mb-4">
            {{ award.description }}
          </p>
          <span class="text-xs text-graphite/60 font-display tracking-wide">
            {{ award.year }}
          </span>
        </div>
      </div>

      <!-- Placeholder when no awards data -->
      <div v-else class="text-center py-16">
        <div
          class="w-20 h-20 mx-auto mb-6 rounded-full bg-mint flex items-center justify-center text-forest text-4xl"
        >
          🏆
        </div>
        <h3 class="font-display font-bold text-charcoal text-xl mb-4">Recognition Coming Soon</h3>
        <p class="text-graphite text-lg max-w-2xl mx-auto">
          We're honored by the trust our clients and partners place in us. Detailed recognition and
          awards information will be shared soon.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Award {
  id: number
  title: string
  issuer: string
  description: string
  year: string
  logo?: string
  icon?: string
}

// Awards can be populated with actual World of ESG awards when available
const awards = ref<Award[]>([
  // Placeholder structure - update with actual awards data
  // {
  //   id: 1,
  //   title: 'Award Name',
  //   issuer: 'Issuing Organization',
  //   description: 'Award description',
  //   year: '2024',
  //   logo: '/images/awards/award-logo.png',
  // }
])
</script>

<style scoped>
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

.award-card {
  transition: all 0.3s ease;
}

.award-card:hover {
  transform: translateY(-2px);
}

.blob {
  position: absolute;
  border-radius: 100%;
  filter: blur(40px);
  opacity: 0.6;
}
</style>

<template>
  <section id="why" class="relative py-20 md:py-28 bg-mint/60 overflow-hidden">
    <div class="max-w-[1380px] mx-auto px-6 md:px-10">
      <div class="max-w-3xl mb-12">
        <span class="eyebrow mb-6" data-reveal>Why World of ESG</span>
        <h2
          class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]"
          data-reveal
        >
          Six reasons companies <span class="text-grad">choose us.</span>
        </h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        <div
          v-for="item in items"
          :key="item.title"
          class="why-item"
          :style="`--acc:${item.color};--accbg:${item.backgroundColor}`"
          data-reveal
        >
          <div class="why-ic">
            <svg class="icon" style="width: 1.45em; height: 1.45em">
              <use :href="`#i-${item.icon}`" />
            </svg>
          </div>
          <h3 class="font-display font-bold text-xl text-charcoal mb-2">{{ item.title }}</h3>
          <p class="text-graphite leading-relaxed text-[15px]">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    title: '360° Integration',
    description:
      'Strategy, technology, talent, research, legal, and execution in one continuous system — not siloed services handed off between different firms.',
    icon: 'infinity',
    color: '#1D6B43',
    backgroundColor: 'rgba(29,107,67,.10)',
  },
  {
    title: 'Purpose-Built Technology',
    description:
      'Built from the ground up for climate and ESG intelligence — not a generic platform with sustainability bolted on as an afterthought.',
    icon: 'cpu',
    color: '#117C50',
    backgroundColor: 'rgba(17,124,80,.10)',
  },
  {
    title: 'Domain Expertise',
    description:
      'Credentialed climate scientists, carbon accountants, policy specialists, and technologists — not generalists with a sustainability pitch deck.',
    icon: 'users',
    color: '#3A4DB8',
    backgroundColor: 'rgba(58,77,184,.10)',
  },
  {
    title: 'Speed to Compliance',
    description:
      'Pre-built framework templates and automated data pipelines reduce first-year reporting time by up to 70% versus manual approaches.',
    icon: 'zap',
    color: '#2FA66A',
    backgroundColor: 'rgba(47,166,106,.12)',
  },
  {
    title: 'Ecosystem Partnerships',
    description:
      'Academic, technology, certification body, and industry association partnerships that extend our reach and reinforce your credibility.',
    icon: 'share',
    color: '#7430A4',
    backgroundColor: 'rgba(116,48,164,.10)',
  },
  {
    title: 'Measurable Outcomes',
    description:
      'Every engagement starts with a verified baseline. Every deliverable maps to a climate outcome you can report to boards, investors, and regulators.',
    icon: 'target',
    color: '#1D6B43',
    backgroundColor: 'rgba(29,107,67,.10)',
  },
]
</script>

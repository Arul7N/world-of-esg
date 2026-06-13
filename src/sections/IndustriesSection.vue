<template>
  <section id="industries" class="relative py-20 md:py-28 bg-mist overflow-hidden">
    <div class="max-w-[1380px] mx-auto px-6 md:px-10">
      <div class="max-w-3xl mb-12">
        <span class="eyebrow mb-6" data-reveal>Industries We Serve</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]" data-reveal>Sector depth, not <span class="text-grad">generic advice.</span></h2>
        <p class="text-graphite text-lg leading-relaxed" data-reveal>Every sector gets its own regulatory timeline, emissions profile, and playbook — we work within that specificity, not around it.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article v-for="ind in industries" :key="ind.title" class="glass-card rounded-3xl p-7" data-glow>
          <div class="w-12 h-12 rounded-2xl grid place-items-center mb-5" :style="`background:${ind.iconBg};color:${ind.color}`">
            <svg class="icon" style="width:1.4em;height:1.4em"><use :href="`#i-${ind.icon}`"/></svg>
          </div>
          <h3 class="font-display font-bold text-xl text-charcoal mb-3">{{ ind.title }}</h3>
          <p class="text-graphite leading-relaxed text-[15px] mb-4">{{ ind.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="b in ind.badges" :key="b" class="ind-chip" :style="`--acc:${ind.color}`">{{ b }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const industries = [
  {
    title: 'Manufacturing & Heavy Industry',
    description: 'Steel, cement, chemicals, and automotive — building CBAM-readiness, BRSR Core compliance, and science-based decarbonization roadmaps for sectors where hard-to-abate is the real challenge.',
    icon: 'cpu', color: '#1D6B43', iconBg: 'rgba(29,107,67,.10)', badges: ['CBAM', 'BRSR Core', 'SBTi']
  },
  {
    title: 'Exporters & Trade-Exposed',
    description: 'Companies exporting to the EU face CBAM carbon cost pass-through now. We map embedded emissions, calculate CBAM liability, and build the Scope 3 data systems EU buyers and regulators require.',
    icon: 'share', color: '#3A4DB8', iconBg: 'rgba(58,77,184,.10)', badges: ['CBAM Liability', 'Scope 3', 'PCF']
  },
  {
    title: 'Financial Institutions & NBFCs',
    description: 'Banks, insurers, and asset managers under TCFD and green taxonomy pressure. We translate climate risk into portfolio language and build the internal governance that regulators and investors now expect.',
    icon: 'scale', color: '#7430A4', iconBg: 'rgba(116,48,164,.08)', badges: ['TCFD / ISSB', 'Green Taxonomy', 'Climate Risk']
  },
  {
    title: 'Corporates & Listed Enterprises',
    description: 'SEBI-listed companies navigating BRSR mandates, investor ESG scrutiny, and integrated sustainability reporting. We make your disclosure credible, comparative, and board-ready.',
    icon: 'target', color: '#117C50', iconBg: 'rgba(17,124,80,.10)', badges: ['BRSR', 'Investor ESG', 'Board-Ready']
  },
  {
    title: 'Universities & Academia',
    description: 'Co-designing ESG curricula, embedding sustainability into MBA and engineering programmes, and building campus net-zero strategies — preparing the next generation for a low-carbon economy.',
    icon: 'users', color: '#7430A4', iconBg: 'rgba(116,48,164,.08)', badges: ['ESG Curricula', 'Net-Zero Campus', 'Certification']
  },
  {
    title: 'Supply Chains & Value Networks',
    description: 'Tier-2 and tier-3 supplier emissions mapping, disclosure readiness for buyer requirements, and decarbonization roadmaps that reduce Scope 3 exposure across the entire value chain.',
    icon: 'zap', color: '#3A4DB8', iconBg: 'rgba(58,77,184,.10)', badges: ['Scope 3', 'Tier 2–3 Mapping', 'Disclosure']
  }
]
</script>

<template>
  <section id="partners" class="relative py-20 md:py-28 overflow-hidden">
    <div class="blob" style="width:520px;height:520px;background:radial-gradient(circle,rgba(91,227,139,.1),transparent 70%);bottom:-120px;right:-160px"></div>
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <div class="max-w-3xl mb-12">
        <span class="eyebrow mb-6" data-reveal>Partners & Collaborations</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]" data-reveal>An ecosystem built on <span class="text-grad">the right alliances.</span></h2>
        <p class="text-graphite text-lg leading-relaxed" data-reveal>We don't operate in isolation. Our collaboration model spans academia, registries, carbon markets, and technology — extending our capability and your outcomes across every engagement.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        <article v-for="p in partners" :key="p.title" class="glass-card rounded-3xl p-7" data-glow :style="`border-top:3px solid ${p.borderColor}`">
          <div class="w-12 h-12 rounded-2xl grid place-items-center mb-5" :style="`background:${p.iconBg}`">
            <svg class="icon" style="width:1.4em;height:1.4em" :style="`color:${p.borderColor}`"><use :href="`#i-${p.icon}`"/></svg>
          </div>
          <h3 class="font-display font-bold text-xl text-charcoal mb-3">{{ p.title }}</h3>
          <p class="text-graphite leading-relaxed text-[15px]">{{ p.description }}</p>
        </article>
      </div>
      <div class="glass-card rounded-3xl p-8 md:p-10 text-center">
        <svg viewBox="0 0 128 120" class="w-14 mx-auto mb-5" aria-hidden="true"><use href="#i-logo"/></svg>
        <p class="font-serif-q text-charcoal/75 text-xl leading-relaxed mb-6 max-w-2xl mx-auto">Interested in building something together? Whether you're a university, a registry, a technology provider, or a market network — we're open to collaborations that advance real climate outcomes.</p>
        <a href="mailto:hello@worldofesg.in?subject=Partnership%20Enquiry" class="mag inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-aurora text-charcoal font-display font-semibold hover:-translate-y-1 transition-transform duration-300">
          <svg class="icon" style="width:1.05em;height:1.05em"><use href="#i-mail"/></svg> Explore a Partnership
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  { title: 'Academic Partnerships', description: 'Business schools and research universities co-designing ESG curricula, running joint climate studies, and embedding sustainability into MBA and engineering programmes.', icon: 'users', borderColor: '#1D6B43', iconBg: 'rgba(29,107,67,.1)' },
  { title: 'Registry & Standards Integration', description: 'Deep alignment with GHG Protocol, SBTi verification bodies, and BRSR assurance frameworks — ensuring every disclosure we support meets the evidentiary standards of global registries.', icon: 'scale', borderColor: '#117C50', iconBg: 'rgba(17,124,80,.1)' },
  { title: 'Carbon Market Access', description: 'Connections into voluntary carbon markets, offset verification programmes, and compliance carbon market channels — helping clients access credible, high-integrity offset opportunities.', icon: 'globe', borderColor: '#2FA66A', iconBg: 'rgba(91,227,139,.15)' },
  { title: 'Technology & Implementation', description: 'Cloud infrastructure, AI/ML data analytics, and enterprise integrations that power our SaaS platform — selected for reliability, security, and performance at institutional scale.', icon: 'cpu', borderColor: '#3A4DB8', iconBg: 'rgba(58,77,184,.1)' }
]
</script>

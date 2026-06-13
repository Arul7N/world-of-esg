<template>
  <section id="frameworks" class="relative py-20 md:py-28 overflow-hidden">
    <div class="blob" style="width:560px;height:560px;background:radial-gradient(circle,rgba(58,77,184,.10),transparent 70%);top:-100px;left:-120px"></div>
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <div class="max-w-3xl mb-8">
        <span class="eyebrow mb-6" data-reveal>ESG Frameworks</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]" data-reveal>What hits you, <span class="text-grad">and when.</span></h2>
        <p class="text-graphite text-lg leading-relaxed" data-reveal>Companies face 40+ overlapping standards. Here is where every framework stands for you today — already in force, coming next, or always-on — and each one explained in plain language below.</p>
      </div>

      <div class="flex flex-wrap items-center gap-2 mb-8" data-reveal>
        <button v-for="f in filters" :key="f.key"
          class="fw-filter" :class="{ on: activeFilter === f.key }"
          :style="f.color ? `--acc:${f.color}` : ''"
          @click="setFilter(f.key)">{{ f.label }}</button>
        <span class="ml-auto hidden md:flex items-center gap-4 text-xs font-display text-graphite">
          <span class="fw-key" style="--acc:#1D6B43">India</span>
          <span class="fw-key" style="--acc:#3A4DB8">EU</span>
          <span class="fw-key" style="--acc:#7430A4">Global</span>
        </span>
      </div>

      <div class="fw-board" data-reveal>
        <div class="fw-lane" style="--lc:#1D6B43">
          <div class="fw-lane-h"><i class="fw-pulse"></i><span class="font-display">In force today</span></div>
          <div class="fw-lane-chips">
            <span v-for="c in lane1" :key="c.label" class="fw-chip" :class="{ 'fw-dim': isDimmed(c.rg) }" :data-rg="c.rg" :style="`--acc:${c.color}`">{{ c.label }} <em>{{ c.sub }}</em></span>
          </div>
        </div>
        <div class="fw-lane" style="--lc:#3A4DB8">
          <div class="fw-lane-h"><i></i><span class="font-display">Coming next</span></div>
          <div class="fw-lane-chips">
            <span v-for="c in lane2" :key="c.label" class="fw-chip" :class="{ 'fw-dim': isDimmed(c.rg) }" :data-rg="c.rg" :style="`--acc:${c.color}`">{{ c.label }} <em>{{ c.sub }}</em></span>
          </div>
        </div>
        <div class="fw-lane" style="--lc:#7430A4">
          <div class="fw-lane-h"><i></i><span class="font-display">Always-on standards</span></div>
          <div class="fw-lane-chips">
            <span v-for="c in lane3" :key="c.label" class="fw-chip" :class="{ 'fw-dim': isDimmed(c.rg) }" :data-rg="c.rg" :style="`--acc:${c.color}`">{{ c.label }} <em>{{ c.sub }}</em></span>
          </div>
        </div>
      </div>

      <div class="fw-list mt-10 pt-8 grid lg:grid-cols-2 gap-x-14" style="border-top:1px solid var(--stone)" data-reveal>
        <div v-for="fw in frameworks" :key="fw.id"
          class="fw-row" :class="{ 'fw-dim': isDimmed(fw.category) }"
          :data-rg="fw.category" :style="`--acc:${fw.color}`">
          <span class="fw-ab font-display">{{ fw.abbreviation }}</span>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <h3 class="font-display font-bold text-lg text-charcoal leading-snug">{{ fw.fullName }}</h3>
              <span class="fw-badge" :style="`background:${fw.color}`">{{ fw.badge }}</span>
            </div>
            <p class="text-graphite text-[15px] leading-relaxed">{{ fw.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeFilter = ref('all')

const filters = [
  { key: 'all', label: 'All', color: '' },
  { key: 'india', label: 'India', color: '#1D6B43' },
  { key: 'eu', label: 'EU', color: '#3A4DB8' },
  { key: 'global', label: 'Global', color: '#7430A4' }
]

const setFilter = (key: string) => { activeFilter.value = key }

const isDimmed = (rg: string) => activeFilter.value !== 'all' && activeFilter.value !== rg

const lane1 = [
  { label: 'BRSR', sub: 'India · since FY24', rg: 'india', color: '#1D6B43' },
  { label: 'EPR & SWM', sub: 'India · live', rg: 'india', color: '#1D6B43' },
  { label: 'CBAM', sub: 'EU · live Jan 2026', rg: 'eu', color: '#3A4DB8' },
  { label: 'EU CSRD', sub: 'EU · wave 1 reporting', rg: 'eu', color: '#3A4DB8' },
  { label: 'TCFD / ISSB', sub: 'Global · IFRS S2', rg: 'global', color: '#7430A4' }
]

const lane2 = [
  { label: 'EU CSRD next waves', sub: 'EU · 2027 →', rg: 'eu', color: '#3A4DB8' },
  { label: 'Assurance tightening', sub: 'EU · 2026–28', rg: 'eu', color: '#3A4DB8' }
]

const lane3 = [
  { label: 'GRI', sub: 'voluntary', rg: 'global', color: '#7430A4' },
  { label: 'GHG Protocol', sub: 'foundational', rg: 'global', color: '#7430A4' },
  { label: 'SBTi', sub: 'voluntary', rg: 'global', color: '#7430A4' },
  { label: 'PCF & LCA', sub: 'product-level', rg: 'global', color: '#7430A4' }
]

const frameworks = [
  { id: 'brsr', abbreviation: 'BRSR', fullName: 'Business Responsibility & Sustainability Reporting', description: "India's mandatory ESG disclosure for the top 1,000 listed companies — we make it board-ready and assurance-proof.", category: 'india', badge: 'India · SEBI Mandate', color: '#1D6B43' },
  { id: 'eu-csrd', abbreviation: 'EU CSRD', fullName: 'Corporate Sustainability Reporting Directive', description: "Europe's flagship sustainability directive — we run your double-materiality assessment and map you to ESRS, before the deadline.", category: 'eu', badge: 'EU · Double Materiality', color: '#3A4DB8' },
  { id: 'cbam', abbreviation: 'CBAM', fullName: 'Carbon Border Adjustment Mechanism', description: "The EU's carbon border tax is live — we calculate your liability per shipment and build the data EU importers demand.", category: 'eu', badge: 'EU Trade · Live Now', color: '#3A4DB8' },
  { id: 'tcfd', abbreviation: 'TCFD / ISSB', fullName: 'Climate-Related Financial Disclosure', description: 'Climate risk in investor language — governance, strategy, risk, and metrics aligned to IFRS S2.', category: 'global', badge: 'Global · Investor-Focused', color: '#7430A4' },
  { id: 'gri', abbreviation: 'GRI', fullName: 'Global Reporting Initiative', description: "The world's most-used reporting standard — one report that satisfies investors, regulators, and stakeholders at once.", category: 'global', badge: 'Global · Stakeholder Standard', color: '#7430A4' },
  { id: 'ghg', abbreviation: 'GHG Protocol', fullName: 'Corporate GHG Accounting', description: 'The foundation: your full Scope 1, 2, and 3 inventory — audit-ready, defensible, and reusable across every framework.', category: 'global', badge: 'Global · Scope 1, 2, 3', color: '#7430A4' },
  { id: 'sbti', abbreviation: 'SBTi', fullName: 'Science Based Targets initiative', description: "Science-validated net-zero targets on a 1.5°C pathway — we get you through validation and keep you there.", category: 'global', badge: 'Global · 1.5°C Aligned', color: '#7430A4' },
  { id: 'pcf', abbreviation: 'PCF & LCA', fullName: 'Product Carbon Footprint & LCA', description: 'Product-level carbon accounting — the backbone of CBAM compliance and green claims that withstand third-party scrutiny.', category: 'global', badge: 'Product · Supply Chain', color: '#7430A4' },
  { id: 'epr', abbreviation: 'EPR / SWM', fullName: 'EPR & Solid Waste Management', description: 'Producer responsibility across plastics, e-waste, and batteries — registrations, filings, and credible recovery channels.', category: 'india', badge: 'India · Producer Obligations', color: '#1D6B43' }
]
</script>

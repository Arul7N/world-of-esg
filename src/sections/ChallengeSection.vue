<template>
  <section id="challenge" class="relative py-20 md:py-28 bg-mist overflow-hidden">
    <div class="max-w-[1380px] mx-auto px-6 md:px-10">
      <div class="max-w-3xl mb-12">
        <span class="eyebrow mb-6" data-reveal>What Drives Us</span>
        <h2
          class="font-display font-bold text-charcoal text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] mb-5"
          data-reveal
        >
          Carbon regulation is reshaping how business gets done
        </h2>
        <p class="text-graphite text-lg md:text-xl leading-relaxed" data-reveal>
          From India's CCTS to the EU's CBAM, the rules are arriving faster than most organisations
          can prepare for. These are the areas where we do the work.
        </p>
      </div>

      <div class="ledger" data-reveal>
        <div
          v-for="(item, index) in DRIVERS"
          :key="item.title"
          class="ledger-row"
          :style="{ '--acc': item.color }"
        >
          <span class="ledger-num font-display">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="font-display font-bold text-2xl text-charcoal">{{ item.title }}</h3>
          <p class="text-graphite leading-relaxed">{{ item.description }}</p>

          <ul v-if="item.focusAreas" class="focus-list" :aria-label="`Focus areas: ${item.title}`">
            <li v-for="area in item.focusAreas" :key="area">{{ area }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Driver {
  title: string
  description: string
  color: string
  /** Rendered as pills beneath the description. */
  focusAreas?: string[]
}

const DRIVERS: Driver[] = [
  {
    title: 'The Transition to a Low-Carbon Economy',
    description:
      'We help organisations measure their carbon footprint, identify emission-reduction opportunities and build practical pathways to decarbonisation and net-zero.',
    color: '#1d6b43',
    focusAreas: [
      'Scope 1, 2 & 3',
      'Carbon Accounting',
      'Product Carbon Footprint',
      'Energy Transition',
      'Renewable Energy',
      'Energy Efficiency',
      'Scope 3 Reduction',
      'Decarbonisation',
      'Net-Zero Strategy',
    ],
  },
  {
    title: "India's Carbon Market — BEE CCTS",
    description:
      "India's Carbon Credit Trading Scheme (CCTS) is driving a shift toward market-based carbon management. We help organisations build reliable emissions data, robust MRV systems and practical decarbonisation strategies to prepare for CCTS requirements.",
    color: '#3a4db8',
    focusAreas: [
      'CCTS Readiness',
      'GHG Accounting',
      'MRV Systems',
      'Carbon Intensity',
      'Compliance Support',
      'Decarbonisation Roadmaps',
    ],
  },
  {
    title: 'EU CBAM',
    description:
      'The EU Carbon Border Adjustment Mechanism (CBAM) is transforming carbon requirements in international trade. We help manufacturers and exporters measure embedded emissions, strengthen carbon data and prepare for CBAM compliance.',
    color: '#7430a4',
    focusAreas: [
      'CBAM Applicability',
      'Embedded Emissions',
      'Direct & Indirect Emissions',
      'Precursor Emissions',
      'Product Carbon Footprint',
      'Data Management',
      'CBAM Readiness',
      'Reporting Support',
    ],
  },
  {
    title: 'Connecting CCTS, CBAM & ESG',
    description:
      'CCTS, CBAM and ESG reporting rely on accurate, traceable sustainability data. We integrate activity data, emission factors, GHG calculations, carbon intensity, MRV and reporting into one system — turning compliance data into actionable decarbonisation decisions.',
    color: '#117c50',
  },
  {
    title: 'From Compliance to Competitive Advantage',
    description:
      'We turn carbon regulation into an opportunity to measure, reduce and manage emissions while strengthening business performance.',
    color: '#0fa37f',
    focusAreas: [
      'Better Efficiency',
      'Lower Costs',
      'Reduced Carbon Risk',
      'Stronger ESG',
      'Export Readiness',
      'Regulatory Resilience',
    ],
  },
]
</script>

<style scoped>
/*
 * .ledger-row is a 3-column grid (number | title | description). Without an
 * explicit column the pills would wrap onto a new row under the number, so
 * pin them beneath the description — and to column 2 once the grid collapses
 * to two columns below 1024px.
 */
.focus-list {
  grid-column: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0;
  list-style: none;
}

@media (max-width: 1023px) {
  .focus-list {
    grid-column: 2;
  }
}

.focus-list li {
  padding: 0.35rem 0.75rem;
  border: 1px solid color-mix(in srgb, var(--acc) 22%, transparent);
  border-radius: 100px;
  background: color-mix(in srgb, var(--acc) 8%, transparent);
  color: var(--acc);
  font:
    500 0.8rem 'Inter Tight',
    sans-serif;
}
</style>

<template>
  <div class="team-page">
    <section class="team-hero relative overflow-hidden">
      <div class="team-orb" aria-hidden="true"></div>
      <div class="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <span class="eyebrow mb-7">Meet the team</span>
        <h1
          class="font-display font-extrabold text-charcoal text-[clamp(2.6rem,6vw,5.2rem)] leading-[.98] tracking-[-.05em] max-w-4xl"
        >
          The people advancing your <span class="text-grad">climate transition.</span>
        </h1>
        <p
          class="mt-8 max-w-2xl font-serif-q text-[clamp(1.2rem,2.2vw,1.75rem)] leading-[1.4] text-charcoal/80"
        >
          Our multidisciplinary team brings ESG strategy, climate science, product thinking,
          research, and learning design together around one goal: progress that stands up to boards,
          investors, and regulators.
        </p>
      </div>
    </section>

    <section class="team-section py-20 md:py-28">
      <div class="max-w-[1380px] mx-auto px-6 md:px-10">
        <div v-for="(row, r) in TEAM_ROWS" :key="`row-${r}`" class="team-row" data-reveal>
          <article
            v-for="member in row"
            :key="member.name"
            class="team-card"
            :style="{ '--team-color': member.color }"
          >
            <div class="team-initials">{{ member.initials }}</div>
            <div class="team-meta">
              <h2 class="font-display font-bold text-xl text-white">{{ member.name }}</h2>
              <p class="mt-1 text-sm leading-relaxed text-white/70">{{ member.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from '@/sections/FooterSection.vue'

interface Member {
  name: string
  role: string
  initials: string
  color: string
}

/*
 * Placeholder names — swap for the real team before this goes to clients.
 * Kept deliberately neutral rather than resembling anyone identifiable.
 */
const TEAM_ROWS: Member[][] = [
  [
    { name: 'Alex Harper', role: 'Founder & CEO', initials: 'AH', color: '#1D6B43' },
    { name: 'Dana Whitfield', role: 'Head of ESG Strategy', initials: 'DW', color: '#3A4DB8' },
    { name: 'Marcus Ellery', role: 'Chief Technology Officer', initials: 'ME', color: '#7430A4' },
    {
      name: 'Nora Kingsley',
      role: 'Head of Capability Building',
      initials: 'NK',
      color: '#117C50',
    },
  ],
  [
    { name: 'Julian Rhodes', role: 'Head of Decarbonization', initials: 'JR', color: '#0FA37F' },
    { name: 'Elena Voss', role: 'Director of ESG Research', initials: 'EV', color: '#2FA66A' },
    { name: 'Theo Marchetti', role: 'Head of Environmental Law', initials: 'TM', color: '#3447B8' },
    { name: 'Sasha Lindqvist', role: 'Head of Client Delivery', initials: 'SL', color: '#55309A' },
  ],
]
</script>

<style scoped>
.team-page {
  background: var(--mist);
}
.team-hero {
  background: linear-gradient(145deg, #f8f6f0 0%, #e8f4eb 70%, #e8f0fb 100%);
}
.team-orb {
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
.team-section {
  background: linear-gradient(180deg, #f2f6f2, #f8f6f0);
}
.team-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

.team-row + .team-row {
  margin-top: 1.25rem;
}

@media (max-width: 900px) {
  .team-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .team-row {
    grid-template-columns: 1fr;
  }
}

.team-meta {
  padding: 0 1.5rem 1.5rem;
}

.team-card {
  overflow: hidden;
  border-radius: 1.45rem;
  background: linear-gradient(
    160deg,
    color-mix(in srgb, var(--team-color) 78%, #06151a),
    var(--team-color)
  );
  box-shadow: 0 22px 42px -30px rgba(8, 20, 27, 0.65);
}
.team-initials {
  display: grid;
  place-items: center;
  height: 9.5rem;
  color: rgba(255, 255, 255, 0.94);
  font:
    3.8rem 'Instrument Serif',
    serif;
  background:
    radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.24), transparent 40%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 11px);
}
</style>

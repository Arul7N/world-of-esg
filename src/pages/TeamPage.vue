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
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal>
          <article
            v-for="member in team"
            :key="member.name"
            class="team-card"
            :style="{ '--team-color': member.color }"
          >
            <div class="team-initials">{{ member.initials }}</div>
            <div class="p-6">
              <h2 class="font-display font-bold text-xl text-white">{{ member.name }}</h2>
              <p class="mt-2 text-sm leading-relaxed text-white/70">{{ member.role }}</p>
            </div>
          </article>
        </div>

        <div class="team-join" data-reveal>
          <div>
            <h2 class="font-display font-bold text-charcoal text-[clamp(1.6rem,3vw,2.4rem)]">
              We're growing the team.
            </h2>
            <p class="mt-3 text-graphite text-lg leading-relaxed max-w-xl">
              Open roles across strategy, technology, delivery and learning are posted on LinkedIn
              as they open.
            </p>
          </div>
          <router-link to="/career" class="team-join-link">
            See open roles
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from '@/sections/FooterSection.vue'

const team = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', initials: 'AM', color: '#1D6B43' },
  { name: 'Priya Nair', role: 'Head of ESG Strategy', initials: 'PN', color: '#3A4DB8' },
  { name: 'Ravi Krishnaswamy', role: 'Chief Technology Officer', initials: 'RK', color: '#7430A4' },
  { name: 'Kavya Reddy', role: 'Head of Capability Building', initials: 'KR', color: '#117C50' },
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
  height: 14rem;
  color: rgba(255, 255, 255, 0.94);
  font:
    3.8rem 'Instrument Serif',
    serif;
  background:
    radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.24), transparent 40%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 11px);
}
.team-join {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--stone);
}
.team-join-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  border-radius: 100px;
  background: linear-gradient(120deg, var(--forest), var(--ocean));
  color: var(--sand);
  font:
    500 1rem 'Inter Tight',
    sans-serif;
  text-decoration: none;
  box-shadow: 0 10px 26px -12px rgba(29, 107, 67, 0.6);
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s;
}
.team-join-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px -14px rgba(47, 166, 106, 0.7);
}
.team-join-link:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 3px;
}
</style>

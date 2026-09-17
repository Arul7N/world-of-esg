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
        <!-- Advisors -->
        <h2 class="group-title" data-reveal>Our Advisors</h2>
        <div class="people-grid people-grid-3" data-reveal>
          <article v-for="(person, i) in ADVISORS" :key="`advisor-${i}`" class="person">
            <div class="person-photo">
              <img v-if="person.photo" :src="person.photo" :alt="person.name" />
              <svg v-else class="person-placeholder" aria-hidden="true">
                <use href="#i-users" />
              </svg>
            </div>
            <p class="person-name">{{ person.name || 'Name' }}</p>
            <p class="person-role">{{ person.role || 'Role' }}</p>
          </article>
        </div>

        <!-- Team -->
        <h2 class="group-title group-title-spaced" data-reveal>Our Team</h2>
        <div class="people-grid people-grid-4" data-reveal>
          <article v-for="(person, i) in TEAM" :key="`team-${i}`" class="person">
            <div class="person-photo">
              <img v-if="person.photo" :src="person.photo" :alt="person.name" />
              <svg v-else class="person-placeholder" aria-hidden="true">
                <use href="#i-users" />
              </svg>
            </div>
            <p class="person-name">{{ person.name || 'Name' }}</p>
            <p class="person-role">{{ person.role || 'Role' }}</p>
          </article>
        </div>

        <!-- Upcoming -->
        <div class="upcoming" data-reveal>
          <span class="upcoming-rule" aria-hidden="true"></span>
          <span class="upcoming-label">Upcoming</span>
          <span class="upcoming-rule" aria-hidden="true"></span>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from '@/sections/FooterSection.vue'

interface Person {
  name: string
  role: string
  /** Path under /public, e.g. '/images/team/jane.jpg'. Empty shows the placeholder. */
  photo: string
}

/*
 * Empty slots on purpose — the layout is in place and the copy is not.
 * Fill `name`, `role` and `photo` per person as they are confirmed;
 * a blank name falls back to the "Name" / "Role" placeholder label.
 * Adding or removing an entry changes the grid automatically.
 */
const blank = (): Person => ({ name: '', role: '', photo: '' })

const ADVISORS: Person[] = Array.from({ length: 3 }, blank)
const TEAM: Person[] = Array.from({ length: 8 }, blank)
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

/* Underlined group heading, matching the sketch. */
.group-title {
  display: inline-block;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid var(--forest);
  color: var(--charcoal);
  font:
    700 clamp(1.35rem, 2.6vw, 1.9rem) 'Inter Tight',
    sans-serif;
  letter-spacing: -0.02em;
}

.group-title-spaced {
  margin-top: 4.5rem;
}

.people-grid {
  display: grid;
  gap: clamp(1.25rem, 2.5vw, 2rem);
  margin-top: 2.25rem;
}

.people-grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.people-grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

@media (max-width: 900px) {
  .people-grid-3,
  .people-grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .people-grid-3,
  .people-grid-4 {
    grid-template-columns: 1fr;
  }
}

.person-photo {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid var(--stone);
  border-radius: 1rem;
  background: linear-gradient(160deg, #ffffff, #eef4ef);
  box-shadow: 0 16px 34px -28px rgba(8, 20, 27, 0.55);
}

.person-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-placeholder {
  width: 28%;
  height: 28%;
  fill: none;
  stroke: var(--sage);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.person-name {
  margin-top: 1rem;
  color: var(--charcoal);
  font:
    700 1.05rem 'Inter Tight',
    sans-serif;
}

.person-role {
  margin-top: 0.15rem;
  color: var(--graphite);
  font-size: 0.95rem;
  line-height: 1.5;
}

.upcoming {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 5rem;
}

.upcoming-rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--stone), transparent);
}

.upcoming-label {
  color: var(--forest);
  font:
    600 0.8rem 'Inter Tight',
    sans-serif;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  white-space: nowrap;
}
</style>

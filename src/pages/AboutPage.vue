<template>
  <div class="about-page">
    <section class="about-hero relative overflow-hidden">
      <div class="about-orb about-orb-one" aria-hidden="true"></div>
      <div class="about-orb about-orb-two" aria-hidden="true"></div>
      <div
        class="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 py-24 md:py-32 about-hero-grid"
      >
        <div>
          <span class="eyebrow mb-7">About World of ESG</span>
          <h1
            class="font-display font-extrabold text-charcoal text-[clamp(3rem,7vw,6.4rem)] leading-[.94] tracking-[-.055em]"
          >
            Climate intelligence,<br /><span class="text-grad">made actionable.</span>
          </h1>
          <p
            class="mt-8 max-w-2xl font-serif-q text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.35] text-charcoal/80"
          >
            We help organizations turn complex climate obligations into credible strategy, practical
            systems, and measurable progress.
          </p>
        </div>
        <div
          class="globe-wrap"
          role="img"
          aria-label="World of ESG globe — environmental, social, and governance intelligence connected worldwide"
        >
          <canvas id="about-canvas" aria-hidden="true"></canvas>
          <p class="ecosystem-flow">
            <span>Data</span><i>→</i><span>Intelligence</span><i>→</i><span>Action</span><i>→</i
            ><span>Impact</span>
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28">
      <div
        class="max-w-[1380px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.08fr_.92fr] gap-14 lg:gap-24 items-center"
      >
        <div>
          <span class="eyebrow mb-6">About us</span>
          <h2
            class="font-display font-bold text-charcoal text-[clamp(2.35rem,4.5vw,4rem)] leading-[1.02]"
          >
            Connected capabilities. Measurable impact.
          </h2>
          <p class="mt-7 text-graphite text-lg leading-relaxed">
            At World of ESG, we believe that meaningful transformation doesn't happen through
            isolated services—it happens through connected capabilities working as one. Our approach
            brings together strategy, technology, talent, execution, research, and legal expertise
            into a single, continuously evolving ecosystem that helps organizations move from
            insight to measurable impact.
          </p>
          <p class="mt-5 text-graphite text-lg leading-relaxed">
            While most firms specialize in one discipline, we deliberately integrated all six. Our
            strategic advisory defines the roadmap. Our technology platform transforms data into
            intelligence. Our training and capability-building empower people to sustain change. Our
            implementation teams convert plans into measurable outcomes. Our research keeps
            solutions aligned with emerging global standards and industry best practices. Our legal
            and regulatory expertise ensures every initiative is compliant, resilient, and
            future-ready.
          </p>
          <p class="mt-5 text-graphite text-lg leading-relaxed">
            Each discipline strengthens the next. We don't deliver disconnected consulting
            assignments or standalone software. We build integrated sustainability ecosystems that
            enable organizations to embed ESG, decarbonization, compliance, and digital
            transformation into the way they operate. It's a continuous loop of learning, improving,
            and creating measurable impact.
          </p>
        </div>
        <div class="company-card">
          <p class="company-card-kicker">Our six disciplines</p>
          <div class="grid sm:grid-cols-2 gap-3 mt-7">
            <span v-for="discipline in disciplines" :key="discipline" class="discipline-chip">{{
              discipline
            }}</span>
          </div>
          <p class="mt-8 pt-7 border-t border-white/15 text-white/75 leading-relaxed">
            Strategy informs the platform. Data guides implementation. Learning builds lasting
            capability. Every part strengthens the next.
          </p>
        </div>
      </div>
    </section>

    <section v-if="showTeamSection" class="team-section py-20 md:py-28">
      <div class="max-w-[1380px] mx-auto px-6 md:px-10">
        <div class="max-w-3xl">
          <span class="eyebrow mb-6">Meet the team</span>
          <h2
            class="font-display font-bold text-charcoal text-[clamp(2.35rem,4.5vw,4rem)] leading-[1.02]"
          >
            The people advancing your climate transition.
          </h2>
          <p class="mt-6 text-graphite text-lg leading-relaxed">
            Our multidisciplinary team brings ESG strategy, climate science, product thinking,
            research, and learning design together around one goal: progress that stands up to
            boards, investors, and regulators.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          <article
            v-for="member in team"
            :key="member.name"
            class="team-card"
            :style="{ '--team-color': member.color }"
          >
            <div class="team-initials">{{ member.initials }}</div>
            <div class="p-6">
              <h3 class="font-display font-bold text-xl text-white">{{ member.name }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-white/70">{{ member.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-sand">
      <div class="max-w-[1380px] mx-auto px-6 md:px-10">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
          <div class="max-w-3xl">
            <span class="eyebrow mb-6">Impact at a Glance</span>
            <h2
              class="font-display font-bold text-charcoal text-[clamp(2.35rem,4.5vw,4rem)] leading-[1.02]"
            >
              Our milestones and measurable impact.
            </h2>
          </div>
          <p class="max-w-md text-graphite text-lg leading-relaxed">
            We value the trust of clients, learners, and partners. Our work is measured by the
            progress it enables—not inflated claims.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 mt-12">
          <article v-for="item in recognition" :key="item.title" class="recognition-card">
            <span class="recognition-number">{{ item.value }}</span>
            <h3 class="font-display font-bold text-xl text-charcoal mt-7">{{ item.title }}</h3>
            <p class="text-graphite leading-relaxed mt-3">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
    <AwardsSection v-if="showRecognitionSection" />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import AwardsSection from '@/sections/AwardsSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import { initHeroGlobe, type GlobeHandle } from '@/composables/useGlobe'

// ── Section visibility flags ──────────────────────────────────────────────
// Hidden for now, kept in the codebase so they can be switched back on without
// rewriting anything. Flip either to `true` to publish that section again.
const showTeamSection = false // "Meet the team"
const showRecognitionSection = false // "Recognition" / Awards and Recognitions

let globe: GlobeHandle | null = null

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches
  // Same dotted-Earth animation as the home hero — no preloader here, so start at once.
  // cameraX 0 centres the globe in the panel (the hero offsets it to -2 to clear the headline).
  globe = initHeroGlobe(reduceMotion, 'about-canvas', 0)
  globe.start()
})

onBeforeUnmount(() => {
  globe?.dispose()
  globe = null
})

const disciplines = [
  'ESG Strategy',
  'Carbon Intelligence Platform',
  'Capability Building',
  'Decarbonization',
  'ESG Research',
  'Environmental Law',
]
const team = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', initials: 'AM', color: '#1D6B43' },
  { name: 'Priya Nair', role: 'Head of ESG Strategy', initials: 'PN', color: '#3A4DB8' },
  { name: 'Ravi Krishnaswamy', role: 'Chief Technology Officer', initials: 'RK', color: '#7430A4' },
  { name: 'Kavya Reddy', role: 'Head of Capability Building', initials: 'KR', color: '#117C50' },
]
const recognition = [
  {
    value: '500+',
    title: 'Learners enabled',
    description: 'Practical sustainability capability building for the people who lead change.',
  },
  {
    value: '20+',
    title: 'Platform modules',
    description: 'Connected tools for carbon data, reporting, compliance, and decision-making.',
  },
  {
    value: '6',
    title: 'Integrated disciplines',
    description: 'Strategy through execution, working as one reinforcing system.',
  },
]
</script>

<style scoped>
.about-page {
  background: var(--mist);
}
.about-hero {
  background: linear-gradient(145deg, #f8f6f0 0%, #e8f4eb 70%, #e8f0fb 100%);
}
.about-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(25rem, 0.88fr);
  gap: clamp(3rem, 7vw, 8rem);
  align-items: center;
}
.about-orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(20px);
  pointer-events: none;
}
.about-orb-one {
  width: 28rem;
  height: 28rem;
  right: -5rem;
  top: -8rem;
  background: rgba(91, 227, 139, 0.24);
}
.about-orb-two {
  width: 20rem;
  height: 20rem;
  right: 28%;
  bottom: -11rem;
  background: rgba(58, 77, 184, 0.12);
}
.globe-wrap {
  position: relative;
  width: min(100%, 34rem);
  aspect-ratio: 1 / 1;
  margin-inline: auto;
}
.globe-wrap canvas {
  display: block;
  width: 100%;
  height: 100%;
}
.ecosystem-flow {
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: 100%;
  color: var(--forest);
  font:
    700 0.66rem 'Inter Tight',
    sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transform: translateX(-50%);
}
.ecosystem-flow i {
  color: var(--emerald);
  font-size: 1rem;
  font-style: normal;
}
.company-card {
  padding: clamp(1.75rem, 4vw, 3rem);
  border-radius: 1.75rem;
  background: linear-gradient(145deg, #10304a, #0b2a1e);
  box-shadow: 0 28px 60px -30px rgba(11, 42, 30, 0.65);
}
.company-card-kicker {
  color: var(--aurora);
  font:
    600 0.78rem 'Inter Tight',
    sans-serif;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.discipline-chip {
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 0.8rem;
  color: #fff;
  font:
    600 0.9rem 'Inter Tight',
    sans-serif;
  background: rgba(255, 255, 255, 0.07);
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
.recognition-card {
  padding: 2rem;
  border: 1px solid var(--stone);
  border-radius: 1.4rem;
  background: #fff;
  box-shadow: 0 18px 35px -30px rgba(8, 24, 21, 0.35);
}
.recognition-number {
  color: var(--forest);
  font:
    800 clamp(2.7rem, 5vw, 4.5rem)/1 'Inter Tight',
    sans-serif;
  letter-spacing: -0.06em;
}
@media (max-width: 1023px) {
  .about-hero-grid {
    grid-template-columns: 1fr;
  }
  .globe-wrap {
    margin-top: 1rem;
  }
}
@media (max-width: 480px) {
  .globe-wrap {
    width: 100%;
  }
}
</style>

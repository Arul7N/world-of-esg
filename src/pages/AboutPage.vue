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
        <div class="eco-wrap">
          <EcosystemWheel />
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

    <AwardsSection v-if="showRecognitionSection" />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import AwardsSection from '@/sections/AwardsSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import EcosystemWheel from '@/components/EcosystemWheel.vue'

// ── Section visibility flags ──────────────────────────────────────────────
// Hidden for now, kept in the codebase so they can be switched back on without
// rewriting anything. Flip either to `true` to publish that section again.
const showRecognitionSection = false // "Recognition" / Awards and Recognitions

const disciplines = [
  'ESG Strategy',
  'Carbon Intelligence Platform',
  'Capability Building',
  'Decarbonization',
  'ESG Research',
  'Environmental Law',
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
.eco-wrap {
  position: relative;
  width: min(100%, 38rem);
  margin-inline: auto;
  padding-bottom: 2.5rem;
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
@media (max-width: 1023px) {
  .about-hero-grid {
    grid-template-columns: 1fr;
  }
  .eco-wrap {
    margin-top: 1rem;
  }
}
@media (max-width: 480px) {
  .eco-wrap {
    width: 100%;
  }
}
</style>

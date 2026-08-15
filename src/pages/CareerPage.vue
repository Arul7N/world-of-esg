<template>
  <div class="career-page">
    <!-- Hero Section -->
    <section
      class="relative min-h-[50vh] flex items-center overflow-hidden pt-28 pb-16 bg-gradient-to-b from-sand to-mist"
    >
      <div
        class="blob"
        style="
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, #ddf5e5, transparent 70%);
          top: 10%;
          right: 5%;
        "
      ></div>

      <div class="relative max-w-[1380px] mx-auto w-full px-6 md:px-10 z-10 career-hero-grid">
        <div class="max-w-2xl">
          <span class="eyebrow mb-7">Join Our Team</span>
          <h1
            class="font-display font-extrabold text-charcoal leading-[1.04] text-[clamp(2.5rem,4.9vw,4rem)] mb-6"
          >
            Shape Climate Transformation
          </h1>
          <p
            class="font-serif-q text-charcoal/75 text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.35] max-w-xl mb-5"
          >
            Help organizations navigate the ESG landscape with
            <span class="text-grad">integrated strategy, technology, and execution.</span>
          </p>
          <p class="text-graphite text-[clamp(1.0rem,1.4vw,1.25rem)] leading-relaxed max-w-xl">
            We're building a team of passionate professionals committed to driving sustainable
            growth across industries.
          </p>
        </div>

        <aside class="career-path-card" aria-label="Career path explorer">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="career-path-kicker">Find your path</p>
              <h2 class="font-display font-bold text-2xl text-charcoal mt-1">
                Where can you make an impact?
              </h2>
            </div>
            <span class="career-path-mark" aria-hidden="true">↗</span>
          </div>
          <div class="career-path-tabs" role="tablist" aria-label="Career paths">
            <button
              v-for="path in careerPaths"
              :key="path.name"
              type="button"
              class="career-path-tab"
              :class="{ active: selectedPath.name === path.name }"
              :style="{ '--path-color': path.color }"
              role="tab"
              :aria-selected="selectedPath.name === path.name"
              @click="selectedPath = path"
            >
              {{ path.name }}
            </button>
          </div>
          <div class="career-path-result" :style="{ '--path-color': selectedPath.color }">
            <svg class="icon career-path-icon" aria-hidden="true">
              <use :href="`#i-${selectedPath.icon}`" />
            </svg>
            <div>
              <p class="text-sm font-semibold" :style="{ color: selectedPath.color }">
                {{ selectedPath.role }}
              </p>
              <p class="text-graphite text-sm leading-relaxed mt-2">
                {{ selectedPath.description }}
              </p>
            </div>
          </div>
          <a href="#open-roles" class="career-path-link">Explore open roles <span>→</span></a>
        </aside>
      </div>
    </section>

    <!-- Job Listings Section -->
    <section id="open-roles" class="relative py-28 md:py-40 overflow-hidden">
      <div class="max-w-[1380px] mx-auto px-6 md:px-10">
        <div class="mb-16 max-w-3xl">
          <span class="eyebrow mb-6" data-reveal>Open Positions</span>
          <h2
            class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]"
            data-reveal
          >
            We're Hiring
          </h2>
          <p class="text-graphite text-lg md:text-xl leading-relaxed mt-6" data-reveal>
            Every current opening is posted on our LinkedIn page — always live, always up to date.
            Browse the roles there and apply directly.
          </p>
        </div>

        <!-- Roles live on LinkedIn: no per-role markup to maintain here. -->
        <div class="roles-panel" data-reveal>
          <div class="roles-panel-main">
            <span class="roles-linkedin-mark" aria-hidden="true">
              <svg class="icon icon-fill" style="width: 1.7rem; height: 1.7rem">
                <use href="#i-linkedin" />
              </svg>
            </span>
            <h3
              class="font-display font-bold text-white text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight mt-6"
            >
              View all open roles on LinkedIn
            </h3>
            <p class="text-white/75 text-lg leading-relaxed mt-4 max-w-xl">
              Roles across strategy, technology, delivery, and learning are posted and updated there
              as they open. Applications go straight through LinkedIn.
            </p>

            <div class="roles-actions">
              <a
                :href="LINKEDIN_JOBS_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="roles-btn-primary"
              >
                Browse open roles
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
                    d="M7 17L17 7M17 7H9M17 7v8"
                  />
                </svg>
              </a>
              <a :href="`mailto:${CAREERS_EMAIL}`" class="roles-btn-ghost">
                Send your CV instead
              </a>
            </div>
            <p class="text-white/50 text-sm mt-6">Opens LinkedIn in a new tab</p>
          </div>

          <ul class="roles-areas" aria-label="Areas we hire across">
            <li
              v-for="path in careerPaths"
              :key="path.name"
              :style="{ '--path-color': path.color }"
            >
              <svg class="icon" aria-hidden="true"><use :href="`#i-${path.icon}`" /></svg>
              <div>
                <p class="roles-area-name">{{ path.name }}</p>
                <p class="roles-area-role">{{ path.role }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="relative py-28 md:py-40 overflow-hidden bg-sand">
      <div
        class="blob"
        style="
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, #ddf5e5, transparent 70%);
          bottom: -10%;
          left: -120px;
        "
      ></div>

      <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
        <div class="text-center mb-16">
          <span class="eyebrow mb-6" data-reveal>Why Join Us</span>
          <h2
            class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03] max-w-3xl mx-auto"
            data-reveal
          >
            Be Part of Climate Transformation
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.id" class="text-center" data-reveal>
            <div
              class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              :style="{ backgroundColor: benefit.color + '20' }"
            >
              <svg
                class="icon"
                style="width: 1.85rem; height: 1.85rem"
                :style="{ color: benefit.color }"
                aria-hidden="true"
              >
                <use :href="`#i-${benefitIcons[benefit.id]}`" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-charcoal text-xl mb-3">{{ benefit.title }}</h3>
            <p class="text-graphite leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section
      class="relative py-20 md:py-28 overflow-hidden text-sand"
      style="
        background: linear-gradient(178deg, #2a0f52 0%, #33177a 30%, #22308c 62%, #16325e 100%);
      "
    >
      <div
        class="blob"
        style="
          width: 640px;
          height: 640px;
          background: radial-gradient(
            circle,
            rgba(116, 48, 164, 0.4) 0%,
            rgba(58, 77, 184, 0.22) 55%,
            transparent 75%
          );
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
        "
      ></div>

      <div class="max-w-[1000px] mx-auto px-6 md:px-10 text-center relative z-10">
        <h2
          class="font-display font-extrabold text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] mb-8"
          data-reveal
        >
          Ready to Make an Impact?
        </h2>
        <p
          class="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-lavender"
          data-reveal
        >
          Join World of ESG and help organizations transition toward resilient, compliant, and
          low-carbon business models.
        </p>
        <a
          :href="LINKEDIN_JOBS_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-aurora text-charcoal font-display font-semibold hover:-translate-y-1 transition-transform duration-300"
        >
          Explore Careers on LinkedIn
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 17L17 7M17 7H9M17 7v8"
            />
          </svg>
        </a>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FooterSection from '@/sections/FooterSection.vue'
import { LINKEDIN_JOBS_URL, CAREERS_EMAIL } from '@/constants'

const careerPaths = [
  {
    name: 'Strategy',
    role: 'Turn ambition into a roadmap',
    description:
      'Guide leaders through ESG priorities, climate risk, reporting, and credible net-zero plans.',
    icon: 'target',
    color: '#1D6B43',
  },
  {
    name: 'Technology',
    role: 'Build intelligence from data',
    description:
      'Create the platform tools that make carbon data, compliance, and reporting simpler to act on.',
    icon: 'cpu',
    color: '#3A4DB8',
  },
  {
    name: 'Delivery',
    role: 'Turn plans into progress',
    description:
      'Lead practical decarbonization work that moves projects from baseline to verified outcomes.',
    icon: 'zap',
    color: '#117C50',
  },
  {
    name: 'Learning',
    role: 'Build capability that lasts',
    description: 'Equip organizations and future leaders with the ESG knowledge to sustain change.',
    icon: 'users',
    color: '#7430A4',
  },
]
const selectedPath = ref(careerPaths[0])

const benefitIcons: Record<number, string> = {
  1: 'globe',
  2: 'zap',
  3: 'database',
  4: 'share',
  5: 'cpu',
  6: 'users',
}

const benefits = ref([
  {
    id: 1,
    icon: '🌍',
    title: 'Global Impact',
    color: '#1D6B43',
    description:
      'Work on projects that directly contribute to climate action and sustainable business transformation across industries.',
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Growth Opportunities',
    color: '#2FA66A',
    description:
      'Join a fast-growing company with clear career progression and opportunities to lead cross-functional teams.',
  },
  {
    id: 3,
    icon: '🎓',
    title: 'Continuous Learning',
    color: '#5BE38B',
    description:
      'Access to certifications, training programs, and expert mentorship to deepen your ESG expertise.',
  },
  {
    id: 4,
    icon: '💼',
    title: 'Flexible Work',
    color: '#7430A4',
    description: 'Hybrid work culture with remote flexibility and focus on work-life balance.',
  },
  {
    id: 5,
    icon: '💡',
    title: 'Innovation Culture',
    color: '#CBBE8A',
    description:
      'Collaborate with innovative thinkers and leverage technology to solve real-world sustainability challenges.',
  },
  {
    id: 6,
    icon: '👥',
    title: 'Diverse Team',
    color: '#3A4DB8',
    description:
      'Work alongside passionate professionals from diverse backgrounds united by a common mission.',
  },
])
</script>

<style scoped>
.eyebrow {
  font-family: 'Inter Tight', sans-serif;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--forest);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.eyebrow::before {
  content: '';
  width: 28px;
  height: 1.5px;
  background: var(--forest);
  display: inline-block;
}

.roles-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(17rem, 0.75fr);
  gap: clamp(2rem, 4vw, 3.5rem);
  padding: clamp(2rem, 4vw, 3.5rem);
  border-radius: 1.75rem;
  background: linear-gradient(150deg, #0b2a1e 0%, #10402c 55%, #10304a 100%);
  box-shadow: 0 30px 64px -34px rgba(11, 42, 30, 0.6);
}

.roles-linkedin-mark {
  display: grid;
  place-items: center;
  width: 3.4rem;
  height: 3.4rem;
  border: 1px solid rgba(91, 227, 139, 0.8);
  border-radius: 0.8rem;
  color: var(--aurora);
}

.roles-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2.2rem;
}

.roles-btn-primary,
.roles-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  border-radius: 100px;
  font:
    600 1rem 'Inter Tight',
    sans-serif;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
}

.roles-btn-primary {
  color: var(--deep);
  background: var(--aurora);
}
.roles-btn-primary:hover {
  transform: translateY(-2px);
  background: #fff;
}
.roles-btn-ghost {
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}
.roles-btn-ghost:hover {
  border-color: var(--aurora);
  color: var(--aurora);
}
.roles-btn-primary:focus-visible,
.roles-btn-ghost:focus-visible {
  outline: 2px solid var(--aurora);
  outline-offset: 3px;
}

.roles-areas {
  display: grid;
  align-content: start;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.roles-areas li {
  display: grid;
  grid-template-columns: 2.1rem 1fr;
  gap: 0.85rem;
  align-items: center;
  padding: 0.95rem 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-left: 3px solid var(--path-color);
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.06);
}

.roles-areas .icon {
  width: 1.6rem;
  height: 1.6rem;
  color: var(--path-color);
}
.roles-area-name {
  color: #fff;
  font:
    700 0.95rem 'Inter Tight',
    sans-serif;
}
.roles-area-role {
  margin-top: 0.15rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.8rem;
  line-height: 1.4;
}

@media (max-width: 900px) {
  .roles-panel {
    grid-template-columns: 1fr;
  }
}

.text-grad {
  background: linear-gradient(
    100deg,
    var(--forest),
    var(--emerald) 45%,
    var(--indigo) 88%,
    var(--violet)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.blob {
  position: absolute;
  border-radius: 100%;
  filter: blur(40px);
  opacity: 0.6;
}

.career-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.72fr);
  align-items: center;
  gap: clamp(3rem, 7vw, 8rem);
}

.career-path-card {
  padding: clamp(1.4rem, 3vw, 2rem);
  border: 1px solid rgba(155, 199, 164, 0.65);
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 28px 60px -38px rgba(11, 42, 30, 0.45);
  backdrop-filter: blur(16px);
}

.career-path-kicker {
  color: var(--forest);
  font:
    700 0.72rem 'Inter Tight',
    sans-serif;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.career-path-mark {
  display: grid;
  place-items: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 50%;
  color: var(--forest);
  background: var(--mint);
  font-size: 1.3rem;
}
.career-path-tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.45rem;
  margin-top: 1.45rem;
}
.career-path-tab {
  padding: 0.65rem 0.5rem;
  border: 1px solid var(--stone);
  border-radius: 0.65rem;
  color: var(--graphite);
  background: #fff;
  font:
    600 0.77rem 'Inter Tight',
    sans-serif;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}
.career-path-tab:hover {
  transform: translateY(-1px);
  border-color: var(--path-color);
}
.career-path-tab.active {
  border-color: var(--path-color);
  color: #fff;
  background: var(--path-color);
}
.career-path-result {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 0.85rem;
  min-height: 8.7rem;
  margin-top: 0.85rem;
  padding: 1rem;
  border-radius: 1rem;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--path-color) 10%, white),
    rgba(255, 255, 255, 0.86)
  );
}
.career-path-icon {
  width: 2.25rem;
  height: 2.25rem;
  margin-top: 0.1rem;
  color: var(--path-color);
}
.career-path-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 1.25rem;
  color: var(--forest);
  font:
    700 0.85rem 'Inter Tight',
    sans-serif;
  text-decoration: none;
}
.career-path-link span {
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}
.career-path-link:hover span {
  transform: translateX(4px);
}
@media (max-width: 1023px) {
  .career-hero-grid {
    grid-template-columns: 1fr;
  }
  .career-path-card {
    max-width: 36rem;
  }
}
</style>

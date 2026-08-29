<template>
  <div class="career-page">
    <!-- We're Hiring: one section — intro copy followed by the open-roles panel -->
    <section
      id="open-roles"
      class="relative overflow-hidden pt-28 pb-24 md:pb-32 bg-gradient-to-b from-sand to-mist"
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

      <div class="relative max-w-[1380px] mx-auto w-full px-6 md:px-10 z-10">
        <div class="max-w-3xl">
          <span class="eyebrow mb-7">We're Hiring</span>
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
          <p class="text-graphite text-[clamp(1.0rem,1.4vw,1.25rem)] leading-relaxed mb-5">
            We're building a team of passionate professionals committed to driving sustainable
            growth across industries.
          </p>
          <p class="text-graphite text-[clamp(1.0rem,1.4vw,1.25rem)] leading-relaxed">
            Every current opening is posted on our LinkedIn page — always live, always up to date.
            Browse the roles there and apply directly.
          </p>
        </div>

        <!-- Roles live on LinkedIn: no per-role markup to maintain here. -->
        <div id="roles" class="roles-panel mt-14 md:mt-16" data-reveal>
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

@media (max-width: 1023px) {
}
</style>

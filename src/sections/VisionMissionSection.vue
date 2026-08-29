<template>
  <section
    id="vm"
    class="relative py-28 md:py-40 overflow-hidden"
    style="background: linear-gradient(160deg, #0b1238 0%, #22308c 55%, #0d1545 100%)"
  >
    <div
      class="blob"
      style="
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(169, 188, 245, 0.3), transparent 70%);
        top: -180px;
        right: -120px;
      "
    ></div>
    <div
      class="blob"
      style="
        width: 420px;
        height: 420px;
        background: radial-gradient(circle, rgba(91, 227, 139, 0.16), transparent 70%);
        bottom: -160px;
        left: -100px;
      "
    ></div>
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <span class="eyebrow mb-12" style="color: var(--sky); --forest: var(--sky)" data-reveal
        >Vision, Mission, Values</span
      >
      <div
        class="grid lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x items-start"
        style="--tw-divide-opacity: 1"
        data-reveal
      >
        <!-- Left column: Vision, with Mission stacked beneath it -->
        <div class="lg:pr-14 flex flex-col gap-12">
          <div>
            <div class="flex items-center gap-5 mb-6">
              <svg viewBox="0 0 64 64" class="w-16 h-16 shrink-0" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="rgba(169,188,245,.10)" />
                <circle
                  cx="32"
                  cy="32"
                  r="22"
                  fill="none"
                  stroke="#A9BCF5"
                  stroke-width="1.2"
                  opacity=".5"
                />
                <g class="vis-eye">
                  <path
                    d="M10 32 Q32 14 54 32 Q32 50 10 32 Z"
                    fill="#fff"
                    stroke="#3A4DB8"
                    stroke-width="2"
                  />
                  <g class="vis-look">
                    <circle cx="32" cy="32" r="9" fill="#A9BCF5" />
                    <circle cx="32" cy="32" r="4.5" fill="#0B1238" />
                    <circle cx="34.5" cy="29.5" r="1.6" fill="#fff" />
                  </g>
                </g>
              </svg>
              <h3 class="font-serif-q text-4xl md:text-5xl" style="color: var(--sky)">Vision</h3>
            </div>
            <p class="text-xl md:text-2xl leading-[1.5]" style="color: rgba(216, 231, 255, 0.94)">
              To become a global leader in ESG integration and Climate Intelligence — through
              <span style="color: var(--aurora)"
                >Sustainable Growth, Regulatory Resilience, and Measurable Decarbonization.</span
              >
            </p>
          </div>

          <div class="pt-12 border-t" style="border-color: rgba(169, 188, 245, 0.18)">
            <div class="flex items-center gap-5 mb-6">
              <svg viewBox="0 0 64 64" class="w-16 h-16 shrink-0" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="rgba(169,188,245,.10)" />
                <line
                  x1="14"
                  y1="42"
                  x2="50"
                  y2="42"
                  stroke="#A9BCF5"
                  stroke-width="2"
                  stroke-linecap="round"
                  opacity=".45"
                />
                <path
                  class="mis-arch"
                  d="M14 42 Q32 18 50 42"
                  fill="none"
                  stroke="#A9BCF5"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle cx="14" cy="42" r="4" fill="#3A4DB8" />
                <circle cx="50" cy="42" r="4" fill="#5BE38B" />
                <circle r="6.5" fill="#A9BCF5" opacity=".25" class="mis-travel" />
                <circle r="3.2" fill="#A9BCF5" class="mis-travel" />
              </svg>
              <h3 class="font-serif-q text-4xl md:text-5xl" style="color: var(--sky)">Mission</h3>
            </div>
            <p class="text-xl md:text-2xl leading-[1.5]" style="color: rgba(216, 231, 255, 0.94)">
              To bridge the gap between sustainability strategy and real-world climate action —
              through
              <span style="color: var(--aurora)"
                >expertise, technology, and execution excellence.</span
              >
            </p>
          </div>
        </div>

        <!-- Right column: Values -->
        <div class="lg:pl-14 pt-12 lg:pt-0" style="border-color: rgba(169, 188, 245, 0.18)">
          <div class="flex items-center gap-5 mb-8">
            <svg viewBox="0 0 64 64" class="w-14 h-14 shrink-0" aria-hidden="true">
              <circle cx="32" cy="32" r="30" fill="rgba(169,188,245,.10)" />
              <polygon
                class="val-star"
                points="32,14 38,26 52,28 42,38 44,52 32,46 20,52 22,38 12,28 26,26"
                fill="none"
                stroke="#A9BCF5"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <circle class="val-core" cx="32" cy="32" r="5" fill="#A9BCF5" opacity=".7" />
            </svg>
            <h3 class="font-serif-q text-4xl md:text-5xl" style="color: var(--sky)">Values</h3>
          </div>

          <div class="flex flex-col gap-3">
            <div
              v-for="value in VALUES"
              :key="value.name"
              class="value-card"
              style="
                background: rgba(169, 188, 245, 0.08);
                border: 1px solid rgba(169, 188, 245, 0.16);
              "
            >
              <div class="value-chip" :style="{ background: value.chip }">
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                  fill="none"
                  :stroke="value.stroke"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <template v-for="(shape, i) in value.shapes" :key="i">
                    <path v-if="shape.t === 'path'" :d="shape.d" />
                    <circle
                      v-else-if="shape.t === 'circle'"
                      :cx="shape.cx"
                      :cy="shape.cy"
                      :r="shape.r"
                    />
                    <polyline v-else-if="shape.t === 'polyline'" :points="shape.points" />
                    <polygon v-else :points="shape.points" />
                  </template>
                </svg>
              </div>
              <div>
                <h4 class="font-display font-bold text-base" :style="{ color: value.stroke }">
                  {{ value.name }}
                </h4>
                <p class="text-xs leading-relaxed mt-1" style="color: rgba(216, 231, 255, 0.75)">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Shape =
  | { t: 'path'; d: string }
  | { t: 'circle'; cx: number; cy: number; r: number }
  | { t: 'polyline'; points: string }
  | { t: 'polygon'; points: string }

interface Value {
  name: string
  description: string
  /** Icon stroke colour, reused for the card heading. */
  stroke: string
  /** Background of the round icon chip. */
  chip: string
  shapes: Shape[]
}

const AURORA = '#5BE38B'
const SKY = '#A9BCF5'

const VALUES: Value[] = [
  {
    name: 'Trust',
    description:
      'Open about our methods, honest about what the data can prove, and we deliver what we promised.',
    stroke: AURORA,
    chip: 'rgba(91, 227, 139, 0.15)',
    shapes: [{ t: 'path', d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }],
  },
  {
    name: 'Respect',
    description: 'Every organisation starts somewhere different. We listen before we advise.',
    stroke: SKY,
    chip: 'rgba(169, 188, 245, 0.15)',
    shapes: [
      { t: 'path', d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
      { t: 'circle', cx: 9, cy: 7, r: 4 },
      { t: 'path', d: 'M23 21v-2a4 4 0 0 0-3-3.87' },
      { t: 'path', d: 'M16 3.13a4 4 0 0 1 0 7.75' },
    ],
  },
  {
    name: 'Excellence',
    description: 'Auditors, regulators and investors read our work. We hold it to that standard.',
    stroke: AURORA,
    chip: 'rgba(91, 227, 139, 0.15)',
    shapes: [
      {
        t: 'polygon',
        points:
          '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
      },
    ],
  },
  {
    name: 'Leadership',
    description: 'Regulation moves faster than the guidance. We take a position early.',
    stroke: SKY,
    chip: 'rgba(169, 188, 245, 0.15)',
    shapes: [{ t: 'polyline', points: '22 12 18 12 15 21 9 3 6 12 2 12' }],
  },
  {
    name: 'Responsibility',
    description:
      'We own the outcome — progress and shortfalls alike. If it misses, we put it right.',
    stroke: AURORA,
    chip: 'rgba(91, 227, 139, 0.15)',
    shapes: [
      { t: 'path', d: 'M9 12l2 2 4-4' },
      { t: 'path', d: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z' },
    ],
  },
]
</script>

<style scoped>
/* Full-width rows rather than a 2-up grid: the icon sits beside the copy so
   each value reads as one line of thought instead of a cramped tile. */
.value-card {
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  gap: 1rem;
  align-items: start;
  padding: 1rem 1.15rem;
  border-radius: 1rem;
  transition:
    background 0.28s ease,
    border-color 0.28s ease,
    transform 0.28s ease;
}

.value-card:hover {
  background: rgba(169, 188, 245, 0.14) !important;
  border-color: rgba(169, 188, 245, 0.3) !important;
  transform: translateX(4px);
}

.value-chip {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
}
</style>

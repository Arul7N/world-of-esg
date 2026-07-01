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
        >What Drives Us</span
      >
      <div
        class="grid lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x items-start"
        style="--tw-divide-opacity: 1"
        data-reveal
      >
        <div class="lg:pr-14">
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
        <div class="lg:pl-14 pt-12 lg:pt-0" style="border-color: rgba(169, 188, 245, 0.18)">
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

      <!-- Values -->
      <div class="mt-20 pt-16 border-t" style="border-color: rgba(169, 188, 245, 0.18)" data-reveal>
        <div class="flex items-center gap-5 mb-10">
          <svg viewBox="0 0 64 64" class="w-14 h-14 shrink-0" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="rgba(169,188,245,.10)" />
            <polygon
              points="32,14 38,26 52,28 42,38 44,52 32,46 20,52 22,38 12,28 26,26"
              fill="none"
              stroke="#A9BCF5"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <circle cx="32" cy="32" r="5" fill="#A9BCF5" opacity=".7" />
          </svg>
          <h3 class="font-serif-q text-4xl md:text-5xl" style="color: var(--sky)">Values</h3>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="rounded-2xl p-6"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(91, 227, 139, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-5 h-5"
                fill="none"
                stroke="#5BE38B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 12l2 2 4-4" />
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-lg mb-2" style="color: var(--aurora)">
              Integrity
            </h4>
            <p class="text-sm leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              Science-based, independently verified, and honest about what's certain and what's not.
              Our advice is as rigorous as our reporting.
            </p>
          </div>
          <div
            class="rounded-2xl p-6"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(169, 188, 245, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-5 h-5"
                fill="none"
                stroke="#A9BCF5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
              </svg>
            </div>
            <h4 class="font-display font-bold text-lg mb-2" style="color: var(--sky)">
              Integration
            </h4>
            <p class="text-sm leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              Six disciplines, one system. Climate transformation doesn't happen in silos — neither
              do our solutions.
            </p>
          </div>
          <div
            class="rounded-2xl p-6"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(91, 227, 139, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-5 h-5"
                fill="none"
                stroke="#5BE38B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-lg mb-2" style="color: var(--aurora)">Impact</h4>
            <p class="text-sm leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              Every engagement starts with a verified baseline and ends with a measurable,
              reportable outcome — not a presentation deck.
            </p>
          </div>
          <div
            class="rounded-2xl p-6"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(169, 188, 245, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-5 h-5"
                fill="none"
                stroke="#A9BCF5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-lg mb-2" style="color: var(--sky)">
              Innovation
            </h4>
            <p class="text-sm leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              Continuous research and technology development to stay ahead of the climate and
              regulatory curve — so our clients always are too.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

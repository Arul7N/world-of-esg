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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <!-- Trust -->
          <div
            class="rounded-2xl p-5"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(91, 227, 139, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4"
                fill="none"
                stroke="#5BE38B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-base mb-2" style="color: var(--aurora)">
              Trust
            </h4>
            <p class="text-xs leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              We build open and honest relationships. We share information clearly and do exactly
              what we promise to do.
            </p>
          </div>

          <!-- Respect -->
          <div
            class="rounded-2xl p-5"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(169, 188, 245, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4"
                fill="none"
                stroke="#A9BCF5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-base mb-2" style="color: var(--sky)">Respect</h4>
            <p class="text-xs leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              We treat everyone as a valuable partner. We listen to new ideas and embrace different
              backgrounds and opinions.
            </p>
          </div>

          <!-- Excellence -->
          <div
            class="rounded-2xl p-5"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(91, 227, 139, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4"
                fill="none"
                stroke="#5BE38B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
            </div>
            <h4 class="font-display font-bold text-base mb-2" style="color: var(--aurora)">
              Excellence
            </h4>
            <p class="text-xs leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              We always do our best work. We set high goals. We push to make our products better
              every single day.
            </p>
          </div>

          <!-- Leadership -->
          <div
            class="rounded-2xl p-5"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(169, 188, 245, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4"
                fill="none"
                stroke="#A9BCF5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-base mb-2" style="color: var(--sky)">
              Leadership
            </h4>
            <p class="text-xs leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              We empower our team to make good choices. We take bold steps and do not wait for
              others to show us the way.
            </p>
          </div>

          <!-- Responsibility — spans 2 cols on sm so the row of 1 is centered; resets to 1 col on lg -->
          <div
            class="rounded-2xl p-5 sm:col-span-2 sm:max-w-[calc(50%-10px)] sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 w-full"
            style="
              background: rgba(169, 188, 245, 0.08);
              border: 1px solid rgba(169, 188, 245, 0.16);
            "
          >
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center mb-4"
              style="background: rgba(91, 227, 139, 0.15)"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4"
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
            <h4 class="font-display font-bold text-base mb-2" style="color: var(--aurora)">
              Responsibility
            </h4>
            <p class="text-xs leading-relaxed" style="color: rgba(216, 231, 255, 0.75)">
              We own our wins and our mistakes. We do not hide from tough problems; instead, we find
              the answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

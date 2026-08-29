<template>
  <div
    class="eco"
    role="img"
    :aria-label="`World of ESG ecosystem: ${NODES.map((n) => n.name).join(', ')} working as one continuous loop`"
  >
    <svg class="eco-canvas" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="ecoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#5BE38B" stop-opacity="0.22" />
          <stop offset="60%" stop-color="#DDF5E5" stop-opacity="0.10" />
          <stop offset="100%" stop-color="#DDF5E5" stop-opacity="0" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="49" fill="url(#ecoGlow)" />

      <!-- Sonar ripples pushing out from the hub -->
      <circle
        v-for="r in 3"
        :key="`ripple-${r}`"
        class="eco-ripple"
        cx="50"
        cy="50"
        r="18"
        fill="none"
        stroke="#2FA66A"
        stroke-width="0.35"
        :style="{ animationDelay: `${(r - 1) * 1.6}s` }"
      />

      <!-- Counter-rotating orbit rings -->
      <circle
        class="eco-orbit-cw"
        cx="50"
        cy="50"
        r="46.5"
        fill="none"
        stroke="#9BC7A4"
        stroke-width="0.28"
        stroke-dasharray="0.6 3.4"
        opacity="0.75"
      />
      <circle
        class="eco-orbit-ccw"
        cx="50"
        cy="50"
        r="43"
        fill="none"
        stroke="#A9BCF5"
        stroke-width="0.25"
        stroke-dasharray="2 5"
        opacity="0.5"
      />

      <!-- Spokes ride the same rotor as the nodes so they stay aligned -->
      <g class="eco-rotor-svg">
        <g v-for="(node, i) in NODES" :key="`spoke-${node.name}`">
          <line
            class="eco-rail"
            x1="50"
            y1="50"
            :x2="node.x"
            :y2="node.y"
            :stroke="node.color"
            stroke-width="0.3"
          />
          <line
            class="eco-pulse"
            x1="50"
            y1="50"
            :x2="node.x"
            :y2="node.y"
            :stroke="node.color"
            stroke-width="0.8"
            stroke-linecap="round"
            :style="{ animationDelay: `${i * 0.55}s` }"
          />
        </g>
      </g>

      <!-- The loop that carries the flow -->
      <circle
        class="eco-loop"
        cx="50"
        cy="50"
        :r="RADIUS"
        fill="none"
        stroke="#2FA66A"
        stroke-width="0.5"
        stroke-dasharray="2 3"
        opacity="0.8"
      />

      <!-- Charges travelling around the loop -->
      <circle
        v-for="d in 3"
        :key="`trav-${d}`"
        class="eco-travel"
        r="0.9"
        fill="#5BE38B"
        :style="{ animationDelay: `${(d - 1) * -3.6}s` }"
      />
      <circle
        v-for="d in 3"
        :key="`halo-${d}`"
        class="eco-travel"
        r="2.2"
        fill="#5BE38B"
        opacity="0.25"
        :style="{ animationDelay: `${(d - 1) * -3.6}s` }"
      />
    </svg>

    <!-- Hub -->
    <div class="eco-hub">
      <img src="/images/logo/logo.png" class="eco-hub-mark" alt="" aria-hidden="true" />
      <span class="eco-hub-name">World of ESG</span>
      <span class="eco-hub-rule" aria-hidden="true"></span>
      <small>Driving sustainable transformation</small>
      <span class="eco-hub-count">Six connected disciplines</span>
    </div>

    <!--
      The rotor carries the nodes around the ring; each node counter-rotates by
      the same amount so its label stays upright and readable throughout.
    -->
    <div class="eco-rotor">
      <div
        v-for="(node, i) in NODES"
        :key="node.name"
        class="eco-node"
        :style="{ left: `${node.x}%`, top: `${node.y}%` }"
      >
        <div
          class="eco-node-face"
          :style="{
            '--node-color': node.color,
            '--node-tint': node.tint,
            '--delay': `${i * 0.42}s`,
          }"
        >
          <span class="eco-node-ring" aria-hidden="true"></span>
          <svg class="eco-node-icon" aria-hidden="true"><use :href="`#i-${node.icon}`" /></svg>
          <span class="eco-node-label">{{ node.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Six capabilities orbiting one hub — the "connected capabilities" idea the
 * About copy describes. Positions come from trigonometry rather than hardcoded
 * coordinates so the ring stays even if a capability is added or removed.
 */
const RADIUS = 37 // % of the container, matching the SVG's 0-100 viewBox

interface EcoNode {
  name: string
  icon: string
  /** Border + icon colour. */
  color: string
  /** Circle fill. */
  tint: string
  x: number
  y: number
}

/*
 * One green family, stepping from deepest at the top round to lightest — the
 * gradation reads as deliberate where six unrelated hues read as arbitrary.
 * Every tint keeps its label text well above contrast minimums.
 */
const CAPABILITIES = [
  { name: 'ESG Strategy', icon: 'target', color: '#0B3D2A', tint: '#EDF7F1' },
  { name: 'Carbon Intelligence Platform', icon: 'cpu', color: '#10553A', tint: '#E3F4EA' },
  { name: 'Capability Building', icon: 'users', color: '#15694A', tint: '#D9F1E3' },
  { name: 'Decarbonization', icon: 'zap', color: '#1A7D57', tint: '#CFEEDC' },
  { name: 'ESG Research', icon: 'database', color: '#1F9165', tint: '#C4EAD4' },
  { name: 'Environmental Law', icon: 'scale', color: '#24A572', tint: '#B9E7CD' },
]

// Start at the top and step clockwise.
const NODES: EcoNode[] = CAPABILITIES.map((c, i) => {
  const angle = ((-90 + (360 / CAPABILITIES.length) * i) * Math.PI) / 180
  return {
    ...c,
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  }
})
</script>

<style scoped>
/* One shared period keeps the rotor, the spokes and the counter-rotation in
   lockstep. 80s is slow enough that every label stays comfortably readable. */
.eco {
  --orbit-period: 80s;

  position: relative;
  width: min(100%, 38rem);
  aspect-ratio: 1;
  margin-inline: auto;
}

.eco-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* ── Motion ─────────────────────────────────────────────────────────── */
@keyframes ecoSpin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ecoSpinBack {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes ecoFlowDash {
  to {
    stroke-dashoffset: -50;
  }
}

@keyframes ecoPulseRun {
  0% {
    stroke-dashoffset: 40;
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

@keyframes ecoRipple {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.55);
    opacity: 0;
  }
}

@keyframes ecoTravel {
  to {
    offset-distance: 100%;
  }
}

/* Node keeps its centring translate while it counter-rotates. */
@keyframes ecoNodeUpright {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes ecoRingSpin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ecoIconBeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.14);
  }
}

@keyframes ecoNodeSheen {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes ecoNodeGlow {
  0%,
  100% {
    box-shadow:
      0 14px 30px -20px rgba(11, 42, 30, 0.55),
      0 0 0 0 color-mix(in srgb, var(--node-color) 18%, transparent);
  }
  50% {
    box-shadow:
      0 16px 34px -18px rgba(11, 42, 30, 0.5),
      0 0 0 0.45rem color-mix(in srgb, var(--node-color) 10%, transparent);
  }
}

@keyframes ecoHubPulse {
  0%,
  100% {
    box-shadow: 0 18px 40px -18px rgba(29, 107, 67, 0.55);
  }
  50% {
    box-shadow:
      0 18px 54px -12px rgba(47, 166, 106, 0.8),
      0 0 0 0.5rem rgba(91, 227, 139, 0.07);
  }
}

.eco-orbit-cw {
  transform-origin: 50% 50%;
  animation: ecoSpin 44s linear infinite;
}

.eco-orbit-ccw {
  transform-origin: 50% 50%;
  animation: ecoSpinBack 32s linear infinite;
}

.eco-loop {
  animation: ecoFlowDash 3s linear infinite;
}

.eco-ripple {
  transform-box: fill-box;
  transform-origin: center;
  animation: ecoRipple 4.8s ease-out infinite;
}

.eco-rail {
  opacity: 0.16;
}

.eco-pulse {
  stroke-dasharray: 5 40;
  animation: ecoPulseRun 3.4s ease-in-out infinite;
}

.eco-travel {
  offset-path: path('M 13,50 a 37,37 0 1,0 74,0 a 37,37 0 1,0 -74,0');
  offset-rotate: 0deg;
  animation: ecoTravel 10.8s linear infinite;
}

/* ── The rotor ──────────────────────────────────────────────────────── */
.eco-rotor {
  position: absolute;
  inset: 0;
  animation: ecoSpin var(--orbit-period) linear infinite;
}

/* view-box resolves the origin against the 0-100 viewBox rather than the
   group's own bounding box — otherwise the spokes swing off-centre. */
.eco-rotor-svg {
  transform-box: view-box;
  transform-origin: 50% 50%;
  animation: ecoSpin var(--orbit-period) linear infinite;
}

/* ── Hub ────────────────────────────────────────────────────────────── */
.eco-hub {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.3rem;
  width: 38%;
  aspect-ratio: 1;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  text-align: center;
  color: #fff;
  background: radial-gradient(circle at 35% 25%, #2fa66a, #1d6b43 58%, #10304a);
  animation: ecoHubPulse 5s ease-in-out infinite;
}

/* The brand mark turns anticlockwise against the ring's clockwise orbit —
   the opposition reads as one mechanism rather than two unrelated spins. */
.eco-hub-mark {
  width: clamp(1.6rem, 4.2vw, 2.8rem);
  height: clamp(1.6rem, 4.2vw, 2.8rem);
  object-fit: contain;
  animation: ecoSpinBack 34s linear infinite;
}

.eco-hub-name {
  font:
    800 clamp(1rem, 2.5vw, 1.55rem) / 1.02 'Inter Tight',
    sans-serif;
  letter-spacing: -0.035em;
}

.eco-hub-rule {
  width: 2.2rem;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, var(--aurora), transparent);
}

.eco-hub small {
  color: rgba(255, 255, 255, 0.82);
  font:
    600 clamp(0.44rem, 1vw, 0.62rem) / 1.3 'Inter Tight',
    sans-serif;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.eco-hub-count {
  margin-top: 0.15rem;
  color: rgba(91, 227, 139, 0.9);
  font:
    600 clamp(0.4rem, 0.9vw, 0.56rem) / 1.2 'Inter Tight',
    sans-serif;
}

/* ── Nodes ──────────────────────────────────────────────────────────── */
.eco-node {
  position: absolute;
  z-index: 3;
  width: 30%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  /* No animation-delay here: the counter-rotation must stay exactly in phase
     with the rotor, or labels would drift off upright. */
  animation: ecoNodeUpright var(--orbit-period) linear infinite;
}

.eco-node-face {
  position: relative;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.45rem;
  width: 100%;
  height: 100%;
  padding: 0.6rem;
  border: 1.5px solid var(--node-color);
  border-radius: 50%;
  text-align: center;
  background: linear-gradient(135deg, var(--node-tint) 0%, #ffffff 45%, var(--node-tint) 100%);
  background-size: 240% 240%;
  animation:
    ecoNodeSheen 7.5s ease-in-out infinite,
    ecoNodeGlow 5.2s ease-in-out infinite;
  animation-delay: var(--delay);
  transition:
    box-shadow 0.35s ease,
    border-width 0.35s ease;
}

.eco-node-face:hover {
  border-width: 2.5px;
  box-shadow:
    0 20px 40px -18px rgba(11, 42, 30, 0.6),
    0 0 0 0.4rem color-mix(in srgb, var(--node-color) 15%, transparent);
}

.eco-node-ring {
  position: absolute;
  inset: -7%;
  border: 1px dashed color-mix(in srgb, var(--node-color) 42%, transparent);
  border-radius: 50%;
  animation: ecoRingSpin 18s linear infinite;
  animation-delay: var(--delay);
  pointer-events: none;
}

.eco-node-label {
  color: var(--node-color);
  font:
    700 clamp(0.58rem, 1.45vw, 0.92rem) / 1.15 'Inter Tight',
    sans-serif;
  letter-spacing: -0.01em;
  text-wrap: balance;
}

.eco-node-icon {
  width: clamp(1.4rem, 3.6vw, 2.35rem);
  height: clamp(1.4rem, 3.6vw, 2.35rem);
  fill: none;
  stroke: var(--node-color);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: ecoIconBeat 3.6s ease-in-out infinite;
  animation-delay: var(--delay);
}

@media (prefers-reduced-motion: reduce) {
  .eco-orbit-cw,
  .eco-orbit-ccw,
  .eco-loop,
  .eco-ripple,
  .eco-pulse,
  .eco-travel,
  .eco-rotor,
  .eco-rotor-svg,
  .eco-node,
  .eco-node-face,
  .eco-node-ring,
  .eco-node-icon,
  .eco-hub,
  .eco-hub-mark {
    animation: none;
  }
  .eco-ripple,
  .eco-travel {
    display: none;
  }
  .eco-pulse {
    opacity: 0.4;
    stroke-dasharray: none;
  }
  .eco-rail {
    opacity: 0.3;
  }
  .eco-node-face {
    box-shadow: 0 14px 30px -20px rgba(11, 42, 30, 0.55);
    background-position: 50% 50%;
  }
}
</style>

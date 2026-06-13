<template>
  <section aria-label="Frameworks we navigate" class="text-sand py-6 overflow-hidden" style="background:linear-gradient(100deg,#0B1238,#22308C 70%,#101C4A)">
    <div style="-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)">
      <div class="marquee font-display font-semibold text-[clamp(1.1rem,2.4vw,1.9rem)] tracking-tight" style="display:flex;width:max-content;animation:marq 38s linear infinite">
        <span style="display:inline-flex;align-items:center;gap:1.6rem;padding:0 1.6rem">
          CBAM<i class="md"></i>BRSR<i class="md"></i>GRI<i class="md"></i>TCFD<i class="md"></i>EU&nbsp;CSRD<i class="md"></i>SBTi<i class="md"></i>EPR<i class="md"></i>SWM<i class="md"></i>Scope&nbsp;3<i class="md"></i>Net&nbsp;Zero<i class="md"></i>
        </span>
        <span aria-hidden="true" style="display:inline-flex;align-items:center;gap:1.6rem;padding:0 1.6rem">
          CBAM<i class="md"></i>BRSR<i class="md"></i>GRI<i class="md"></i>TCFD<i class="md"></i>EU&nbsp;CSRD<i class="md"></i>SBTi<i class="md"></i>EPR<i class="md"></i>SWM<i class="md"></i>Scope&nbsp;3<i class="md"></i>Net&nbsp;Zero<i class="md"></i>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Marquee section with infinite scroll animation
</script>

<style scoped>
@keyframes marq {
  to { transform: translateX(-50%); }
}

.marquee:hover {
  animation-play-state: paused;
}

.md {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--aurora);
  display: inline-block;
}
</style>
<template>
  <section id="team" class="relative py-20 md:py-28 overflow-hidden">
    <div class="blob" style="width:520px;height:520px;background:radial-gradient(circle,rgba(91,227,139,.12),transparent 70%);top:10%;right:-160px"></div>
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <div class="max-w-3xl mb-10">
        <span class="eyebrow mb-6" data-reveal>Meet Our Team</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]" data-reveal>The people behind your <span class="text-grad">climate transition.</span></h2>
        <p class="font-serif-q text-charcoal/75 text-xl leading-relaxed mb-5" data-reveal>Your engagement is led by specialists who have lived inside the problems they now solve — veterans of regulatory bodies, financial institutions, climate research, and technology.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal>
        <article v-for="member in members" :key="member.name" class="portrait group" :style="`background:${member.background}`">
          <img
            v-if="member.photo && !member.photoError"
            :src="member.photo"
            :alt="member.name"
            class="portrait-photo"
            @error="member.photoError = true"
          />
          <div class="portrait-mono" :class="{ 'has-photo': member.photo && !member.photoError }" aria-hidden="true">
            <span class="font-serif-q">{{ member.initials }}</span>
          </div>
          <div class="portrait-meta">
            <h3 class="font-display font-bold text-xl text-sand leading-tight">{{ member.name }}</h3>
            <p class="text-sm font-display font-medium mb-3" :style="`color:${member.roleColor}`">{{ member.role }}</p>
            <a :href="member.linkedIn" class="portrait-link" :aria-label="`LinkedIn — ${member.name}`">
              <svg class="icon" style="width:1em;height:1em"><use href="#i-linkedin"/></svg> LinkedIn
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const members = reactive([
  { name: 'Arjun Mehta',       role: 'Founder & CEO',              initials: 'AM', photo: '/images/team/team-1.jpg', photoError: false, linkedIn: '#', background: 'linear-gradient(165deg,#0F3A27,#1D6B43)', roleColor: '#5BE38B' },
  { name: 'Priya Nair',        role: 'Head of ESG Strategy',       initials: 'PN', photo: '/images/team/team-2.jpg', photoError: false, linkedIn: '#', background: 'linear-gradient(165deg,#0E2348,#3447B8)', roleColor: '#A9BCF5' },
  { name: 'Ravi Krishnaswamy', role: 'Chief Technology Officer',   initials: 'RK', photo: '/images/team/team-3.jpg', photoError: false, linkedIn: '#', background: 'linear-gradient(165deg,#2A1150,#55309A)', roleColor: '#CBB7F2' },
  { name: 'Kavya Reddy',       role: 'Head of Capability Building',initials: 'KR', photo: '/images/team/team-4.jpg', photoError: false, linkedIn: '#', background: 'linear-gradient(165deg,#103A28,#117C50)', roleColor: '#5BE38B' },
])
</script>

<style scoped>
.portrait-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0.72;
  transition: opacity 0.35s ease;
}
.portrait:hover .portrait-photo { opacity: 0.88; }

.portrait-mono.has-photo {
  opacity: 0;
  pointer-events: none;
}
</style>

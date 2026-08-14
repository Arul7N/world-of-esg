<template>
  <div class="career-page">
    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center overflow-hidden pt-28 pb-16 bg-gradient-to-b from-sand to-mist">
      <div class="blob" style="width: 520px; height: 520px; background: radial-gradient(circle, #ddf5e5, transparent 70%); top: 10%; right: 5%;"></div>
      
      <div class="relative max-w-[1380px] mx-auto w-full px-6 md:px-10 z-10 career-hero-grid">
        <div class="max-w-2xl">
          <span class="eyebrow mb-7">Join Our Team</span>
          <h1 class="font-display font-extrabold text-charcoal leading-[1.04] text-[clamp(2.5rem,4.9vw,4rem)] mb-6">
            Shape Climate Transformation
          </h1>
          <p class="font-serif-q text-charcoal/75 text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.35] max-w-xl mb-5">
            Help organizations navigate the ESG landscape with <span class="text-grad">integrated strategy, technology, and execution.</span>
          </p>
          <p class="text-graphite text-[clamp(1.0rem,1.4vw,1.25rem)] leading-relaxed max-w-xl">
            We're building a team of passionate professionals committed to driving sustainable growth across industries.
          </p>
        </div>

        <aside class="career-path-card" aria-label="Career path explorer">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="career-path-kicker">Find your path</p>
              <h2 class="font-display font-bold text-2xl text-charcoal mt-1">Where can you make an impact?</h2>
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
            >{{ path.name }}</button>
          </div>
          <div class="career-path-result" :style="{ '--path-color': selectedPath.color }">
            <svg class="icon career-path-icon" aria-hidden="true"><use :href="`#i-${selectedPath.icon}`" /></svg>
            <div>
              <p class="text-sm font-semibold" :style="{ color: selectedPath.color }">{{ selectedPath.role }}</p>
              <p class="text-graphite text-sm leading-relaxed mt-2">{{ selectedPath.description }}</p>
            </div>
          </div>
          <a href="#open-roles" class="career-path-link">Explore open roles <span>→</span></a>
        </aside>
      </div>
    </section>

    <!-- Job Listings Section -->
    <section id="open-roles" class="relative py-28 md:py-40 overflow-hidden">
      <div class="max-w-[1380px] mx-auto px-6 md:px-10">
        <div class="mb-16">
          <span class="eyebrow mb-6" data-reveal>Open Positions</span>
          <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03]" data-reveal>
            We're Hiring
          </h2>
        </div>

        <!-- Job Cards Grid -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div 
            v-for="job in jobs"
            :key="job.id"
            class="job-card rounded-2xl bg-white border border-stone p-8 hover:shadow-lg transition-shadow duration-300"
            data-reveal
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 class="font-display font-bold text-charcoal text-2xl mb-2">{{ job.title }}</h3>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 rounded-full text-sm font-medium" :style="{ backgroundColor: job.departmentColor + '20', color: job.departmentColor }">
                    {{ job.department }}
                  </span>
                  <span class="px-3 py-1 rounded-full text-sm font-medium bg-mint text-forest">
                    {{ job.type }}
                  </span>
                </div>
              </div>
            </div>

            <p class="text-graphite leading-relaxed mb-6">{{ job.description }}</p>

            <div class="mb-6">
              <h4 class="font-display font-semibold text-charcoal mb-3">Key Responsibilities:</h4>
              <ul class="space-y-2">
                <li v-for="(responsibility, idx) in job.responsibilities" :key="idx" class="flex gap-2 text-graphite">
                  <svg class="w-5 h-5 text-forest shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ responsibility }}
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h4 class="font-display font-semibold text-charcoal mb-3">Required Skills:</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in job.skills" :key="skill" class="px-3 py-1 rounded-full text-sm text-forest bg-mint">
                  {{ skill }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-stone">
              <span class="text-graphite text-sm">{{ job.location }}</span>
              <button
                @click="openBooking(job.title)"
                class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-white font-display font-medium hover:bg-emerald transition-colors"
              >
                Apply Now
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="rounded-2xl bg-gradient-to-r from-forest/10 to-emerald/10 border border-stone p-12 text-center">
          <h3 class="font-display font-bold text-charcoal text-2xl mb-4">Don't See a Perfect Match?</h3>
          <p class="text-graphite text-lg max-w-2xl mx-auto mb-6">
            We're always interested in meeting talented professionals. Send us your CV and let's explore opportunities together.
          </p>
          <a href="mailto:careers@worldofesg.in" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest text-white font-display font-medium hover:bg-emerald transition-colors">
            Send Your CV
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="relative py-28 md:py-40 overflow-hidden bg-sand">
      <div class="blob" style="width: 520px; height: 520px; background: radial-gradient(circle, #ddf5e5, transparent 70%); bottom: -10%; left: -120px;"></div>
      
      <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
        <div class="text-center mb-16">
          <span class="eyebrow mb-6" data-reveal>Why Join Us</span>
          <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03] max-w-3xl mx-auto" data-reveal>
            Be Part of Climate Transformation
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.id" class="text-center" data-reveal>
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" :style="{ backgroundColor: benefit.color + '20' }">
              <svg class="icon" style="width:1.85rem;height:1.85rem" :style="{ color: benefit.color }" aria-hidden="true">
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
    <section class="relative py-20 md:py-28 overflow-hidden text-sand" style="background: linear-gradient(178deg, #2a0f52 0%, #33177a 30%, #22308c 62%, #16325e 100%)">
      <div class="blob" style="width: 640px; height: 640px; background: radial-gradient(circle, rgba(116, 48, 164, 0.4) 0%, rgba(58, 77, 184, 0.22) 55%, transparent 75%); top: -180px; left: 50%; transform: translateX(-50%);"></div>
      
      <div class="max-w-[1000px] mx-auto px-6 md:px-10 text-center relative z-10">
        <h2 class="font-display font-extrabold text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] mb-8" data-reveal>
          Ready to Make an Impact?
        </h2>
        <p class="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-lavender" data-reveal>
          Join World of ESG and help organizations transition toward resilient, compliant, and low-carbon business models.
        </p>
        <a href="mailto:careers@worldofesg.in" class="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-aurora text-charcoal font-display font-semibold hover:-translate-y-1 transition-transform duration-300">
          Explore Careers
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBookingStore } from '@/stores/booking'
import FooterSection from '@/sections/FooterSection.vue'

const bookingStore = useBookingStore()

const careerPaths = [
  { name: 'Strategy', role: 'Turn ambition into a roadmap', description: 'Guide leaders through ESG priorities, climate risk, reporting, and credible net-zero plans.', icon: 'target', color: '#1D6B43' },
  { name: 'Technology', role: 'Build intelligence from data', description: 'Create the platform tools that make carbon data, compliance, and reporting simpler to act on.', icon: 'cpu', color: '#3A4DB8' },
  { name: 'Delivery', role: 'Turn plans into progress', description: 'Lead practical decarbonization work that moves projects from baseline to verified outcomes.', icon: 'zap', color: '#117C50' },
  { name: 'Learning', role: 'Build capability that lasts', description: 'Equip organizations and future leaders with the ESG knowledge to sustain change.', icon: 'users', color: '#7430A4' },
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

const jobs = ref([
  {
    id: 1,
    title: 'ESG Strategy Consultant',
    department: 'Advisory',
    departmentColor: '#1D6B43',
    type: 'Full-time',
    location: 'Bangalore',
    description: 'Help organizations develop comprehensive ESG strategies aligned with regulatory frameworks and science-based targets.',
    responsibilities: [
      'Develop ESG roadmaps for enterprise clients across multiple industries',
      'Conduct climate risk assessments and materiality studies',
      'Support clients in achieving SBTi and net-zero commitments',
      'Lead stakeholder engagement workshops'
    ],
    skills: ['ESG Strategy', 'Climate Science', 'BRSR', 'GRI', 'Communication']
  },
  {
    id: 2,
    title: 'Carbon Intelligence Platform Developer',
    department: 'Technology',
    departmentColor: '#0FA37F',
    type: 'Full-time',
    location: 'Bangalore',
    description: 'Build scalable solutions for carbon accounting, reporting, and compliance on our SaaS platform.',
    responsibilities: [
      'Develop and maintain platform features for carbon data management',
      'Implement automated reporting engines for ESG compliance',
      'Integrate third-party data sources and APIs',
      'Optimize platform performance and scalability'
    ],
    skills: ['Full-stack Development', 'React/Vue', 'Node.js', 'Python', 'Cloud Platforms']
  },
  {
    id: 3,
    title: 'ESG Training & Capability Lead',
    department: 'Capability Building',
    departmentColor: '#7430A4',
    type: 'Full-time',
    location: 'Bangalore',
    description: 'Design and deliver world-class ESG training programs for corporates and academic institutions.',
    responsibilities: [
      'Develop ESG certification and bootcamp curricula',
      'Deliver training workshops for corporate teams',
      'Partner with universities on ESG curriculum integration',
      'Create training content and learning materials'
    ],
    skills: ['Instructional Design', 'ESG Knowledge', 'Teaching', 'Curriculum Development', 'Content Writing']
  },
  {
    id: 4,
    title: 'Decarbonization Implementation Manager',
    department: 'Execution',
    departmentColor: '#117C50',
    type: 'Full-time',
    location: 'Bangalore',
    description: 'Lead implementation of decarbonization projects from strategy to measurable results on the ground.',
    responsibilities: [
      'Project management for renewable energy and efficiency initiatives',
      'Collaborate with clients on technology deployment',
      'Monitor and verify carbon reduction outcomes',
      'Build implementation roadmaps and timelines'
    ],
    skills: ['Project Management', 'Renewable Energy', 'Carbon Accounting', 'Implementation', 'Stakeholder Management']
  },
  {
    id: 5,
    title: 'ESG Research Analyst',
    department: 'Research',
    departmentColor: '#CBBE8A',
    type: 'Full-time',
    location: 'Bangalore',
    description: 'Conduct cutting-edge research on climate, sustainability, and ESG topics affecting global markets.',
    responsibilities: [
      'Research climate trends and policy developments',
      'Analyze sustainable finance and carbon market dynamics',
      'Write research reports and thought leadership pieces',
      'Support client advisory with market insights'
    ],
    skills: ['Research', 'Data Analysis', 'Climate Science', 'Writing', 'Policy Knowledge']
  },
  {
    id: 6,
    title: 'Environmental Law Associate',
    department: 'Legal',
    departmentColor: '#3A4DB8',
    type: 'Full-time',
    location: 'Bangalore',
    description: 'Provide legal expertise on environmental compliance, regulations, and ESG governance.',
    responsibilities: [
      'Provide environmental law advisory to clients',
      'Review ESG policies and governance frameworks',
      'Support regulatory compliance and reporting',
      'Develop legal frameworks for climate initiatives'
    ],
    skills: ['Environmental Law', 'Legal Research', 'Compliance', 'Writing', 'Regulatory Knowledge']
  }
])

const benefits = ref([
  {
    id: 1,
    icon: '🌍',
    title: 'Global Impact',
    color: '#1D6B43',
    description: 'Work on projects that directly contribute to climate action and sustainable business transformation across industries.'
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Growth Opportunities',
    color: '#2FA66A',
    description: 'Join a fast-growing company with clear career progression and opportunities to lead cross-functional teams.'
  },
  {
    id: 3,
    icon: '🎓',
    title: 'Continuous Learning',
    color: '#5BE38B',
    description: 'Access to certifications, training programs, and expert mentorship to deepen your ESG expertise.'
  },
  {
    id: 4,
    icon: '💼',
    title: 'Flexible Work',
    color: '#7430A4',
    description: 'Hybrid work culture with remote flexibility and focus on work-life balance.'
  },
  {
    id: 5,
    icon: '💡',
    title: 'Innovation Culture',
    color: '#CBBE8A',
    description: 'Collaborate with innovative thinkers and leverage technology to solve real-world sustainability challenges.'
  },
  {
    id: 6,
    icon: '👥',
    title: 'Diverse Team',
    color: '#3A4DB8',
    description: 'Work alongside passionate professionals from diverse backgrounds united by a common mission.'
  }
])

const openBooking = (jobTitle: string) => {
  bookingStore.openBooking()
  // You could pre-fill the topic with the job title here if needed
}
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

.job-card {
  transition: all 0.3s ease;
}

.job-card:hover {
  transform: translateY(-2px);
}

.text-grad {
  background: linear-gradient(100deg, var(--forest), var(--emerald) 45%, var(--indigo) 88%, var(--violet));
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
  grid-template-columns: minmax(0, 1.08fr) minmax(20rem, .72fr);
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

.career-path-kicker { color: var(--forest); font: 700 .72rem 'Inter Tight', sans-serif; letter-spacing: .16em; text-transform: uppercase; }
.career-path-mark { display: grid; place-items: center; width: 2.35rem; height: 2.35rem; border-radius: 50%; color: var(--forest); background: var(--mint); font-size: 1.3rem; }
.career-path-tabs { display: grid; grid-template-columns: repeat(2, 1fr); gap: .45rem; margin-top: 1.45rem; }
.career-path-tab { padding: .65rem .5rem; border: 1px solid var(--stone); border-radius: .65rem; color: var(--graphite); background: #fff; font: 600 .77rem 'Inter Tight', sans-serif; cursor: pointer; transition: color .2s ease, background .2s ease, border-color .2s ease, transform .2s ease; }
.career-path-tab:hover { transform: translateY(-1px); border-color: var(--path-color); }
.career-path-tab.active { border-color: var(--path-color); color: #fff; background: var(--path-color); }
.career-path-result { display: grid; grid-template-columns: 2.5rem 1fr; gap: .85rem; min-height: 8.7rem; margin-top: .85rem; padding: 1rem; border-radius: 1rem; background: linear-gradient(135deg, color-mix(in srgb, var(--path-color) 10%, white), rgba(255,255,255,.86)); }
.career-path-icon { width: 2.25rem; height: 2.25rem; margin-top: .1rem; color: var(--path-color); }
.career-path-link { display: inline-flex; align-items: center; gap: .55rem; margin-top: 1.25rem; color: var(--forest); font: 700 .85rem 'Inter Tight', sans-serif; text-decoration: none; }.career-path-link span { font-size: 1.2rem; transition: transform .2s ease; }.career-path-link:hover span { transform: translateX(4px); }
@media (max-width: 1023px) { .career-hero-grid { grid-template-columns: 1fr; }.career-path-card { max-width: 36rem; } }
</style>

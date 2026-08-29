import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import CareerPage from '@/pages/CareerPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import CookiePolicy from '@/pages/CookiePolicy.vue'
import TermsConditions from '@/pages/TermsConditions.vue'
import { scrollToTarget } from '@/composables/useSmoothScroll'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'World of ESG — Climate Intelligence for Sustainable Growth',
        description:
          'A next-generation ESG & sustainability company — strategy, technology, talent, and execution in one integrated ecosystem.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: 'About Us — World of ESG',
        description:
          'Meet World of ESG: the integrated climate intelligence ecosystem connecting strategy, technology, talent, and execution.',
      },
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage,
      meta: {
        title: 'Our Team — World of ESG',
        description:
          'Meet the World of ESG team: ESG strategy, climate science, technology, research and learning design.',
      },
    },
    {
      path: '/career',
      name: 'career',
      component: CareerPage,
      meta: {
        title: 'Careers — World of ESG',
        description: 'Join our team and help drive climate transformation across industries.',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
      meta: {
        title: 'Privacy Policy — World of ESG',
        description: 'Privacy Policy for World of ESG',
      },
    },
    {
      path: '/cookie-policy',
      name: 'cookie-policy',
      component: CookiePolicy,
      meta: {
        title: 'Cookie Policy — World of ESG',
        description: 'Cookie Policy for World of ESG',
      },
    },
    {
      path: '/terms-conditions',
      name: 'terms-conditions',
      component: TermsConditions,
      meta: {
        title: 'Terms & Conditions — World of ESG',
        description: 'Terms & Conditions for World of ESG',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      // The target section mounts with the new page, so wait a frame before
      // measuring, and scroll through Lenis rather than natively — mixing the
      // two leaves ScrollTrigger reading stale positions.
      return new Promise<false | { el: string; behavior: 'smooth' }>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (scrollToTarget(to.hash)) resolve(false)
            else resolve({ el: to.hash, behavior: 'smooth' })
          })
        })
      })
    }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || 'World of ESG'

  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description as string)
  }
})

export default router

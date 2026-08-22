<template>
  <header
    class="nav-shell sticky top-0 inset-x-0 z-[100] px-6 md:px-10 py-4 md:py-5"
    :class="{ scrolled: navigationStore.isScrolled }"
  >
    <nav class="max-w-[1380px] mx-auto flex items-center justify-between" aria-label="Primary">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3" aria-label="World of ESG home">
        <img
          src="/images/logo/logo.png"
          style="width: 2.5rem; height: 2.5rem"
          class="object-contain"
          alt="World of ESG"
        />
        <span class="font-display font-bold text-[19px] leading-none tracking-tight text-charcoal">
          World&nbsp;of&nbsp;ESG
        </span>
      </router-link>

      <!-- Desktop Navigation -->
      <ul class="hidden lg:flex items-center gap-9 text-[15px] font-medium text-graphite">
        <li v-for="item in NAV_ITEMS" :key="item.name">
          <router-link
            v-if="!item.href.startsWith('#')"
            :to="item.href"
            class="nav-link"
            :class="{ active: route.path === item.href }"
          >
            {{ item.name }}
          </router-link>
          <a
            v-else
            :href="item.href"
            class="nav-link"
            :class="{ active: navigationStore.activeSection === item.href.slice(1) }"
            @click="handleNavClick"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <BaseButton
          variant="primary"
          size="sm"
          class="hidden md:inline-flex"
          icon-right="arrow"
          @click="bookingStore.openBooking()"
        >
          Book a Call
        </BaseButton>

        <!-- Mobile Menu Toggle -->
        <button
          id="menuBtn"
          class="lg:hidden relative w-11 h-11 grid place-items-center"
          :aria-label="navigationStore.isMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="navigationStore.isMenuOpen"
          @click="navigationStore.toggleMenu()"
        >
          <span
            class="block w-6 h-[2px] bg-charcoal transition-all duration-300"
            :class="{ 'transform translate-y-1 rotate-45': navigationStore.isMenuOpen }"
          />
          <span
            class="block w-6 h-[2px] bg-charcoal mt-[6px] transition-all duration-300"
            :class="{ 'transform -translate-y-1 -rotate-45': navigationStore.isMenuOpen }"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay — Teleported to body to escape header's backdrop-filter stacking context (iOS fix) -->
    <Teleport to="body">
      <div
        class="menu-overlay lg:hidden"
        :class="{ open: navigationStore.isMenuOpen }"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div class="h-full flex flex-col justify-center px-8 gap-1">
          <template v-for="(item, index) in NAV_ITEMS.slice(1)" :key="item.name">
            <router-link
              v-if="!item.href.startsWith('#')"
              :to="item.href"
              class="menu-item font-display text-4xl font-bold py-3 text-charcoal"
              :style="{ 'transition-delay': `${(index + 1) * 0.08}s` }"
              @click="navigationStore.closeMenu()"
            >
              {{ item.name }}
            </router-link>
            <a
              v-else
              :href="item.href"
              class="menu-item font-display text-4xl font-bold py-3 text-charcoal"
              :style="{ 'transition-delay': `${(index + 1) * 0.08}s` }"
              @click="handleMobileNavClick"
            >
              {{ item.name }}
            </a>
          </template>

          <BaseButton
            variant="primary"
            class="menu-item w-max mt-6"
            :style="{ 'transition-delay': '0.50s' }"
            @click="handleBookingClick"
          >
            Book a Call
          </BaseButton>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNavigationStore } from '@/stores/navigation'
import { useBookingStore } from '@/stores/booking'
import { NAV_ITEMS } from '@/constants'
import { scrollToTarget } from '@/composables/useSmoothScroll'
import BaseButton from './BaseButton.vue'

const navigationStore = useNavigationStore()
const bookingStore = useBookingStore()
const router = useRouter()
const route = useRoute()

const handleScroll = () => {
  navigationStore.setScrolled(window.scrollY > 40)
}

// Scroll-spy. `setActiveSection` existed in the store but nothing ever called it,
// so activeSection stayed 'home' forever and the nav's active underline never
// moved off Home. Rebuilt on route change because the sections only exist on /.
let spyTriggers: ScrollTrigger[] = []

const killScrollSpy = () => {
  spyTriggers.forEach((t) => t.kill())
  spyTriggers = []
}

const initScrollSpy = () => {
  killScrollSpy()

  NAV_ITEMS.filter((item) => item.href.startsWith('#')).forEach((item) => {
    const id = item.href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    spyTriggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: (self) => {
          if (self.isActive) navigationStore.setActiveSection(id)
        },
      })
    )
  })
}

const handleNavClick = async (event: Event) => {
  const target = (event.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (!target?.startsWith('#')) return

  event.preventDefault()

  // Section lives on another page (e.g. clicking Services from /about):
  // route home first, then let the router's scrollBehavior handle the hash.
  if (!scrollToTarget(target)) {
    await router.push({ path: '/', hash: target })
    return
  }

  try {
    history.pushState(null, '', target)
  } catch (error) {
    console.warn('History pushState failed:', error)
  }
}

const handleMobileNavClick = (event: Event) => {
  handleNavClick(event)
  navigationStore.closeMenu()
}

const handleBookingClick = () => {
  navigationStore.closeMenu()
  bookingStore.openBooking()
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    navigationStore.closeMenu()
  }
}

watch(
  () => route.path,
  async () => {
    await nextTick()
    requestAnimationFrame(initScrollSpy)
  }
)

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleKeyDown)
  requestAnimationFrame(initScrollSpy)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeyDown)
  killScrollSpy()
})
</script>

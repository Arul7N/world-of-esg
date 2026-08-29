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
        <li
          v-for="item in NAV_ITEMS"
          :key="item.name"
          class="relative"
          @mouseenter="item.children && (openMenu = item.name)"
          @mouseleave="item.children && (openMenu = null)"
        >
          <!-- Dropdown parent -->
          <template v-if="item.children">
            <button
              type="button"
              class="nav-link nav-parent"
              :class="{ active: isChildActive(item) }"
              :aria-expanded="openMenu === item.name"
              aria-haspopup="true"
              @click="openMenu = openMenu === item.name ? null : item.name"
            >
              {{ item.name }}
              <svg
                class="nav-caret"
                :class="{ open: openMenu === item.name }"
                viewBox="0 0 12 12"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <ul v-show="openMenu === item.name" class="nav-dropdown">
              <li v-for="child in item.children" :key="child.name">
                <router-link
                  :to="child.href"
                  class="nav-dropdown-link"
                  :class="{ active: route.path === child.href }"
                  @click="openMenu = null"
                >
                  {{ child.name }}
                </router-link>
              </li>
            </ul>
          </template>

          <router-link
            v-else-if="!item.href.startsWith('#')"
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
          <!-- Dropdown children are flattened here; a hover menu has no touch equivalent. -->
          <template v-for="(item, index) in MOBILE_NAV_ITEMS" :key="item.name">
            <router-link
              v-if="!item.href.startsWith('#')"
              :to="item.href"
              class="menu-item font-display font-bold py-3 text-charcoal"
              :class="item.nested ? 'text-2xl pl-6 text-graphite' : 'text-4xl'"
              :style="{ 'transition-delay': `${(index + 1) * 0.06}s` }"
              @click="navigationStore.closeMenu()"
            >
              {{ item.name }}
            </router-link>
            <a
              v-else
              :href="item.href"
              class="menu-item font-display text-4xl font-bold py-3 text-charcoal"
              :style="{ 'transition-delay': `${(index + 1) * 0.06}s` }"
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
import { computed, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNavigationStore } from '@/stores/navigation'
import { useBookingStore } from '@/stores/booking'
import { NAV_ITEMS } from '@/constants'
import type { NavItem } from '@/types'
import { scrollToTarget } from '@/composables/useSmoothScroll'
import BaseButton from './BaseButton.vue'

const navigationStore = useNavigationStore()
const bookingStore = useBookingStore()
const router = useRouter()
const route = useRoute()

/** Name of the nav item whose dropdown is open, or null. */
const openMenu = ref<string | null>(null)

/** Highlight the parent when the current route is one of its children. */
const isChildActive = (item: NavItem) => !!item.children?.some((child) => child.href === route.path)

/**
 * Mobile has no hover, so dropdown children are flattened into the list and
 * indented rather than hidden behind a second interaction.
 */
const MOBILE_NAV_ITEMS = computed(() =>
  NAV_ITEMS.flatMap((item) =>
    item.children
      ? item.children.map((child) => ({ ...child, nested: true }))
      : [{ ...item, nested: false }]
  )
)

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
    openMenu.value = null
  }
}

watch(
  () => route.path,
  async () => {
    openMenu.value = null
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

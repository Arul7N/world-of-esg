import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const isMenuOpen = ref(false)
  const isScrolled = ref(false)
  const activeSection = ref('home')
  const isChatOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }

  const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }

  const setScrolled = (scrolled: boolean) => {
    isScrolled.value = scrolled
  }

  const setActiveSection = (section: string) => {
    activeSection.value = section
  }

  const toggleChat = () => {
    isChatOpen.value = !isChatOpen.value
  }

  const closeChat = () => {
    isChatOpen.value = false
  }

  return {
    isMenuOpen,
    isScrolled,
    activeSection,
    isChatOpen,
    toggleMenu,
    closeMenu,
    setScrolled,
    setActiveSection,
    toggleChat,
    closeChat
  }
})
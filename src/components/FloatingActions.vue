<template>
  <div class="fab-stack">
    <button
      type="button"
      class="fab fab-chat"
      :aria-label="navStore.isChatOpen ? 'Close chat' : 'Open chat'"
      :aria-expanded="navStore.isChatOpen"
      @click="navStore.toggleChat()"
    >
      <svg v-if="!navStore.isChatOpen" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" style="width:26px;height:26px">
        <path d="M27 15.5c0 5.5-4.9 10-11 10-1.4 0-2.8-.2-4-.7L5 27l2.3-5.4C6 19.8 5 17.8 5 15.5 5 10 9.9 5.5 16 5.5s11 4.5 11 10z" />
        <circle cx="11.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="16" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="20.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" style="width:20px;height:20px">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

    <a class="fab fab-wa" href="https://wa.me/918123019616" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" style="width:28px;height:28px" fill="currentColor">
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.4L4 29l7.9-2c1.8 1 3.9 1.5 6 1.5 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.6c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4 1 1.1-3.8-.3-.4c-1.1-1.6-1.7-3.6-1.7-5.6 0-5.4 4.8-9.9 10.6-9.9s10.6 4.4 10.6 9.9-4.8 10.4-10.6 10.4zm5.8-7.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
const navStore = useNavigationStore()
</script>

<style scoped>
.fab-stack {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 120;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fab {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  border: 0;
  cursor: pointer;
  box-shadow: 0 16px 34px -14px rgba(8, 14, 30, 0.55);
  transition: transform 0.25s, box-shadow 0.25s;
  text-decoration: none;
}
.fab:hover { transform: translateY(-4px); }
.fab-wa { background: #23B55C; }
.fab-chat { background: linear-gradient(135deg, #3A4DB8, #7430A4); }
</style>

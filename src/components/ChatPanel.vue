<template>
  <Teleport to="body">
    <div
      class="chat-panel"
      :class="{ open: navStore.isChatOpen }"
      role="dialog"
      aria-label="ESG Assistant"
      :aria-hidden="!navStore.isChatOpen"
    >
      <div class="chat-head">
        <svg viewBox="0 0 128 120" class="w-7 h-7 shrink-0" aria-hidden="true"><use href="#i-logo" /></svg>
        <div class="flex-1 min-w-0">
          <strong class="font-display block text-[14.5px]">ESG Assistant</strong>
          <span class="text-[11px] opacity-75">Typically replies in minutes</span>
        </div>
        <button type="button" class="chat-x" aria-label="Close chat" @click="navStore.closeChat()">&#10005;</button>
      </div>

      <div class="chat-body" ref="bodyEl">
        <div class="chat-msg">
          Hi! 👋 I'm the World of ESG assistant. Ask me about CBAM, BRSR, our platform — or book a call.
        </div>
        <div v-for="(msg, i) in messages" :key="i" class="chat-msg" :class="msg.from === 'user' ? 'chat-msg-user' : ''">
          {{ msg.text }}
        </div>
        <div class="chat-quick" v-if="messages.length === 0">
          <button type="button" class="bchip" @click="bookingStore.openBooking(); navStore.closeChat()">Book a call</button>
          <a class="bchip" href="https://wa.me/918123019616" target="_blank" rel="noopener">WhatsApp us</a>
          <a class="bchip" href="mailto:hello@worldofesg.in">Email us</a>
        </div>
      </div>

      <div class="chat-input">
        <input
          v-model="inputText"
          type="text"
          placeholder="Type a message…"
          aria-label="Message"
          @keydown.enter.prevent="sendMessage"
        />
        <button type="button" class="chat-send" aria-label="Send" @click="sendMessage">
          <svg class="icon" style="width:1.1em;height:1.1em"><use href="#i-arrow" /></svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import { useBookingStore } from '@/stores/booking'

const navStore = useNavigationStore()
const bookingStore = useBookingStore()

interface Message { from: 'user' | 'bot'; text: string }

const inputText = ref('')
const messages = ref<Message[]>([])
const bodyEl = ref<HTMLElement | null>(null)

const autoReplies: Record<string, string> = {
  cbam: 'CBAM (Carbon Border Adjustment Mechanism) applies to carbon-intensive imports into the EU. We help you calculate and report embedded emissions. Want to book a call to discuss?',
  brsr: 'BRSR (Business Responsibility and Sustainability Reporting) is mandatory for India\'s top 1000 listed companies. Our platform automates the disclosure process.',
  platform: 'Our ESG platform covers emissions tracking, framework compliance, reporting automation, and more. Request a demo at platform.worldofesg.in/demo',
  csrd: 'CSRD (Corporate Sustainability Reporting Directive) mandates detailed sustainability disclosures for large EU companies. We provide gap analysis and reporting templates.',
  net: 'We help companies build science-based net-zero pathways, from baselining to decarbonization roadmaps. Shall I connect you with a specialist?',
  hello: 'Hello! How can I help with your ESG journey today?',
  hi: 'Hi there! Ask me about CBAM, BRSR, CSRD, our platform, or book a call with an ESG specialist.',
}

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text) return
  inputText.value = ''
  messages.value.push({ from: 'user', text })

  await nextTick()
  if (bodyEl.value) bodyEl.value.scrollTop = bodyEl.value.scrollHeight

  // Simple keyword reply
  const lower = text.toLowerCase()
  const key = Object.keys(autoReplies).find(k => lower.includes(k))
  const reply = key ? autoReplies[key] : 'Thanks for your message! Our team will get back to you shortly. You can also email us at hello@worldofesg.in or book a call above.'

  setTimeout(async () => {
    messages.value.push({ from: 'bot', text: reply })
    await nextTick()
    if (bodyEl.value) bodyEl.value.scrollTop = bodyEl.value.scrollHeight
  }, 650)
}
</script>

<style scoped>
.chat-panel {
  position: fixed;
  right: 18px;
  bottom: 86px;
  width: min(330px, calc(100vw - 36px));
  max-height: calc(100dvh - 120px);
  z-index: 121;
  background: #fff;
  border: 1px solid var(--stone);
  border-radius: 18px;
  box-shadow: 0 34px 70px -28px rgba(8, 14, 30, 0.5);
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.28s, transform 0.28s, visibility 0s 0.28s;
}
.chat-panel.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: opacity 0.28s, transform 0.28s;
}
.chat-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 14px;
  background: linear-gradient(135deg, #10304A, #22308C);
  color: var(--sand);
  border-radius: 18px 18px 0 0;
  flex-shrink: 0;
}
.chat-x {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  color: var(--sand);
  font-size: 11px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s;
}
.chat-x:hover { background: rgba(255,255,255,.22); }
.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--stone) transparent;
}
.chat-msg {
  background: var(--mist);
  border-radius: 14px 14px 14px 4px;
  padding: 11px 14px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--charcoal);
  max-width: 92%;
}
.chat-msg-user {
  background: linear-gradient(135deg, #1D6B43, #2FA66A);
  color: #fff;
  border-radius: 14px 14px 4px 14px;
  align-self: flex-end;
}
.chat-quick {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.bchip {
  padding: 8px 14px;
  border-radius: 12px;
  border: 1.5px solid var(--stone);
  background: #fff;
  font: 600 12px 'Inter Tight', sans-serif;
  color: var(--graphite);
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  display: inline-block;
}
.bchip:hover { border-color: var(--forest); color: var(--forest); }
.chat-input {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--stone);
  flex-shrink: 0;
}
.chat-input input {
  flex: 1;
  border: 1px solid var(--stone);
  border-radius: 12px;
  padding: 10px 14px;
  font: 500 14px Inter, sans-serif;
  color: var(--charcoal);
  outline: none;
  background: var(--mist);
  transition: border-color 0.2s;
}
.chat-input input:focus { border-color: var(--forest); background: #fff; }
.chat-send {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1D6B43, #2FA66A);
  border: 0;
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.chat-send:hover { transform: scale(1.08); }
.icon {
  width: 1.5em;
  height: 1.5em;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
  display: inline-block;
  vertical-align: middle;
}
</style>

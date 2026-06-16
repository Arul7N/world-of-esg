<template>
  <Teleport to="body">
    <div 
      v-if="bookingStore.isOpen"
      class="book-overlay"
      :class="{ 'open': bookingStore.isOpen }"
      role="dialog" 
      aria-modal="true" 
      aria-label="Book a call"
      @click.self="bookingStore.closeBooking"
    >
      <div class="book-card">
        <div class="flex items-start justify-between gap-5 mb-8">
          <div class="flex items-center gap-3">
            <img src="/images/logo/logo.png" style="width:2.25rem;height:2.25rem" class="object-contain shrink-0" alt="" />
            <div>
              <h3 class="font-display font-bold text-2xl text-charcoal leading-tight">Book a Call</h3>
              <p class="text-graphite text-sm">30 minutes with an ESG specialist — pick a slot in the next 7 days.</p>
            </div>
          </div>
          <button 
            type="button" 
            class="book-x" 
            aria-label="Close"
            @click="bookingStore.closeBooking"
          >
            &#10005;
          </button>
        </div>

        <form v-if="!bookingStore.isSubmitted" @submit.prevent="handleSubmit">
          <div class="grid sm:grid-cols-2 gap-x-5 gap-y-5 mb-6">
            <label class="book-f">
              <span>Full name</span>
              <input 
                v-model="bookingStore.form.name"
                type="text" 
                name="name" 
                placeholder="Your name" 
                required 
              >
            </label>
            
            <label class="book-f">
              <span>Work email</span>
              <input 
                v-model="bookingStore.form.email"
                type="email" 
                name="email" 
                placeholder="you@company.com" 
                required 
              >
            </label>
            
            <label class="book-f">
              <span>Company</span>
              <input 
                v-model="bookingStore.form.company"
                type="text" 
                name="company" 
                placeholder="Company name" 
              >
            </label>
            
            <label class="book-f">
              <span>What do you need?</span>
              <select v-model="bookingStore.form.topic" name="topic">
                <option>ESG Strategy</option>
                <option>Carbon Platform demo</option>
                <option>CBAM &amp; Frameworks</option>
                <option>Skill Development</option>
                <option>Decarbonization</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <p class="book-lab">Pick a day <em>(next 7 days)</em></p>
          <div class="book-chips mb-4">
            <button
              v-for="date in bookingStore.availableDates"
              :key="date"
              type="button"
              class="bchip"
              :class="{ 'on': bookingStore.form.date === date }"
              @click="bookingStore.form.date = date"
            >
              {{ formatDate(date) }}
            </button>
          </div>

          <p class="book-lab">Pick a time <em>(IST)</em></p>
          <div class="book-chips mb-6">
            <button
              v-for="time in bookingStore.availableTimes"
              :key="time"
              type="button"
              class="bchip"
              :class="{ 'on': bookingStore.form.time === time }"
              @click="bookingStore.form.time = time"
            >
              {{ time }}
            </button>
          </div>

          <label class="book-f mb-7 block">
            <span>Anything we should know? <em>(optional)</em></span>
            <textarea 
              v-model="bookingStore.form.note"
              name="note" 
              rows="2" 
              placeholder="e.g. We export steel to the EU and need CBAM numbers"
            />
          </label>

          <div class="flex flex-wrap justify-end gap-4 pt-2 border-t border-stone">
            <BaseButton
              variant="ghost"
              @click="bookingStore.closeBooking"
            >
              Close
            </BaseButton>
            
            <BaseButton
              type="submit"
              :disabled="bookingStore.isLoading"
              icon-right="arrow"
            >
              {{ bookingStore.isLoading ? 'Submitting...' : 'Submit request' }}
            </BaseButton>
          </div>
        </form>

        <div v-else class="text-center py-10">
          <div class="w-14 h-14 rounded-full bg-mint grid place-items-center mx-auto mb-4 text-forest">
            <BaseIcon name="check" size="1.6em" />
          </div>
          <h3 class="font-display font-bold text-2xl text-charcoal mb-2">Request received</h3>
          <p class="text-graphite max-w-sm mx-auto">We'll confirm your slot by email shortly. You can close this window.</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useBookingStore } from '@/stores/booking'
import BaseIcon from './BaseIcon.vue'
import BaseButton from './BaseButton.vue'

const bookingStore = useBookingStore()

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  })
}

const handleSubmit = async () => {
  const success = await bookingStore.submitForm()
  if (!success) {
    alert('There was an error submitting your request. Please try again.')
  }
}
</script>

<style scoped>
.book-overlay {
  position: fixed;
  inset: 0;
  z-index: 140;
  display: grid;
  place-items: center;
  padding: 18px;
  background: rgba(9, 14, 28, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s 0.3s;
}

.book-overlay.open {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
}

.book-card {
  width: min(740px, 100%);
  max-height: 92vh;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background: var(--sand);
  border-radius: 1.8rem;
  border: 1px solid var(--stone);
  padding: clamp(1.6rem, 4vw, 2.8rem);
  box-shadow: 0 40px 90px -30px rgba(8, 14, 30, 0.5);
  transform: translateY(14px);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.book-overlay.open .book-card {
  transform: none;
}

.book-card::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.book-x {
  width: 38px;
  height: 38px;
  border-radius: 99px;
  border: 1px solid var(--stone);
  background: #fff;
  color: var(--graphite);
  font-size: 15px;
  cursor: pointer;
  transition: 0.25s;
  flex: 0 0 auto;
}

.book-x:hover {
  background: var(--mist);
  transform: rotate(90deg);
}

.book-f {
  display: block;
}

.book-f span {
  display: block;
  font: 600 12.5px 'Inter Tight', sans-serif;
  letter-spacing: 0.04em;
  color: var(--graphite);
  margin-bottom: 8px;
}

.book-f em {
  font-style: normal;
  opacity: 0.6;
  font-weight: 500;
}

.book-f input,
.book-f select,
.book-f textarea {
  width: 100%;
  background: #fff;
  border: 1px solid var(--stone);
  border-radius: 14px;
  padding: 14px 16px;
  font: 500 15px Inter, sans-serif;
  color: var(--charcoal);
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.book-f input:focus,
.book-f select:focus,
.book-f textarea:focus {
  border-color: var(--forest);
  box-shadow: 0 0 0 3px rgba(29, 107, 67, 0.14);
}

.book-lab {
  font: 600 12.5px 'Inter Tight', sans-serif;
  letter-spacing: 0.04em;
  color: var(--graphite);
  margin: 18px 0 10px;
}

.book-lab em {
  font-style: normal;
  opacity: 0.6;
  font-weight: 500;
}

.book-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
}

.bchip {
  padding: 11px 17px;
  border-radius: 13px;
  border: 1.5px solid var(--stone);
  background: #fff;
  font: 600 13px 'Inter Tight', sans-serif;
  color: var(--graphite);
  cursor: pointer;
  transition: 0.22s;
  text-align: center;
}

.bchip:hover {
  border-color: var(--forest);
}

.bchip.on {
  background: var(--forest);
  border-color: var(--forest);
  color: var(--sand);
}
</style>
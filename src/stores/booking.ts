import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { BookingForm } from '@/types'
import { CONTACT_EMAIL } from '@/constants'

export const useBookingStore = defineStore('booking', () => {
  const isOpen = ref(false)
  const isSubmitted = ref(false)
  const isLoading = ref(false)
  const errorMessage = ref('')
  /** True when the request was handed to the visitor's mail client instead of sent server-side. */
  const usedMailFallback = ref(false)

  const form = reactive<BookingForm>({
    name: '',
    email: '',
    company: '',
    topic: 'ESG Strategy',
    date: '',
    time: '14:00',
    note: '',
  })

  const availableDates = ref<string[]>([])
  const availableTimes = ['10:00', '11:30', '14:00', '15:30', '17:00']

  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0])
      }
    }

    availableDates.value = dates
    if (dates.length > 0 && !form.date) {
      form.date = dates[0]
    }
  }

  const openBooking = () => {
    isOpen.value = true
    generateAvailableDates()
  }

  const closeBooking = () => {
    isOpen.value = false
    isSubmitted.value = false
    errorMessage.value = ''
    usedMailFallback.value = false
  }

  /**
   * Builds a prefilled email to the company inbox. Used as a fallback so a
   * request is never lost if server-side delivery is unavailable.
   */
  const mailtoFallback = (): string => {
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || '—'}`,
      `Topic: ${form.topic || '—'}`,
      `Preferred date: ${form.date || '—'}`,
      `Preferred time: ${form.time || '—'}`,
      '',
      'Note:',
      form.note || '—',
    ]
    const subject = `Call request — ${form.name}${form.company ? ` (${form.company})` : ''}`
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join('\n')
    )}`
  }

  const submitForm = async (): Promise<boolean> => {
    isLoading.value = true
    errorMessage.value = ''
    usedMailFallback.value = false

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      })

      if (response.ok) {
        isSubmitted.value = true
        return true
      }

      const data = await response.json().catch(() => ({}) as Record<string, unknown>)

      // A genuine validation problem is the user's to correct — surface it.
      if (response.status === 400) {
        errorMessage.value = (data.error as string) || 'Please check the details and try again.'
        return false
      }

      // Anything else (endpoint missing, provider down, key not set) is our
      // problem, not the visitor's — hand them a prefilled email instead of
      // losing the enquiry.
      window.location.href = mailtoFallback()
      usedMailFallback.value = true
      isSubmitted.value = true
      return true
    } catch (error) {
      // Offline, blocked, or no /api route (e.g. plain static hosting).
      console.error('Booking submission failed, falling back to email:', error)
      window.location.href = mailtoFallback()
      usedMailFallback.value = true
      isSubmitted.value = true
      return true
    } finally {
      isLoading.value = false
    }
  }

  const resetForm = () => {
    Object.assign(form, {
      name: '',
      email: '',
      company: '',
      topic: 'ESG Strategy',
      date: availableDates.value[0] || '',
      time: '14:00',
      note: '',
    })
    isSubmitted.value = false
    errorMessage.value = ''
    usedMailFallback.value = false
  }

  return {
    isOpen,
    isSubmitted,
    isLoading,
    errorMessage,
    usedMailFallback,
    form,
    availableDates,
    availableTimes,
    openBooking,
    closeBooking,
    submitForm,
    resetForm,
  }
})

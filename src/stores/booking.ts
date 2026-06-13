import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { BookingForm } from '@/types'

export const useBookingStore = defineStore('booking', () => {
  const isOpen = ref(false)
  const isSubmitted = ref(false)
  const isLoading = ref(false)
  
  const form = reactive<BookingForm>({
    name: '',
    email: '',
    company: '',
    topic: 'ESG Strategy',
    date: '',
    time: '14:00',
    note: ''
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
  }

  const submitForm = async (): Promise<boolean> => {
    isLoading.value = true
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Here you would make the actual API call
      // const response = await fetch('/api/booking', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form)
      // })
      
      isSubmitted.value = true
      return true
    } catch (error) {
      console.error('Booking submission error:', error)
      return false
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
      note: ''
    })
    isSubmitted.value = false
  }

  return {
    isOpen,
    isSubmitted,
    isLoading,
    form,
    availableDates,
    availableTimes,
    openBooking,
    closeBooking,
    submitForm,
    resetForm
  }
})
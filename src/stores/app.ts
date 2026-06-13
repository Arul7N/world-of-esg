import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const preloaderDone = ref(false)

  function setPreloaderDone() {
    preloaderDone.value = true
  }

  return { preloaderDone, setPreloaderDone }
})

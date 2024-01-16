import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavbarStore = defineStore('navbar', () => {
  // Getter
  // Actions
  const MOBILE_WIDTH = 768
  const isMobile = ref(window.innerWidth < MOBILE_WIDTH)

  function updateMobileView() {
    isMobile.value = window.innerWidth < MOBILE_WIDTH
  }

  return { isMobile, updateMobileView }
})

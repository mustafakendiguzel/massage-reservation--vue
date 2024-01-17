import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    isMenuOpen: ref(false)
  }),

  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    closeMenu() {
      this.isMenuOpen = false
    }
  }
})

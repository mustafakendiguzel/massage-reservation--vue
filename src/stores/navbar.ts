import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavbarStore = defineStore('navbar', () => {
  const isMenuOpen = ref(false)

  // const toggleMenu = () => {
  //   isMenuOpen.value = !isMenuOpen.value
  //   console.log(isMenuOpen)
  // }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }
  return { isMenuOpen, toggleMenu, closeMenu }
})

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import NavbarItems from './NavbarItems.vue'
import { useNavbarStore } from '@/stores/navbar'
const navbarStore = useNavbarStore()
const { isMenuOpen } = storeToRefs(navbarStore)
</script>

<template>
  <div>
    <div class="flex justify-between items-center p-4 bg-navbar-blue color text-white rounded-lg">
      <div class="flex items-center gap-2">
        <img src="https://logodix.com/logo/1246419.png" width="50" height="50" alt="Vue.js Logo" />
        <router-link class="text-2xl font-bold cursor-pointer text-white" to="/"
          >Lotus Masaj</router-link
        >
      </div>
      <div class="web-navbar-items">
        <NavbarItems />
      </div>

      <div class="hamburger-icon cursor-pointer" @click="navbarStore.toggleMenu">
        <font-awesome-icon icon="fa-solid fa-bars" class="text-2xl" />
      </div>
    </div>
  </div>
  <div
    class="flex justify-end flex-col items-end bg-navbar-blue w-1/2 ml-auto pr-2 mobile-navbar-items"
    v-if="navbarStore.isMenuOpen"
  >
    <NavbarItems />
  </div>
</template>

<style scoped>
/* Stil dosyanıza özgü stilleri buraya ekleyin */

@media only screen and (max-width: 768px) {
  .web-navbar-items {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .mobile-navbar-items {
    display: none;
  }

  .hamburger-icon {
    display: none;
  }
}
</style>

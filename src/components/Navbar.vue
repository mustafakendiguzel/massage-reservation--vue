<script setup lang="ts">
import { storeToRefs } from 'pinia'
import NavbarItems from './NavbarItems.vue'
import { useNavbarStore } from '@/stores/navbar'
const navbarStore = useNavbarStore()
const { isMenuOpen } = storeToRefs(navbarStore)
</script>

<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar-brand">
        <img src="https://logodix.com/logo/1246419.png" width="50" height="50" alt="Vue.js Logo" />
        <span class="navbar-logo">Lotus Masaj</span>
      </div>
      <div class="web-navbar-items">
        <NavbarItems />
      </div>

      <div class="hamburger-icon" @click="navbarStore.toggleMenu">
        <font-awesome-icon icon="fa-solid fa-bars" style="font-size: x-large" />
      </div>
    </div>
  </div>
  <div class="mobile-navbar-items" v-if="navbarStore.isMenuOpen">
    <NavbarItems />
  </div>
</template>

<style scoped>
/* Stil dosyanıza özgü stilleri buraya ekleyin */
.navbar-container {
  position: relative;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #14213d;
  color: #fff;
  border-radius: 10px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.navbar-logo {
  font-size: 1.5em;
  font-weight: bold;
}

.hamburger-icon {
  cursor: pointer;
}

.mobile-navbar-items {
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: flex-end;
  background-color: #14213d;
  width: 50%;
  margin-left: auto;
  height: auto;
  padding-right: 10px;
}

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

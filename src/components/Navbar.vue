<script setup lang="ts">
import { ref, watch } from 'vue'
import NavbarItems from './NavbarItems.vue'
import { useNavbarStore } from '@/stores/navbar'
</script>

<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar-brand">
        <img src="https://logodix.com/logo/1246419.png" width="50" height="50" alt="Vue.js Logo" />
      </div>
      <div class="web-navbar-items">
        <NavbarItems />
      </div>

      <div class="hamburger-icon" @click="toggleMenu">
        <font-awesome-icon icon="fa-solid fa-bars" style="font-size: x-large" />
      </div>
    </div>
  </div>
  <div class="mobile-navbar-items" :class="{ 'is-active': isMenuOpen }">
    <NavbarItems />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

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

.navbar-logo {
  font-size: 1.5em;
  font-weight: bold;
}

.navbar-menu-container {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  display: none;
}

.navbar-menu {
  display: flex;
  flex-direction: column;
  background-color: #14213d;
}

.navbar-menu a {
  padding: 1em;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #555;
}

.hamburger-icon {
  cursor: pointer;
}

.navbar-menu a:hover {
  background-color: #e5e5e5;
  color: #000000;
}

.active-link {
  background-color: yellow;
  color: white; /* Customize the text color for better visibility */
}

.mobile-navbar-items {
  display: none;
  justify-content: end;
  flex-direction: column;
  align-items: flex-end;
  background-color: #14213d;
  width: 50%;
  margin-left: auto;
  height: auto;
  padding-right: 10px;
}

.mobile-navbar-items.is-active {
  display: flex;
}

@media only screen and (max-width: 768px) {
  .web-navbar-items {
    display: none;
  }

  .navbar-toggle {
    display: block;
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

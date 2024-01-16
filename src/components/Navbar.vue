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
      <div class="navbar-links">
        <NavbarItems />
      </div>
      <div v-if="isMobile">
        <div>{{ mobileMessage }}</div>
        <!-- <NavbarItems /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    const navbarStore = useNavbarStore()
    return {
      navbarStore,
      isMobile: navbarStore.isMobile,
      mobileMessage: 'Bu bir mobil cihazdır.'
    }
  }
  // mounted() {
  //   console.log('a', this.navbarStore.isMobile)
  //   window.addEventListener('resize', this.navbarStore.updateMobileView)

  //   watch(
  //     () => this.navbarStore.isMobile,
  //     (newVal) => {
  //       this.isMobile = newVal
  //       console.log('isMobile changed:', newVal)
  //     }
  //   )
  // }
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

.navbar-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navbar-toggle {
  display: none;
  font-size: 1.5em;
  cursor: pointer;
}

.navbar-menu-container {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  display: none;
}

.navbar-menu-container.is-active {
  display: block;
  opacity: 1;
  transform: translateY(0);
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

.navbar-menu a:hover {
  background-color: #e5e5e5;
  color: #000000;
}

.active-link {
  background-color: yellow;
  color: white; /* Customize the text color for better visibility */
}

@media only screen and (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar-toggle {
    display: block;
  }
}
</style>

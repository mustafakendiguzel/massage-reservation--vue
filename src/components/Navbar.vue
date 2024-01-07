<!-- Navbar.vue -->
<script setup lang="ts">
import CenteredMassageIntroVue from './CenteredMassageIntro.vue';

</script>
<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar-brand">
        <img src="https://logodix.com/logo/1246419.png" width="50" height="50" alt="Vue.js Logo" />
      </div>
      <div class="navbar-links" v-if="!isMobile">
        <router-link to="/login" active-class="active-link">Giriş Yap</router-link>
        <router-link to="/register" active-class="active-link">Kayıt Ol</router-link>
        <!-- <router-link to="/hakkimizda">Hakkımızda</router-link>
        <router-link to="/iletisim">İletişim</router-link> -->


        <router-link to="/iletisim" active-class="active-link">Çıkış Yap</router-link>
      </div>
      <div v-if="isMobile" class="navbar-toggle" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <font-awesome-icon icon="fa-solid fa-bars" />      
      </div>
    </div>
    <div class="navbar-menu-container" :class="{ 'is-active': isMenuOpen && isMobile }">
      <div class="navbar-menu">
        <router-link to="/login" active-class="active-link">Giriş Yap</router-link>
        <router-link to="/register">Kayıt Ol</router-link>
        <!-- <router-link to="/hakkimizda">Hakkımızda</router-link>
        <router-link to="/iletisim">İletişim</router-link> -->
        <router-link to="/iletisim">Çıkış Yap</router-link>
      </div>
    </div>
    <CenteredMassageIntroVue /> 


  </div>
</template>

<script lang="ts">
// Remove the unused import statement
import AnimationJson from './animations/animation.json'

export default {
    data() {
        return {
            isMenuOpen: false,
            isMobile: false,
            animationWidth: 500,
            animationHeight: 500,
            AnimationJson
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
            if(this.isMobile) {
              this.animationHeight = 300;
              this.animationWidth = 300;
            } else {
              this.animationHeight = 500;
              this.animationWidth = 500;
            }
        },
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeMount() {
        window.removeEventListener('resize', this.checkMobile);
    },
};
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

.navbar-links a {
  margin-left: 20px;
  text-decoration: none;
  color: #e5e5e5;
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

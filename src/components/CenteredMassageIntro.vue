<script setup lang="ts">
import AnimationJson from './animations/massageAnimation.json'
</script>
<!-- CenteredMassageIntro.vue -->

<template>
  <div class="contact-animation mt-24" ref="animationContainer">
    <Vue3Lottie :animation-data="AnimationJson" />
  </div>
</template>

<style scoped>
.contact-animation {
  width: 50%;
}

.centered-title {
  display: flex;
  justify-content: center;
}

.bright-white {
  color: #e5e5e5;
  /* Replace with a brighter shade of white if desired */
}

@media only screen and (max-width: 1268px) {
  .contact-animation {
    width: 100%;
  }
}
</style>

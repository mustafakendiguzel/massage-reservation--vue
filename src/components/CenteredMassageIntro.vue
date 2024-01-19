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
@media only screen and (max-width: 1268px) {
  .contact-animation {
    width: 100%;
  }
}
</style>

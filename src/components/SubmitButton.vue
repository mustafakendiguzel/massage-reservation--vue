<script setup lang="ts">
defineProps({
  buttonDesc: String
})
</script>

<template>
  <a-button class="bg-white text-black" size="medium">{{ buttonDesc ?? 'Empty  Button' }}</a-button>
</template>

<style></style>

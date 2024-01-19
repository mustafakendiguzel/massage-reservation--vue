<script setup lang="ts">
defineProps({
  passDesc: String
})
</script>

<template>
  <a-input-password :placeholder="passDesc || 'empty password'" />
</template>

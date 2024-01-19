<script setup lang="ts">
import { MailOutlined } from '@ant-design/icons-vue'

defineProps({
  inputDesc: String,
  deneme: String
})
</script>

<template>
  <a-input :placeholder="inputDesc || 'Empty Desc'">
    <template #prefix>
      <MailOutlined />
    </template>
  </a-input>
</template>

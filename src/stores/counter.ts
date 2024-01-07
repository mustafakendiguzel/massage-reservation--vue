import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // localStorage'da "counter" adıyla bir anahtar var mı kontrol ediyoruz
  const storedCount = localStorage.getItem('counter')
  const initialCount = storedCount !== null ? JSON.parse(storedCount) : 0

  const count = ref(initialCount)

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
    // Değişiklikleri localStorage'a kaydediyoruz
    localStorage.setItem('counter', JSON.stringify(count.value))
  }

  return { count, doubleCount, increment }
})

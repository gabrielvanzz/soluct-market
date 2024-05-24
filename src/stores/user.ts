import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userData = ref({})
  const isAuthenticated = ref(true)
  return { userData, isAuthenticated }
})

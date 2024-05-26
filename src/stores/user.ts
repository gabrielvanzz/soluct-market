import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useUserStore = defineStore('user', () => {
  // const userData = ref({})
  const isAuthenticated = ref()

  function login(response: { token : string }) {
    if (response.token) {
      localStorage.setItem('token', response.token)
      isAuthenticated.value = true
      router.push('/')
  }
  }

  function logout() {
    localStorage.removeItem('token')
    isAuthenticated.value = false
    console.log("logout")
    router.push('/login')
  }
  

  return { isAuthenticated, login, logout }


})
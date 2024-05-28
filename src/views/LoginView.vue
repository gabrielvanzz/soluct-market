<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { loginUser } from '@/services/userService'

const username = ref<string>('')
const password = ref<string>('')
const { login } = useUserStore()

const handleLogin = () => {
  if (!username.value || !password.value) {
    alert('Please fill in all fields')
    return
  }
  loginUser({ username: username.value, password: password.value })
    .then(res => {
      login(res.data)
    })
    .catch(() => {
      alert('Invalid credentials')
    })
}
</script>

<template>
  <div class="flex items-center justify-center h-screen sm:">
    <div>
      <h1 class="text-3xl font-bold text-center">Login</h1>
      <form class="flex flex-col space-y-4 mt-4" @submit.prevent="handleLogin">
        <input
          type="text"
          placeholder="Username"
          v-model="username"
          class="p-2 border border-gray-300 rounded-md focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="p-2 border border-gray-300 rounded-md focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 outline-none"
        />
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

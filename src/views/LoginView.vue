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
  <div class="sm: flex h-screen items-center justify-center">
    <div>
      <h1 class="text-center text-3xl font-bold">Login</h1>
      <form class="mt-4 flex flex-col space-y-4" @submit.prevent="handleLogin">
        <input
          type="text"
          placeholder="Username"
          v-model="username"
          class="rounded-md border border-gray-300 p-2 outline-none focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="rounded-md border border-gray-300 p-2 outline-none focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100"
        />
        <button type="submit" class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

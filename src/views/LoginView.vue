<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { loginUser } from '@/services/userService'
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

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
        <InputComponent v-model="username" label="Username" />
        <InputComponent v-model="password" label="Password" type="password" />

        <ButtonComponent
          type="submit"
          class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700 hover:text-white"
        >
          Login
        </ButtonComponent>
      </form>
    </div>
  </div>
</template>

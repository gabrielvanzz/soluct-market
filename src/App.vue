<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'

import { useUserStore } from '@/stores/user'
import HomeHeader from './components/HomeHeader.vue'

const user = useUserStore()

onBeforeMount(() => {
  const userToken = localStorage.getItem('token')

  if (userToken) {
    user.isAuthenticated = true
  }
})
</script>

<template>
  <HomeHeader v-if="user.isAuthenticated" />
  <RouterView />
  <footer class="mt-5 flex items-center justify-center">
    <p class="text-sm text-gray-500">© 2024 Gabriel Vanz.</p>
  </footer>
</template>

<style scoped></style>

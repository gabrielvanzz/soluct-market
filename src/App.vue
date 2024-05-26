<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { onBeforeMount } from 'vue';

  import { useUserStore } from '@/stores/user'

  const user = useUserStore()
  onBeforeMount(() => {
    const userToken = localStorage.getItem('token')
    
    if (userToken){
      user.isAuthenticated = true
    }
  })

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>

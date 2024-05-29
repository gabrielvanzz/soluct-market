<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { LogOut, ShoppingCart } from 'lucide-vue-next'

const { logout } = useUserStore()
</script>
<template>
  <div class="top-0 flex h-28 w-full bg-soluct-dark-blue">
    <header
      class="group flex w-full items-center justify-center font-semibold text-soluct-light-blue lg:justify-between"
    >
      <div class="grid w-full justify-between lg:grid-cols-3">
        <div class="col-start-2 flex items-center justify-center space-x-4 text-2xl lg:text-5xl">
          <a href="#">Soluct Market</a>
          <ShoppingCart class="h-8 w-8 lg:mt-3 lg:h-14 lg:w-14" />
        </div>
        <div class="col-start-3 flex items-center justify-end">
          <button @click="logout">
            <LogOut class="mr-5 mt-3 h-10 w-10 rounded-lg p-2 hover:bg-zinc-50" />
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

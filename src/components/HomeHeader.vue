<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { LogOut, Plus, ShoppingCart } from 'lucide-vue-next'

const { logout } = useUserStore()
</script>
<template>
  <div class="flex h-28 bg-soluct-dark-blue w-full sticky top-0">
    <header
      class="flex items-center justify-center text-soluct-light-blue font-semibold w-full group lg:justify-between"
    >
      <div class="grid justify-between w-full lg:grid-cols-3">
        <div class="items-center space-x-4 flex justify-center text-2xl lg:text-5xl col-start-2">
          <a href="#">Soluct Market</a>
          <ShoppingCart class="h-8 w-8 lg:h-14 lg:w-14 lg:mt-3" />
        </div>
        <div class="col-start-3 justify-end items-center flex">
          <button @click="logout">
            <LogOut class="h-10 w-10 mt-3 mr-5 rounded-lg p-2 hover:bg-zinc-50" />
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

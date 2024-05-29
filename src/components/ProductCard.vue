<script setup lang="ts">
import type { Product } from '@/utils/Product'

const props = defineProps<{ product: Product | null }>()
</script>

<template>
  <div
    class="m-5 box-border flex cursor-pointer items-center justify-center rounded-lg bg-white p-5 shadow-lg lg:w-1/5"
  >
    <div class="cursor-pointer space-y-1">
      <img :src="props.product?.image" alt="props.image" class="mx-auto h-40 w-40" />
      <h1 class="text-center text-xl font-bold">{{ props.product?.title }}</h1>
      <p class="text-center text-gray-500">{{ props.product?.category }}</p>
      <p class="text-center text-gray-500">US$ {{ props.product?.price.toFixed(2) }}</p>
    </div>
  </div>
</template>

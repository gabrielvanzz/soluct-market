<script setup lang="ts">
import type { Product } from '@/utils/Product'

const props = defineProps<{ product: Product }>()

console.log(props.product)
</script>

<template>
  <div class="space-y-1">
    <img :src="props.product.image" alt="props.image" class="w-40 h-40 mx-auto" />
    <h1 class="text-xl font-bold text-center">{{ props.product.title }}</h1>
    <p class="text-center text-gray-500">{{ props.product.category }}</p>
    <p class="text-center text-gray-500">US$ {{ props.product.price.toFixed(2) }}</p>
  </div>
</template>

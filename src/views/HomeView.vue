<script setup lang="ts">
import type { Product } from '@/utils/Product'
import { onMounted, ref } from 'vue'
import axiosConfig from '@/services/axiosConfiguration'
import HomeHeader from '@/components/HomeHeader.vue'
import ProductCard from '@/components/ProductCard.vue'

const products = ref<Product[]>([])

onMounted(() => {
  axiosConfig.get('/products').then(res => {
    products.value = res.data
  })
})
</script>

<template>
  <HomeHeader />
  <div class="mt-5">
    <h1 class="text-3xl font-bold text-center">Products</h1>
    <div class="flex flex-col justify-center lg:flex-row lg:flex-wrap">
      <div
        class="flex box-border lg:w-1/5 m-5 p-5 bg-white rounded-lg shadow-lg items-center justify-center"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

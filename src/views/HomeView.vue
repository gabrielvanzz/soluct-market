<script setup lang="ts">
import type { Product } from '@/utils/Product'
import { onMounted, ref, watch } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import SelectOption from '@/components/SelectOption.vue'

import { ArrowDownUp } from 'lucide-vue-next'
import { getProducts } from '@/services/productService'
import { options, type SortBy } from '@/utils/ProductOptions'

const products = ref<Product[]>([])
const sortBy = ref<SortBy>('asc')
const selectedOption = ref<string>('')

onMounted(() => {
  getProducts().then(response => {
    products.value = response.data
  })
})

const handleChangeSortBy = () => {
  sortBy.value = sortBy.value === 'asc' ? 'desc' : 'asc'
}

watch([sortBy, selectedOption], () => {
  getProducts(selectedOption.value, sortBy.value).then(response => {
    products.value = response.data
  })
})
</script>

<template>
  <div class="mt-5">
    <h1 class="text-3xl font-bold text-center">Products</h1>
    <hr class="w-1/6 mx-auto my-5" />
    <div class="flex justify-end items-center mr-5 p-5">
      <span class="mr-2">Displayed Items</span>
      <SelectOption v-model="selectedOption" :options="options" />
      <button @click="handleChangeSortBy" class="flex items-center space-x-2">
        <ArrowDownUp class="h-6 w-6" />
      </button>
    </div>
    <div class="flex justify-end items-center"></div>
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

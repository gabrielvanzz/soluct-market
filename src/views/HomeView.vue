<script setup lang="ts">
import type { Product } from '@/utils/Product'
import { onMounted, ref, watch } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import SelectOption from '@/components/SelectOption.vue'
import DropdownFilter from '@/components/DropdownFilter.vue'

import { ArrowDownUp, EyeIcon } from 'lucide-vue-next'
import { getAllCategories, getProducts, getProductsByCategory } from '@/services/productService'
import { options, type SortBy } from '@/utils/ProductOptions'
import ProductModal from '@/components/ProductModal.vue'

const products = ref<Product[]>([])
const sortBy = ref<SortBy>('asc')
const selectedOption = ref<string>('')
const selectedCategory = ref<string>('')
const categories = ref<string[]>([])
const selectedProduct = ref<Product | null>(null)

const openModal = (product: Product) => {
  selectedProduct.value = product
}

onMounted(() => {
  getProducts().then(response => {
    products.value = response.data
    console.log(products.value)
  })
  getAllCategories().then(response => {
    categories.value = response.data
  })
})

const handleCloseModal = () => {
  selectedProduct.value = null
}

const handleChangeSortBy = () => {
  sortBy.value = sortBy.value === 'asc' ? 'desc' : 'asc'
}

const handleChangeCategory = (filter: string) => {
  selectedCategory.value = filter
}

watch([sortBy, selectedOption], () => {
  getProducts(selectedOption.value, sortBy.value).then(response => {
    products.value = response.data
  })
})

watch(selectedCategory, () => {
  if (selectedCategory.value === '') {
    getProducts().then(response => {
      products.value = response.data
    })
    return
  }
  getProductsByCategory(selectedCategory.value).then(response => {
    products.value = response.data
  })
})
</script>

<template>
  <div class="mt-5">
    <h1 class="text-center text-3xl font-bold">Products</h1>
    <hr class="mx-auto my-5 w-1/6" />
    <div class="mr-5 flex items-center justify-end gap-4 p-5">
      <EyeIcon class="h-6 w-6" />
      <SelectOption v-model="selectedOption" :options="options" />
      <DropdownFilter :items="categories" @filter="handleChangeCategory" />
      <button @click="handleChangeSortBy" class="flex items-center justify-center px-4 py-2">
        <ArrowDownUp class="h-6 w-6" />
      </button>
    </div>
    <div class="flex items-center justify-end"></div>
    <div class="flex flex-col justify-center lg:flex-row lg:flex-wrap">
      <ProductCard
        v-for="product in products"
        @click="openModal(product)"
        :product="product"
        :key="product.id"
      />
      <ProductModal
        :isOpen="!!selectedProduct"
        :product="selectedProduct"
        @update:isOpen="handleCloseModal"
      />
    </div>
  </div>
</template>

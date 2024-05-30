<script setup lang="ts">
import { parseCategories, type Product } from '@/utils/Product'
import { onMounted, ref, watch } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import SelectOption from '@/components/SelectOption.vue'
import DropdownFilter from '@/components/DropdownFilter.vue'

import { ArrowDownUp, EyeIcon } from 'lucide-vue-next'
import { getAllCategories, getProducts } from '@/services/productService'
import { options, type SortBy } from '@/utils/ProductOptions'
import ProductModal from '@/components/ProductModal.vue'
import { useCategoryStore } from '@/stores/category'
import { useProductStore } from '@/stores/product'

const sortBy = ref<SortBy>('asc')
const selectedOption = ref<string>('')
const selectedCategory = ref<string>('')
const selectedProduct = ref<Product>()
const categoryStore = useCategoryStore()
const productStore = useProductStore()

const openModal = (product: Product) => {
  selectedProduct.value = product
}

onMounted(() => {
  getProducts().then(response => {
    productStore.products = response.data
  })
  getAllCategories().then(response => {
    categoryStore.categories = parseCategories(response.data)
  })
})

const handleCloseModal = () => {
  selectedProduct.value = undefined
}

const handleChangeSortBy = () => {
  sortBy.value = sortBy.value === 'asc' ? 'desc' : 'asc'
}

const handleChangeCategory = (filter: string) => {
  selectedCategory.value = filter
}

watch([sortBy, selectedOption, selectedCategory], () => {
  getProducts(selectedOption.value, sortBy.value, selectedCategory.value).then(response => {
    productStore.products = response.data
  })
})
</script>

<template>
  <div class="mt-5">
    <h1 class="text-center text-3xl font-bold">Products</h1>
    <hr class="mx-auto my-5 w-1/2 lg:w-1/6" />
    <div class="mr-5 flex w-full items-center justify-end gap-4 p-5">
      <EyeIcon class="h-6 w-6" />
      <SelectOption v-model="selectedOption" :options="options" class="w-1/4 lg:w-1/12" />
      <DropdownFilter :items="categoryStore.categories" @filter="handleChangeCategory" />
      <button @click="handleChangeSortBy" class="flex items-center justify-center px-4 py-2">
        <ArrowDownUp class="h-6 w-6" />
      </button>
    </div>
    <div class="flex items-center justify-end"></div>
    <div class="flex flex-col justify-center lg:flex-row lg:flex-wrap">
      <ProductCard
        v-for="product in productStore.products"
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

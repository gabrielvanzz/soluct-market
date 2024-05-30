import type { Product } from '@/utils/Product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])

  return { products }
})

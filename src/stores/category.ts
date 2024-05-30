import type { Option } from '@/utils/Option'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Option[]>([])

  return { categories }
})

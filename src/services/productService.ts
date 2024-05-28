import axiosConfig from './axiosConfiguration'
import type { SortBy } from '@/utils/ProductOptions'

export async function getProducts(limit?: string, sortBy?: SortBy) {
  return axiosConfig({
    method: 'GET',
    url: '/products',
    params: {
      sort: sortBy,
      limit: limit
    }
  })
}

export async function getProductsByCategory(category: string, limit?: string, sortBy?: SortBy) {
  return axiosConfig({
    method: 'GET',
    url: `/products/category/${category}`,
    params: {
      sort: sortBy,
      limit: limit
    }
  })
}

export async function getAllCategories() {
  return axiosConfig({
    method: 'GET',
    url: '/products/categories'
  })
}

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

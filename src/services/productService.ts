import type { Product } from '@/utils/Product'
import axiosConfig from './axiosConfiguration'
import type { SortBy } from '@/utils/ProductOptions'

export async function getProducts(limit?: string, sortBy?: SortBy, categoryId?: string) {
  return axiosConfig({
    method: 'GET',
    url: `/products${categoryId ? `/category/${categoryId}` : ''}`,
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

export async function updateProduct(productId: number, data: Product) {
  return axiosConfig({
    method: 'PUT',
    url: `/products/${productId}`,
    data: data
  })
}

export async function deleteProduct(productId: number) {
  return axiosConfig({
    method: 'DELETE',
    url: `/products/${productId}`
  })
}

export async function insertProduct(data: Omit<Product, 'id'>) {
  return axiosConfig({
    method: 'POST',
    url: '/products',
    data: {
      name: data.title,
      price: data.price,
      category: data.category,
      description: data.description,
      image: data.image
    }
  })
}

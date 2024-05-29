import { expect, test } from 'vitest'
import { getAllCategories, getProducts, getProductsByCategory } from '../productService'

test('getProducts should return products', async () => {
  const limit = '10'
  const sortBy = 'desc'

  const products = await getProducts(limit, sortBy)

  expect(products.status).toBe(200)
  expect(products.data[9]).toMatchObject({
    category: "men's clothing",
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
  })

  expect(products.data.length).toBe(10)
})

test('getProductsByCategory should return products by Category', async () => {
  const limit = '10'
  const sortBy = 'asc'
  const category = 'jewelery'

  const products = await getProductsByCategory(category, limit, sortBy)

  expect(products.status).toBe(200)
  expect(products.data[1]).toMatchObject({
    category: 'jewelery',
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    id: 6,
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    price: 168,
    title: 'Solid Gold Petite Micropave '
  })

  expect(products.data.length).toBe(4)
})

test('getAllCategories should return all categories', async () => {
  const categories = await getAllCategories()

  expect(categories.status).toBe(200)
  expect(categories.data).toMatchObject([
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
  ])
})

export interface Product {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

export function parseCategories(categories: string[]) {
  return categories.map(category => ({ value: category, label: category }))
}

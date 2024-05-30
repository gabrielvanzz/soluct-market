<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import type { Product } from '@/utils/Product'
import { computed } from 'vue'
import { deleteProduct } from '@/services/productService'
import { useProductStore } from '@/stores/product'

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: false
  }
})

const { products } = useProductStore()

const productDetails = computed(() => {
  return {
    id: props.product?.id ?? 0,
    title: props.product?.title ?? '',
    image: props.product?.image ?? '',
    description: props.product?.description ?? '',
    category: props.product?.category ?? '',
    price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      props.product?.price ?? 0
    )
  }
})

const handleDeleteProduct = (productId: number) => {
  deleteProduct(productId).then(() => {
    alert('Product deleted successfully')
    const indexToRemove = products.findIndex(product => product.id === productId)
    if (indexToRemove > -1) {
      products.splice(indexToRemove, 1)
    }
    closeModal()
  })
}
const emit = defineEmits(['update:isOpen'])

function closeModal() {
  emit('update:isOpen', false)
}
</script>

<template>
  <div class="mt-10 flex flex-col justify-evenly lg:flex-row">
    <div class="flex w-full flex-col items-center justify-center p-4 lg:w-1/2">
      <img :src="productDetails.image" alt="props.image" class="mx-auto h-40 w-40" />
    </div>
    <div class="lg:w-1/2 lg:p-4">
      <h4 class="text-lg font-semibold text-gray-700">Product Details</h4>
      <hr class="mb-10 w-full" />

      <div class="space-y-4 lg:w-full">
        <div>
          <span class="text-sm font-semibold text-gray-700">Description</span>
          <p>{{ productDetails.description }}</p>
        </div>

        <div>
          <span class="block text-sm font-medium text-gray-700">Category</span>
          <span>{{ productDetails.category }}</span>
        </div>

        <span class="block text-sm font-medium text-gray-700">Price in R$</span>
        <span>{{ productDetails.price }}</span>
      </div>
    </div>
  </div>
  <div class="mt-5 flex justify-start">
    <div class="flex items-start">
      <ButtonComponent
        variant="danger"
        type="button"
        @click="handleDeleteProduct(productDetails.id)"
        >Delete</ButtonComponent
      >
    </div>
  </div>
</template>

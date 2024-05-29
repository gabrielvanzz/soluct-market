<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import type { Product } from '@/utils/Product'
import ModalField from './ModalField.vue'
import { computed } from 'vue'
import SelectOption from '../SelectOption.vue'
import { deleteProduct } from '@/services/productService'

const props = defineProps({
  product: {
    type: Object as () => Product | null,
    required: true
  }
})

const productDetails = computed(() => {
  return {
    id: props.product?.id ?? 0,
    title: props.product?.title ?? '',
    image: props.product?.image ?? '',
    description: props.product?.description ?? '',
    category: props.product?.category ?? '',
    price: props.product?.price ?? 0
  }
})

const handleDeleteProduct = (productId: number) => {
  deleteProduct(productId).then(res => {
    alert('Product deleted successfully')
    closeModal()
  })
}
const emit = defineEmits(['update:isOpen'])

function closeModal() {
  emit('update:isOpen', false)
}
</script>

<template>
  <ModalField>
    <div class="flex w-full flex-col items-center justify-center p-4 lg:w-1/2">
      <img :src="props.product?.image" alt="props.image" class="mx-auto h-40 w-40" />
    </div>
    <div class="lg:w-1/2 lg:p-4">
      <h4 class="text-lg font-semibold text-gray-700">Product Details</h4>
      <hr class="mb-10 w-full" />
      <label class="text-sm font-semibold text-gray-700">Description</label>

      <div class="lg:w-full">
        <textarea
          class="h-40 w-full resize-none rounded-lg border border-gray-300 p-2 shadow-sm outline-none"
          :value="props.product?.description"
          readonly
        />
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <SelectOption
            v-model="productDetails.category"
            :defaultValue="productDetails.category"
            :disabled="true"
          />
        </div>

        <InputComponent
          v-model="productDetails.price"
          label="Price in $"
          :disabled="true"
          class="lg:w-1/4"
          type="number"
        />
      </div>
    </div>
  </ModalField>
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

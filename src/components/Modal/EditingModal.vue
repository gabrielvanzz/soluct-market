<script setup lang="ts">
import { defineProps, ref } from 'vue'
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

import type { Product } from '@/utils/Product'
import SelectOption from '../SelectOption.vue'
import { updateProduct } from '@/services/productService'
import { useCategoryStore } from '@/stores/category'
import { useProductStore } from '@/stores/product'
import { useToastStore } from '@/stores/toast'
import ToastList from '../Toast/ToastList.vue'

const { categories } = useCategoryStore()

const { products } = useProductStore()

const toastStore = useToastStore()

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: false
  }
})

const editedItem = ref<Product>({
  id: props.product?.id ?? 0,
  title: props.product?.title ?? '',
  image: props.product?.image ?? '',
  description: props.product?.description ?? '',
  category: props.product?.category ?? '',
  price: props.product?.price ?? 0
})

const handleSubmit = () => {
  updateProduct(editedItem.value.id ?? 0, editedItem.value)
    .then(() => {
      const indexToEdit = products.findIndex(product => product.id === editedItem.value.id)
      if (indexToEdit > -1) {
        products[indexToEdit] = editedItem.value
      }
      toastStore.add({ message: 'Product updated successfully!', status: 'success' })
      setTimeout(() => {
        closeModal()
      }, 1000)
    })
    .catch(() => {
      toastStore.add({ message: 'Error on update the product', status: 'error' })
    })
}

const emit = defineEmits(['update:isEditing', 'update:isOpen'])

function closeEdit() {
  emit('update:isEditing', false)
  toastStore.remove(toastStore.toasts[0].id)
}

function closeModal() {
  emit('update:isOpen', false)
  toastStore.remove(toastStore.toasts[0].id)
}
</script>

<template>
  <ToastList />
  <form @submit.prevent="handleSubmit">
    <div class="mt-10 flex flex-col justify-evenly lg:flex-row">
      <div class="flex w-full flex-col items-center justify-center p-4 lg:w-1/2">
        <img :src="props.product?.image" alt="props.image" class="h-40 w-40" />
        <InputComponent v-model="editedItem.image" label="Image" class="w-full lg:w-1/2" />
      </div>

      <div class="lg:w-1/2 lg:p-4">
        <h4 class="text-lg font-semibold text-gray-700">Product Details</h4>
        <hr class="mb-10 w-full" />
        <InputComponent v-model="editedItem.title" label="Title" />
        <label for="description" class="mt-2 block text-sm font-medium text-gray-700"
          >Description</label
        >
        <textarea
          class="h-40 w-full resize-none rounded-lg border border-gray-300 p-2 shadow-sm outline-none"
          v-model="editedItem.description"
        />
        <div class="w-full lg:w-1/4">
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <SelectOption v-model="editedItem.category" :options="categories" />
        </div>
        <InputComponent
          v-model="editedItem.price"
          label="Price in $"
          class="lg:w-1/4"
          type="number"
        />
      </div>
    </div>
    <div class="mt-5 flex justify-between">
      <ButtonComponent @click="closeEdit" type="button" variant="danger">Cancel</ButtonComponent>
      <ButtonComponent type="submit" variant="primary">Save</ButtonComponent>
    </div>
  </form>
</template>

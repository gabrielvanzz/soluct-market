<script setup lang="ts">
import { defineProps, ref } from 'vue'
import ModalField from './ModalField.vue'
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

import type { Product } from '@/utils/Product'
import SelectOption from '../SelectOption.vue'
import { updateProduct } from '@/services/productService'

const props = defineProps({
  product: {
    type: Object as () => Product | null,
    required: true
  }
})

const categories = [
  {
    value: 'electronics',
    label: 'Electronics'
  },
  {
    value: 'jewelery',
    label: 'Jewelery'
  },
  {
    value: "men's clothing",
    label: "Men's Clothing"
  },
  {
    value: "woman's clothing",
    label: "Woman's Clothing"
  }
]

const editedItem = ref<Product>({
  id: props.product?.id ?? 0,
  title: props.product?.title ?? '',
  image: props.product?.image ?? '',
  description: props.product?.description ?? '',
  category: props.product?.category ?? '',
  price: props.product?.price ?? 0
})

const handleSubmit = () => {
  updateProduct(props.product?.id ?? 0, editedItem.value)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const emit = defineEmits(['update:isEditing'])

function closeEdit() {
  emit('update:isEditing', false)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <ModalField>
      <div class="w-full p-4 lg:w-1/4">
        <img :src="props.product?.image" alt="props.image" class="mx-auto h-40 w-40" />
        <InputComponent v-model="editedItem.image" label="Image" />
      </div>
      <div class="lg:w-1/2">
        <InputComponent v-model="editedItem.title" label="Title" />
        <label for="description" class="mt-2 block text-sm font-medium text-gray-700"
          >Description</label
        >
        <textarea
          class="h-40 w-full resize-none rounded-lg border border-gray-300 p-2 shadow-sm outline-none"
          v-model="editedItem.description"
        />
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <SelectOption v-model="editedItem.category" :options="categories" />
        </div>
        <InputComponent v-model="editedItem.price" label="Price" />
      </div>
    </ModalField>
    <div class="mt-5 flex justify-between">
      <ButtonComponent @click="closeEdit" type="button" variant="danger">Cancelar</ButtonComponent>
      <ButtonComponent type="submit" variant="primary">Salvar</ButtonComponent>
    </div>
  </form>
</template>

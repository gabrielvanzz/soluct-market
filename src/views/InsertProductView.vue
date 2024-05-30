<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import SelectOption from '@/components/SelectOption.vue'
import router from '@/router'
import { insertProduct } from '@/services/productService'
import { useCategoryStore } from '@/stores/category'
import { useProductStore } from '@/stores/product'
import { ref } from 'vue'

const { categories } = useCategoryStore()

const emptyState = {
  name: '',
  title: '',
  description: '',
  price: 0,
  category: '',
  image: ''
}

const { products } = useProductStore()

const newProduct = ref(emptyState)

const handleSubmit = () => {
  insertProduct(newProduct.value).then(res => {
    products.push(res.data)
  })
  router.push('/')
  newProduct.value = emptyState
}
</script>

<template>
  <div class="mt-5">
    <h1 class="text-center text-3xl font-bold">New Product</h1>
    <hr class="mx-auto my-5 w-1/2 lg:w-1/6" />
    <div class="flex items-center justify-center">
      <form
        class="mt-2 flex w-full flex-col gap-5 divide-y divide-zinc-200 p-2"
        @submit.prevent="handleSubmit"
      >
        <div class="flex w-full flex-col items-center justify-center gap-3 p-2 lg:flex-row">
          <InputComponent v-model="newProduct.title" label="Title" class="w-full lg:w-1/2" />
          <InputComponent v-model="newProduct.name" label="Name" class="w-full lg:w-1/3" />
        </div>
        <div class="flex w-full flex-col items-center justify-center gap-3 p-2 lg:flex-row">
          <InputComponent v-model="newProduct.image" label="Image" class="w-full lg:w-1/3" />
          <InputComponent
            v-model="newProduct.price"
            label="Price"
            type="number"
            class="w-full lg:w-56"
          />
          <div class="flex w-full flex-col items-center justify-center lg:w-1/3 lg:flex-row">
            <div class="mt-3 w-full">
              <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
              <SelectOption v-model="newProduct.category" :options="categories" class="w-11/12" />
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-3 p-2">
          <label for="description" class="ml-1 text-sm font-medium text-zinc-700"
            >Description</label
          >
          <textarea
            class="h-40 w-full resize-none rounded-lg border border-gray-300 p-2 shadow-sm outline-none lg:w-10/12"
            v-model="newProduct.description"
          />
        </div>

        <div class="flex flex-col items-center justify-center">
          <ButtonComponent class="mt-4 flex w-1/2" type="submit" variant="primary"
            >Submit</ButtonComponent
          >
        </div>
      </form>
    </div>
  </div>
  <footer class="mt-5 flex items-center justify-center">
    <p class="text-sm text-gray-500">© 2024 Gabriel Vanz.</p>
  </footer>
</template>
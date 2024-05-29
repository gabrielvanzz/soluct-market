<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import type { Product } from '@/utils/Product'
import ModalField from './ModalField.vue'
import { computed, ref } from 'vue'
import SelectOption from '../SelectOption.vue'

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
</script>

<template>
  <ModalField>
    <div class="p-4">
      <img :src="props.product?.image" alt="props.image" class="mx-auto h-40 w-40" />
    </div>
    <div class="lg:w-1/2">
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
            :default-value="productDetails.category"
            :disabled="true"
          />
        </div>

        <InputComponent v-model="productDetails.price" label="Price" :disabled="true" />
      </div>
    </div>
  </ModalField>
</template>

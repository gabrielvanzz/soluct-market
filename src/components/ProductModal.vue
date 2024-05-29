<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import type { Product } from '@/utils/Product'
import { EditIcon, XIcon } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean,
  product: {
    type: Object as () => Product | null,
    required: true
  }
})

const emit = defineEmits(['update:isOpen'])

function closeModal() {
  emit('update:isOpen', false)
}
</script>

<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-11/12 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex flex-row justify-between">
                <div
                  class="flex-col items-center justify-center lg:inline-flex lg:flex-row lg:gap-2"
                >
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                    {{ props.product?.title }}
                  </DialogTitle>
                  <button class="">
                    <EditIcon class="h-5 w-5" />
                  </button>
                </div>
                <button class="text-gray-400 hover:text-gray-500" @click="closeModal">
                  <XIcon class="h-6 w-6" />
                </button>
              </div>
              <div class="mt-10 flex flex-col justify-evenly lg:flex-row">
                <div class="p-4">
                  <img :src="props.product?.image" alt="props.image" class="mx-auto h-40 w-40" />
                </div>
                <div class="lg:w-1/2">
                  <label class="text-sm font-semibold text-gray-700">Description</label>
                  <p class="text-sm text-gray-500">
                    {{ props.product?.description }}
                  </p>
                  <label class="text-sm font-semibold text-gray-700">Category</label>
                  <p class="text-sm text-gray-500">
                    {{ props.product?.category }}
                  </p>
                  <label class="text-sm font-semibold text-gray-700">Price</label>
                  <p class="text-sm text-gray-500">
                    {{ props.product?.price.toFixed(2) }}
                  </p>
                </div>
              </div>

              <div class="mt-5 flex justify-start">
                <div class="flex items-center">
                  <button
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

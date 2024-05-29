<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import type { Product } from '@/utils/Product'
import { EditIcon, XIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import ViewingModal from './Modal/ViewingModal.vue'
import EditingModal from './Modal/EditingModal.vue'
import ButtonComponent from './ButtonComponent.vue'

const props = defineProps({
  isOpen: Boolean,
  product: {
    type: Object as () => Product | null,
    required: true
  }
})

const isEditing = ref(false)

const emit = defineEmits(['update:isOpen'])

function closeModal() {
  emit('update:isOpen', false)
  isEditing.value = false
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
              class="w-10/12 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex flex-row justify-between">
                <div class="items-center justify-center lg:inline-flex lg:flex-row lg:gap-2">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                    {{ props.product?.title }}
                  </DialogTitle>
                  <ButtonComponent type="button" @click="isEditing = true" v-if="!isEditing">
                    <EditIcon class="h-5 w-5" />
                  </ButtonComponent>
                </div>
                <ButtonComponent @click="closeModal" type="button">
                  <XIcon class="h-6 w-6" />
                </ButtonComponent>
              </div>
              <ViewingModal
                v-if="!isEditing"
                :product="props.product"
                @update:is-open="closeModal"
              />
              <EditingModal
                v-else
                :product="props.product"
                @update:is-editing="isEditing = $event"
                @update:is-open="closeModal"
              />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/toast'
import ToastListItem from './ToastListItem.vue'

const toastStore = useToastStore()

function removeToast(toastId: number) {
  toastStore.remove(toastId)
}
</script>

<template>
  <TransitionGroup
    tag="div"
    enter-from-class="translate-x-full opacity-0"
    enter-active-class="duration-500"
    leave-active-class="duration-500"
    leave-from-class="translate-x-full opacity-0"
    class="fixed right-4 top-4 z-50 w-full max-w-xs space-y-4"
  >
    <ToastListItem
      v-for="toast in toastStore.toasts"
      :key="toast.id"
      :message="toast.message"
      @remove="removeToast(toast.id)"
      :status="toast.status"
    />
  </TransitionGroup>
</template>

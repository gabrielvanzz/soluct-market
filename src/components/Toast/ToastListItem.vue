<script setup lang="ts">
import type { ToastStatus } from '@/stores/toast'
import { CircleAlert } from 'lucide-vue-next'
import { onMounted } from 'vue'

const props = defineProps<{ message: string; status: ToastStatus }>()

const emit = defineEmits(['remove'])

onMounted(() => {
  setTimeout(() => emit('remove'), 2000)
})
</script>

:class="{' ': props.status == "success", ' items-center rounded-lg bg-white p-4 text-gray-500
shadow': props.status == "warning", ' items-center rounded-lg bg-white p-4 text-gray-500 shadow':
props.status == "error" }">

<template>
  <div
    class="flex items-center rounded-lg shadow"
    :class="{
      ' bg-green-300 p-4 text-green-500': props.status === 'success',
      'bg-yellow-200 p-4 text-yellow-500': props.status === 'warning',
      'bg-red-300 p-4 text-red-50': props.status === 'error'
    }"
  >
    <div class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
      <CircleAlert v-if="props.status === 'success'" class="text-green-500" />
      <CircleAlert v-if="props.status === 'warning'" class="text-yellow-500" />
      <CircleAlert v-if="props.status === 'error'" class="text-red-500" />
    </div>
    <div class="ms-3 text-sm font-normal">{{ props.message }}</div>
    <button
      type="button"
      :class="{
        'bg-green-200 text-green-400 hover:bg-green-100 hover:text-green-900':
          props.status === 'success',
        'bg-yellow-200 text-yellow-400 hover:bg-yellow-100 hover:text-yellow-900':
          props.status === 'warning',
        'bg-red-200 text-red-400 hover:bg-red-100 hover:text-red-900': props.status === 'error'
      }"
      class="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg p-1.5 focus:ring-2 focus:ring-gray-300"
      data-dismiss-target="#toast-default"
      aria-label="Close"
      @click="emit('remove')"
    >
      <span class="sr-only">Close</span>
      <svg
        class="h-3 w-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </div>
</template>

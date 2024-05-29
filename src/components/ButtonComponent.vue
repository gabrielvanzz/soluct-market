<script setup lang="ts">
import { defineProps } from 'vue'

type Variants = 'primary' | 'danger'
type Buttons = 'button' | 'submit'

const props = defineProps({
  variant: {
    type: String as () => Variants,
    required: false
  },
  type: {
    type: String as () => Buttons,
    default: 'button'
  }
})
</script>

<template>
  <button
    class="text-gray-400 hover:text-gray-500"
    :class="{
      'inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2':
        props.variant === 'primary',
      'inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2':
        props.variant === 'danger'
    }"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>

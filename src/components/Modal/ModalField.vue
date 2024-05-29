<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="mt-10 flex flex-col justify-evenly lg:flex-row">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ options: { value: string; label: string }[] }>()
const model = defineModel()
</script>

<template>
  <select
    v-model="model"
    class="p-2 border border-gray-300 rounded-md focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 outline-none"
  >
    <option v-for="option in props.options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

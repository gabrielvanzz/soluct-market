<script setup lang="ts">
const props = defineProps<{ options: { value: string; label: string }[] }>()
const model = defineModel()
</script>

<template>
  <select
    v-model="model"
    class="rounded-md border border-gray-300 p-2 outline-none focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100"
  >
    <option v-for="option in props.options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

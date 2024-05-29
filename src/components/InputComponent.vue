<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false
  }
})

const model = defineModel()
</script>

<template>
  <div class="mt-3">
    <label class="ml-1 text-sm font-medium text-zinc-700" v-if="props.label">{{
      props.label
    }}</label>
    <input
      class="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none"
      v-model="model"
      :readonly="props.readonly"
    />
  </div>
</template>

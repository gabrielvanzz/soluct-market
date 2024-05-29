<script setup lang="ts">
type inputType = 'number' | 'text' | 'password' | 'email'
const props = defineProps({
  label: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  type: {
    type: String as () => inputType,
    required: false,
    default: 'text'
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
      v-if="props.type === 'text'"
      class="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none"
      v-model="model"
      :disabled="props.disabled"
      maxlength="255"
    />
    <input
      v-else-if="props.type === 'number'"
      class="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none"
      v-model="model"
      :disabled="props.disabled"
      maxlength="8"
    />
    <input
      v-else-if="props.type === 'password'"
      class="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none"
      v-model="model"
      :disabled="props.disabled"
      :type="props.type"
    />
    <input
      v-else-if="props.type === 'email'"
      class="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none"
      v-model="model"
      :disabled="props.disabled"
      :type="props.type"
    />
  </div>
</template>

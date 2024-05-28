<script setup lang="ts">
import { SlidersHorizontal } from 'lucide-vue-next'
import { ref } from 'vue'

const isActive = ref(false)

const props = defineProps({
  items: {
    type: Array as () => string[],
    required: true
  }
})

const emit = defineEmits(['filter'])

const filter = (selectedItem: string) => {
  emit('filter', selectedItem)
}
</script>

<template>
  <div class="relative flex items-center px-4 justify-end">
    <button @click="isActive = !isActive" class="w-full flex items-center justify-center py-2 px-4">
      <SlidersHorizontal class="h-6 w-6" />
    </button>
    <div v-if="isActive" class="absolute top-12 right-0 z-10 w-48 p-3 bg-white rounded-lg shadow">
      <h6 class="mb-3 text-sm font-medium text-gray-900">Filter</h6>
      <ul class="space-y-2 text-sm">
        <li
          v-for="(item, index) in props.items"
          :key="index"
          class="cursor-pointer hover:text-blue-500"
        >
          <input @click="filter(item)" type="checkbox" class="mr-2" />
          <label for="item">{{ item }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

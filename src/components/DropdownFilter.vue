<script setup lang="ts">
import { SlidersHorizontal } from 'lucide-vue-next'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type { Option } from '@/utils/Option'

const props = defineProps({
  items: {
    type: Array as () => Option[],
    required: true
  }
})

const emit = defineEmits(['filter'])

const filter = (selectedItem: string) => {
  emit('filter', selectedItem)
}
</script>

<template>
  <Menu as="div" class="relative inline-block">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <SlidersHorizontal class="h-6 w-6" />
      </MenuButton>

      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <MenuItem v-for="item in props.items" :key="item.value" as="div" v-slot="{ active }">
          <button
            :class="[
              active ? 'bg-blue-100 text-blue-900' : 'text-soluct-dark-blue',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm'
            ]"
            @click="filter(item.value)"
          >
            {{ item.label }}
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }" as="div">
          <button
            :class="[
              active ? 'bg-blue-100 text-blue-900' : 'text-soluct-dark-blue',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm'
            ]"
            @click="filter('')"
          >
            All
          </button>
        </MenuItem>
      </MenuItems>
    </div>
  </Menu>
</template>

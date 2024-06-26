<script setup lang="ts">
import type { Option } from '@/utils/Option'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-vue-next'

const props = defineProps({
  options: {
    type: Array as () => Option[],
    required: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const model = defineModel()
</script>

<template>
  <Listbox v-model="model" :disabled="props.disabled">
    <div class="relative mt-1">
      <ListboxButton
        class="sm:text-sm h-10 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300"
        v-slot="{ value }"
      >
        <span class="block truncate">{{
          props.options?.find(option => option.value === value)?.label
        }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronsUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="sm:text-sm absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-blue-100 text-blue-900' : 'text-soluct-dark-blue',
                'relative cursor-default select-none py-2 pl-10 pr-4'
              ]"
            >
              <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{
                option.label
              }}</span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

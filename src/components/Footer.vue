<template>
    <footer class="flex items-center justify-around py-6">
        <h2>© 2024 ALOHA, Inc. All rights reserved.</h2>
        <ul class="flex justify-between">
            <li class="pr-6 cursor-pointer">FAQs</li>
            <li class="pr-6 cursor-pointer">聯繫</li>
            <li class="pr-6 cursor-pointer">隱私權政策</li>
        </ul>
          <div class="flex items-center space-x-6">
            <Menu as="div" class="relative inline-block text-left">
              <MenuButton class="flex items-center space-x-1">
                <span
                  class="flex items-center tracking-wide cursor-pointer mdi mdi-currency-usd mdi-20px"
                ></span>
                <span class="text-sm">{{ baseCurrency }}</span>
                <span class="mdi mdi-menu-down mdi-24px"></span>
              </MenuButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems class="absolute w-24 text-center bg-white rounded-md shadow-xl dark:bg-gray-600 focus:outline-none">
                  <div>
                      <MenuItem v-for="option in currencyOptions" :key="option.value" v-slot="{ active }">
                          <button
                            @click="selectCurrency(option.value)"
                            :class="[
                              active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300',
                              'block w-full text-left px-4 py-2 text-sm'
                            ]"
                          >
                            {{ option.value }}
                          </button>
                        </MenuItem>
          
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
    </footer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

interface Options {
    value:string
}
const currencyOptions: Options[] =[{value:'TWD'}, {value:'USD'}] 
const baseCurrency = ref<string>('TWD');
const selectCurrency = (value: string): void => {
    baseCurrency.value = value;
};

</script>
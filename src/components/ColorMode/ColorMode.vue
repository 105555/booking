<template>
    <div class="flex items-center">
      <button @click="toggleColorTheme" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
        <span v-if="colorMode.value === 'light'" class="mdi mdi-moon-waning-crescent mdi-24px"></span>
        <span v-else class="mdi mdi-white-balance-sunny mdi-24px"></span>
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  const colorMode = useColorMode();
  
  const toggleColorTheme = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
  }
  </script>
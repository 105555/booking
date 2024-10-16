<template>
  <ClientOnly>
    <div :class="`${colorMode.value}`">
      <slot />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style>
.dark {
  background-color: #1a202c;
  color: #e2e8f0;
}

.light {
  background-color: #f7fafc;
  color: #2d3748;
}
</style>

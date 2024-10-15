<template>
  <div :class="`${colorMode.value}`" class="container px-10 mx-auto">
    <Header />
    <slot />
    <Footer />
  </div>
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

<template>
  <ClientOnly>
    <div :class="`${colorMode.value}`" class="md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
      <Header class="xl:mx-auto xl:px-10 xl:container"/>
        <slot />
      <LazyFooter class="xl:mx-auto xl:px-10 xl:container"/> <!--使用時才載入-->
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

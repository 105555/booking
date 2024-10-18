<template>
    <div class="">
        <div class="h-[320px] w-auto relative">
            <NuxtImg src="/index-banner.jpg" alt="Banner" class="object-cover w-full h-full"/>
            <div class="absolute inset-0 flex items-center justify-center">
                <h1 class="text-5xl font-bold text-center text-white">
                  Discover your ideal hotel
                </h1>
              </div>
        <CommonSearch class="absolute left-1/2 transform -translate-x-1/2 -bottom-[52px]"/>   
        </div>
        <PagesTopChoice />
        <CommonSubscribe class="mt-32 xl:container"/> 
    </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title:'ALOHA 訂房網',
  ogTitle: 'ALOHA 訂房網',
  description: '全台灣人都在使用的訂房網站',
})
</script>



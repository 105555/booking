<template>
    <div>
      <button @click="notify">建立通知</button>
    </div>
  </template>
  
  <script setup lang="ts">
  const notify = () => {
    useNuxtApp().$toast("就是這麼簡單！")
  }
  </script>
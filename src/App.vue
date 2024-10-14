<script setup lang="ts">
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
import { useStore } from './stores/cats';
const storeLoading = useStore();
</script>

<template>
  <Header />
  <div class="container">
    <main>
      <div v-if="storeLoading.isLoading" style="display: flex; justify-content: center; margin-top: 48px;">
        <img style="border-radius: 40px;" width="200" height="200"
          src="https://cdn.dribbble.com/users/160117/screenshots/3197970/media/1f5c05158cafb49ecca277b87cedcae0.gif"
          alt="Loading">
      </div>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>

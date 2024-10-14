<script setup lang="ts">
import { onMounted } from 'vue'
import CatsList from '@/components/CatsList.vue'
import { useStore } from '@/stores/cats'
const store = useStore();
onMounted(store.getCatsList);
</script>

<template>
  <CatsList />
</template>

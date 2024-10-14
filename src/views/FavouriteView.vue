<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '@/stores/cats';
import FavouriteList from '@/components/FavouriteList.vue';
const store = useStore();
onMounted(store.getAllFavouriteItem)
</script>

<template>
    <FavouriteList/>
</template>

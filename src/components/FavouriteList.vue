<script setup lang="ts">
import { useStore } from '@/stores/cats'
import FavouriteListItem from './FavouriteListItem.vue';
const store = useStore();
</script>
<template>
    <div class="List">
        <FavouriteListItem v-for="favouriteItem in store.favouriteList" :key="favouriteItem.image_id"
            :favouriteItem="favouriteItem" />
    </div>
</template>
<style lang="scss">
.List {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    margin-top: 48px;
}
</style>
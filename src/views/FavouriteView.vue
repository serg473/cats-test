<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '@/stores/cats';
import FavouriteList from '@/components/FavouriteList.vue';
const store = useStore();
onMounted(store.getAllFavouriteItems)
</script>

<template>
    <FavouriteList v-if="store.favouriteList.length > 0" />
    <div class="empty" v-else>
        <img src="https://cdn-icons-png.freepik.com/256/10218/10218522.png?semt=ais_hybrid" width="300" height="300"
            alt="No Favourites">
    </div>

</template>

<style lang="scss">
.empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 48px;
}
</style>

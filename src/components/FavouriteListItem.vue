<script setup lang="ts">
import { useStore } from '@/stores/cats';
const store = useStore();
interface FavouriteListItem {
    created_at: string
    id: number
    image: { id: string, url: string }
    image_id: string
    sub_id: null | string
    user_id: string
}
defineProps<{
    favouriteItem: FavouriteListItem
}>()
</script>
<template>
    <div class="List-item">
        <img :src="favouriteItem.image.url" width="225" height="225" :alt="favouriteItem.image_id">
        <button @click="store.deleteFavouriteItem(favouriteItem.id)">
            <img src="../assets/heart_like.svg" alt="Like">
        </button>
    </div>
</template>
<style scoped lang="scss">
.List-item {
    width: 225px;
    height: 225px;
    transition: all ease-in-out 0.5s;
    cursor: pointer;
    position: relative;

    button {
        position: absolute;
        bottom: 24px;
        right: 19px;
        border: none;
        background: transparent;
        opacity: 0;
        transition: all ease 0.5s;

        img {
            cursor: pointer;
        }
    }

    &:hover {
        box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.24);

        button {
            opacity: 1;
        }
    }
}
</style>
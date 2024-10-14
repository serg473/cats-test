<script setup lang="ts">
import type { CatsListItem } from '@/interface/cats';
import { useStore } from '@/stores/cats';
const store = useStore();
defineProps<{
    catItem: CatsListItem
}>()
</script>
<template>
    <div class="List-item">
        <img :src="catItem.url" width="225" height="225" :alt="catItem.id">
        <button @click="store.createFavouritePicture(catItem.id)">
            <img src="../assets/heart_empty.svg" alt="Empty_Like">
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
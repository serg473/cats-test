<script setup lang="ts">
import type { CatsListItem } from '@/interface/cats';
import LikeImage from './LikeImage.vue';
import { useStore } from '@/stores/cats';
const store = useStore();
defineProps<{
    catItem: CatsListItem
}>()
</script>
<template>
    <div class="List-item">
        <img :src="catItem?.url" width="225" height="225" :alt="catItem.id">
        <div class="List-item__like">
            <LikeImage @click="store.createFavouritePicture(catItem.id, catItem.like)" :like="catItem?.like" />
        </div>

    </div>
</template>
<style scoped lang="scss">
.List-item {
    width: 225px;
    height: 225px;
    transition: all ease-in-out 0.5s;
    cursor: pointer;
    position: relative;

    &__like {
        position: absolute;
        bottom: 0;
        right: 0;
        border: none;
        background: transparent;
        opacity: 0;
        transition: all ease 0.5s;
    }

    &:hover {
        box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.24);

        .List-item__like {
            opacity: 1;
        }
    }
}
</style>
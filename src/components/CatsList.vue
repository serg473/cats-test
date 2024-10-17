<script setup lang="ts">
import { useStore } from '@/stores/cats'
import CatListItem from './CatListItem.vue';
const store = useStore();
</script>
<template>
    <div class="List" v-if="store.cats.length > 0">
        <transition-group name="cats-list">
            <CatListItem v-for="catItem in store.cats" :key="catItem.id" :catItem="catItem" />
        </transition-group>
        <div v-intersection="store.loadMoreCatsList" class="observer">... загружаем
            еще котиков ...
        </div>

    </div>
</template>
<style lang="scss">
.List {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    margin-top: 48px;
}

.observer {
    margin: 0 auto;
    margin-bottom: 48px;
    background-color: #2196F3;
    width: 100%;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.25px;
}
</style>
<script setup lang="ts">
import { useStore } from '@/stores/cats'
import CatListItem from './CatListItem.vue';
const store = useStore();
</script>
<template>
    <div class="List">
        <CatListItem v-for="catItem in store.cats" :key="catItem.id" :catItem="catItem" />
    </div>
</template>
<style  lang="scss">
.List {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    margin-top: 48px;
}
</style>
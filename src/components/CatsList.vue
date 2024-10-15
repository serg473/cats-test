<script setup lang="ts">
import { useStore } from '@/stores/cats'
import CatListItem from './CatListItem.vue';
import { onMounted, useTemplateRef, watch } from 'vue';
import { storeToRefs } from 'pinia';
const store = useStore();
const observerDOM = useTemplateRef('observer')
const { currentPage, getCatsList } = storeToRefs(store)
onMounted(() => {
    const options = {
        rootMargin: '0px',
        threshold: 1.0
    }
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting && store.currentPage < store.totalPages) {
            store.loadMoreCatsList();
        }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(observerDOM.value)
})
</script>
<template>
    <div class="List">
        <CatListItem v-for="catItem in store.cats" :key="catItem.id" :catItem="catItem" />
        <div ref="observer" class="observer"><img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="">
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

.active-page {
    border: 1px solid #000;
}

.observer {
    margin: 0 auto;
    margin-bottom: 48px;
}
</style>
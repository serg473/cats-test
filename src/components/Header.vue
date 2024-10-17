<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="header">
        <div class="header__container container">
            <nav class="header__menu">
                <RouterLink to="/">Все котики</RouterLink>
                <RouterLink to="/favourite">Любимые котики
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
$blue: #2196F3;

.header {
    background-color: $blue;

    &__menu {
        display: flex;
        gap: 20px;
    }

    a {
        text-align: center;
        transition: all ease-in 0.3s;
        &.router-link-active {
            background-color: rgba(30, 136, 229, 1);
            color: rgba(255, 255, 255, 1);
        }

        &:hover {
            background-color: rgba(30, 136, 229, 1);
            color: rgba(255, 255, 255, 1);
        }
    }
}
</style>

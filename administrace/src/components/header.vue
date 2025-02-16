<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <v-app-bar class="container" scroll-behavior="hide" scroll-threshold="0">
        <RouterLink class="link" to="general"><p>Základní</p></RouterLink>
        <RouterLink class="link" to="article"><p>Články</p></RouterLink>
        <RouterLink class="link" to="gallery"><p>Fotky</p></RouterLink>
        <RouterLink class="link" to="downloads"><p>Soubory ke stažení</p></RouterLink>
        <RouterLink class="link" to="news"><p>Aktuality</p></RouterLink>
    </v-app-bar>
</template>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: row;
        gap: 20px;
        row-gap: 0px;
        flex-wrap: wrap;
        z-index: 10;
        padding: 0 20px 0 20px;

    }
    a{
        text-decoration: none;
        color: black;
        &:hover{
            cursor: pointer;
        }
    }
</style>

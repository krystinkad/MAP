<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <v-app-bar class="container" scroll-behavior="hide" scroll-threshold="0">
        <RouterLink><p>Články</p></RouterLink>
        <p>Fotky</p>
        <p>Soubory ke stažení</p>
        <p>Aktuality</p>
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
    }
</style>

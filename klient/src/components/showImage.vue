<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onBeforeMount } from "vue";
import galleryComp from "@/components/galleryView.vue";
import { serverAddress } from '../stores/address.js'
const add = serverAddress();

const props = defineProps({
    clickedImage: {
        type: Object,
        required: true,
    },
});

</script>
<template>
    <div class="fullImage">
        <p class="button"><i class="fa-solid fa-chevron-left"></i></p>
        <img v-if="clickedImage" :src="clickedImage.photo_path" alt="">
        <p class="button"><i class="fa-solid fa-chevron-right"></i></p>
    </div>
</template>
<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;
html{
    overflow: hidden;
}
.fullImage {
    overflow: hidden;
    position: absolute;
    height: 100%;
    left: 0;
    top:0;
    background-color: rgba(20, 20, 20, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    img {
        width: 60vw;
    }
}
</style>
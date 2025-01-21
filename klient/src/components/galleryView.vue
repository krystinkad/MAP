<script setup>
import { ref, computed } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const props = defineProps({
    imagePaths: {
        type: Array,
        required: true,
    },
});
console.log("path" + props.imagePaths)
</script>
<template>
    <div class="container flexR">
        <section v-for="imagePath in props.imagePaths">
            <p>{{ imagePath }}</p>

        </section>
        <p>{{ props.imagePaths }}</p>
<!--         <img class="image" v-for="imagePath in imagePaths"
            :src="`${add.address}/${imagePath.photo_path}`"> -->
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles.scss";
@use "@/assets/colors.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";

.container {
    margin-top: 20px;
    align-items: baseline;

    section.select {
        width: 90%;
        padding: 20px;
        background-color: rgb(240, 240, 240);
        border-radius: 30px;
        border: solid 1px colors.$green_primary;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        transition: 0.1s;
        align-items: center;

        img.image {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            height: auto;
            opacity: 0.75;
            transition: 0.3s;
            margin: 2px;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
                opacity: 1;
                transition: 0.3s;
            }

            &.active {
                border: 2px solid colors.$green_primary;
                opacity: 1;
                transition: 0.3s;
                margin: 0;
            }
        }
    }
}
</style>

<script setup>
import { ref, computed } from 'vue';
import { serverAddress } from '../stores/address.js'
const emit = defineEmits(['updatePhotos']);

const add = serverAddress();
const props = defineProps({
    imagePaths: {
        type: Array,
        required: true,
    },
});
const selectedImages = ref([]);
const selectedImagesID = ref([]);
const handleImageClick = (index, article_id, photo_id) => {
    if (selectedImages.value.includes(index)) {
        selectedImages.value = selectedImages.value.filter((i) => i !== index);
    } else {
        selectedImages.value.push(index);
        selectedImagesID.value.push({
            article_id: article_id, 
            photoId: photo_id
        })
    }

    console.log(selectedImages.value)
    console.log(selectedImagesID.value)
};

const deleteImages = async () => {
    event.preventDefault();
    await fetch(`${add.address}/photos/deleteImages`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({
            photos: selectedImagesID.value
        })
    })
    selectedImages.value = []
    selectedImagesID.value = []
    emit('updatePhotos');

}
</script>
<template>
    <div class="container flexC">
        <section class="select">
            <img class="image" v-for="(imagePath, index) in imagePaths" :key="index"
                :class="{ active: selectedImages.includes(index) }"
                @click="handleImageClick(index, imagePath.article_id, imagePath.id)" :src="`${add.address}/${imagePath.photo_path}`">
        </section>
        <button class="button" @click="deleteImages">Odstranit výběr</button>
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

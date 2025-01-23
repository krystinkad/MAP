<script setup>
import { ref, computed, onBeforeMount, onMounted } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const props = defineProps({
    articleValue: {
        type: Object,
        required: true,
    },
});

const photosArray = ref([])

const getPhotos = async () => {
     await fetch(`${add.address}/photos/getPhotos/${props.articleValue.id}`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      photosArray.value = [];
      if(data.length > 0){
      for (let i = 0; i < data.length; i++) {
        photosArray.value.push(data[i])
      }}
    })
}


onMounted(() => {
  getPhotos()
})
</script>
<template>
    <div class="container flexR">
        <section class="select">
            <img v-for="image in photosArray" class="image"  :src="`${add.address}/${image.photo_path}`" alt="">
        </section>
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
        border-radius: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;

        img.image {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            height: auto;
            margin: 2px;
            border-radius: 10px;
        }
    }
}
</style>

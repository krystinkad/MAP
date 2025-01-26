<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onBeforeMount } from "vue";
import galleryComp from "@/components/galleryView.vue";
import showImage from "@/components/showImage.vue";
import { serverAddress } from '../stores/address.js'
const add = serverAddress();

const props = defineProps({
  articleContent: {
        type: Object,
        required: true,
    },
});

const emits = defineEmits({
  clickedImage:Object,
  required:true
})

const showClickedImage = () =>{
  
}
</script>
<template>
  <div class="article">
    <h1>{{articleContent.header}}</h1>
    <article class="articleContent" v-html="props.articleContent.content"></article>
    <section class="galleryContainer">
    <galleryComp :articleValue="props.articleContent" @click="showClickedImage"></galleryComp>
  </section>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;
p{
  line-height: 1.5;
}
h1 {
  color: colors.$green_primary;
  text-align: start;
}
.article {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  letter-spacing: 1.2;
  gap: 20px;
  line-height: 1.5;

  .articleContent{
      line-height: 1.5;
  }
  .galleryContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    .images {
      display: flex;
      flex-direction: row;
      min-height: 20vh;
      min-height: 150px;
      gap: 20px;
      justify-content: center;
      align-items: center;
      width: 100%;
      img {
        width: 35%;
        @include mixins.responsive(tablet) {
          width: 60%;
        }
        @include mixins.responsive(mobile) {
          width: 100%;
        }
      }
      .img2 {
        @include mixins.responsive(mobile) {
          display: none;
        }
      }
      p {
                  transition: ease 0.2s;

        height: max-content;
        background-color: colors.$clr_white;
        color: colors.$green_primary;
        font-size: 2.5em;
        padding: 0;
        &:hover{
          scale: 1.1;
          transition: ease 0.2s;
        }
        @include mixins.responsive(tablet) {
          font-size: 2em;
        }
        @include mixins.responsive(mobile) {
          font-size: 1.5em;
        }
      }
      @include mixins.responsive(tablet) {
        min-width: 60px;
        margin-top: -5px;
      }
      @include mixins.responsive(tablet) {
        gap: 10px;
      }
    }
    @include mixins.responsive(tablet) {
      gap: 20px;
    }
  }
}
</style>
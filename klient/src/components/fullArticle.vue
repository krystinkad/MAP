<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onBeforeMount } from "vue";
import galleryComp from "@/components/galleryView.vue";
import { serverAddress } from '../stores/address.js'
const add = serverAddress();

const props = defineProps({
  articleContent: {
        type: Object,
        required: true,
    },
});

</script>
<template>
  <div class="article">
    <h1>{{articleContent.header}}</h1>
    <article class="articleContent" v-html="props.articleContent.content"></article>
 <!-- <p>{{ props.articleContent }}</p> -->
    <galleryComp :articleValue="props.articleContent"></galleryComp>
    <!-- <section class="gallery">
      
      <section class="images">
        <p class="button"><i class="fa-solid fa-chevron-left"></i></p>

        <img src="/img/background.png" alt="" />
        <img class="img2" src="/img/background2.png" alt="" />
        <p class="button"><i class="fa-solid fa-chevron-right"></i></p>
      </section>
      <section class="dots">
        <span class="dot this"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </section>
    </section> -->
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;

h1 {
  color: colors.$green_primary;
  text-align: start;
}
.article {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  line-height: 1.5;
  letter-spacing: 1.2;
  gap: 20px;
  .articleContent{
    p{
      line-height: 1.5;

    }
  }
  .gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
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
    .dots {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
      .dot {
        transform: ease 0.2s;
        width: 15px;
        height: 15px;
        border-radius: 8px;
        background-color: colors.$green_primary;
        opacity: 0.5;
        &:hover {
          scale: 1.1;
          transform: ease 0.2s;
          cursor: pointer;
        }
        &.this {
          scale: 1.3;
          opacity: 1;
          &:hover {
            scale: 1.3;
            cursor: default;
          }
        }
        @include mixins.responsive(tablet) {
          width: 10px;
          height: 10px;
        }
      }
    }
    @include mixins.responsive(tablet) {
      gap: 20px;
    }
  }
}
</style>
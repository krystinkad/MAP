<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="article">
    <h1>název článku</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae, a
      itaque porro et ad deleniti tenetur? Porro dolorem nam eveniet expedita
      explicabo ipsum laborum, incidunt, laboriosam voluptatem, distinctio
      quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      nulla accusamus quidem. Et, in fugiat, illo aliquid facere sunt libero
      aperiam dolorum temporibus qui eligendi at quidem cupiditate cumque
      provident! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Molestiae, ad eligendi? Numquam ipsam totam non reprehenderit molestiae!
      Molestias eius exercitationem, corporis commodi sapiente consectetur quis
      architecto et modi officia tempora? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Officiis, sunt quidem. Ratione neque cupiditate dolores
      sed quas earum delectus soluta architecto distinctio, quidem sunt itaque
      dolore voluptates doloremque magni a!
    </p>
    <section class="gallery">
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
    </section>
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
        min-width: 130px;
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
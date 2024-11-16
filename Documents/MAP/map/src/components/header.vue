<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';

const isVisible = ref(false);
function dropdown() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div class="wrap">
    <div :class="['headerContainer', { visible: isVisible } ]">
      <RouterLink class="link" to="/" @click="dropdown()">
        <img src="/img/header_text.png" alt="Kořínek"
      ></RouterLink>
      <i class="fa-solid fa-bars" @click="dropdown()"></i>

      <nav @click="dropdown()">
        <RouterLink class="link" to="/about">O nás</RouterLink>
        <RouterLink class="link" to="/news">Táborový zpravodaj</RouterLink>
        <RouterLink class="link" to="/downloads">Ke stažení</RouterLink>
        <RouterLink class="link" to="/contacts">Kontakty</RouterLink>
        <RouterLink class="link" to="/messages">Táborová pošta</RouterLink>
      </nav>
    </div>
    <img class="wave" src="@/assets/header_wave.svg" alt="" />
  </div>
</template> t 
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;

.wrap {
  position: relative;
  top: 0;
  width: 100%;
  z-index: 3;

  .headerContainer {
    //transition: ease 0.1s;
    width: 100%;
    height: 70px;
    font-family: "Luckiest";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: colors.$clr_white;
    img {
      width: 150px;
      padding: 30px  20px 0 20px;
      z-index: 8;
      position: relative;
      @include mixins.responsive(laptop) {
        width: 100px;
        padding: 20px 30px 20px 30px;
      }
      @include mixins.responsive(825px) {
        width: 80px;
      }
    }
    i {
      display: none;
      z-index: 3;

      @include mixins.responsive(tablet) {
        display: block;
        padding: 20px;
      }
    }
    nav {
      padding: 30px  20px 0 20px;
      .link {
        font-size: 1.15em;
        padding: 20px;
        color: colors.$green_dark;
        text-decoration: none;
        z-index: 7;
        @include mixins.responsive(laptop) {
          font-size: 1em;
          padding: 15px;
        }
        @include mixins.responsive(825px) {
          font-size: 0.8em;
          padding: 15px;
        }
      }

      @include mixins.responsive(laptop) {
        padding: 15px;
      }
      @include mixins.responsive(tablet) {
        display: none;
      }
    }
  }

  div.visible {
    //transition: ease 0.1s;
    @include mixins.responsive(tablet) {
      height: 100vh;
      flex-direction: column;
      align-items: center;
    }

    nav {
      @include mixins.responsive(tablet) {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-size: 1.5em;
        align-items: center;
      }
      @include mixins.responsive(mobile) {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-size: 1.2em;
        align-items: center;
      }
      @include mixins.responsive(tablet) {
        height: 100vh;
        flex-direction: column;
        align-items: center;
      }
    }
    .link {
              @include mixins.responsive(tablet) {
      display: flex;
      flex-direction: column;
      align-items: center;
}

      img {
        @include mixins.responsive(tablet) {
          display: block;
          width: 60%;
          max-width: 200px;
          padding: 20px;
        }
      }
    }
  }

  img.wave {
    position: absolute;
    top: 67px;
    width: 100%;
    padding: 0;
    z-index: 0;
    rotate: 0deg;
    margin: -1px;
    @include mixins.responsive(tablet) {
      top: 70px;
      z-index: 1;
    }
  }
}
</style>


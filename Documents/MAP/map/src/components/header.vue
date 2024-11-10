<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrap">
    <div class="headerContainer">
      <img src="/img/header_text.png" alt="Kořínek" />
      <nav>
        <RouterLink class="link" to="/">O nás</RouterLink>
        <RouterLink class="link" to="/about">Táborobvý zpravodaj</RouterLink>
        <RouterLink class="link" to="/download">Ke stažení</RouterLink>
        <RouterLink class="link" to="/contacts">Kontakty</RouterLink>
        <RouterLink class="link" to="/messages">Táborobvá pošta</RouterLink>
      </nav>
    </div>
    <img class="wave" src="@/assets/header_wave.svg" alt="">
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;
.wrap{
  position: absolute;
  top:0;
  width: 100%;
.headerContainer {
  width: 100%;
  height: 70px;
  font-family: "Luckiest";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: colors.$clr_white;
  z-index: 3;
  img {
    width: 150px;
    padding: 35px;
    z-index: 4;
  }
  nav {
    padding: 20px;
    .link {
      font-size: 1.2em;
      padding: 20px;
      color: colors.$green_dark;
      text-decoration: none;
      z-index: 5;
    }
  }
}
img.wave{
  position: absolute;
  top:45px;
  width: 100%;
  padding: 0;
  z-index: 1;
  rotate: 0deg;
}}
</style>


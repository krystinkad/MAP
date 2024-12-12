<script setup>
import footerBar from "@/components/footer.vue";
</script>

<template>
  <main>
    <div class="files">
      <h2>soubory ke stažení</h2>
      <span class="divider"></span>
      <p class="text"><i class="fa-solid fa-download"></i> Přihláška</p>
      <span class="divider"></span>
      <p class="text">
        <i class="fa-solid fa-download"></i> Potvrzení o bezinfekčnosti
      </p>
      <span class="divider"></span>
      <p class="text">
        <i class="fa-solid fa-download"></i> Seznam věcí s sebou
      </p>
      <span class="divider"></span>
      <span>
        <h3>Fotky a videa</h3>

        <p class="button">Ke stažení zde</p>
      </span>
    </div>
  </main>
  <img src="/img/korinek_wave_heart.png" class="image" alt="" />

  <img class="wave" src="/img/footer_wave.png" />
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;
h3 {
  text-align: start;
}
main {
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url("/img/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
  z-index: 0;
  overflow: scroll;
  padding: 0;
  .files {
    padding: 30px;
    background-color: colors.$clr_white;
    border-radius: 20px;
    border: colors.$green_primary 3px solid;
    margin-left: 35vw;
    margin-bottom: 10vh;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p.text {
      width: fit-content;
      text-align: start;
      font-size: 1em;
      width: 90%;
      i {
        color: colors.$green_primary;
        font-size: 1em;
      }
      @include mixins.responsive(tablet) {
        align-content: center;
      }
    }
    .divider {
      display: block;
      height: 2px;
      width: 90%;
      align-self: center;
      background-color: colors.$green_primary;
      margin: 15px 0 15px 0;
      @include mixins.responsiveH(610px) {
        margin: 10px 0 10px 0;
      }
    }
    span {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @include mixins.responsive(tablet) {
        align-items: center;
      }
    }

    @include mixins.responsive(1000px) {
      width: 50%;
    }
    @include mixins.responsive(tablet) {
      margin: 0;
      width: 80%;
      display: flex;
      flex-direction: column;
      padding: 20px;
    }
    @include mixins.responsiveH(650px) {
      width: 70%;
      margin-left: 0;
      margin-bottom: 50px;
      padding: 20px;
      margin-top: 40px;
    }
    @include mixins.responsiveH(600px) {
      width: 60%;
      margin-left: 0;
      font-size: 90%;
      margin-top: 50px;

    }
  }
  @include mixins.responsive(tablet) {
    justify-content: center;
  }
  @include mixins.responsiveH(650px) {
    justify-content: center;
    margin: 0;
  }
  @include mixins.responsiveH(550px) {
    height: fit-content;
    margin-bottom: -60px;
    min-height: calc(100vh - 70px);
    height: fit-content;
  }
}
img.image {
  position: absolute;
  bottom: 0;
  max-height: 60vh;
  max-width: 50vw;
  z-index: 6;
  justify-self: end;
  left: 60px;
  z-index: 10;
  margin-bottom: -3px;

  @include mixins.responsive(laptop) {
    max-height: 40vh;
    left: 30px;
  }
  @include mixins.responsive(tablet) {
    max-height: 30vh;
    left: 10px;
  }
  @include mixins.responsive(mobile) {
    display: none;
  }
    @include mixins.responsiveH(600px) {
      display: none;
}
}
img.wave {
  position: absolute;
  bottom: 0;
  rotate: 0deg;
  width: 100vw;
  padding: 0;
  margin-bottom: -3px;
  z-index: 9;
  @include mixins.responsiveH(620px) {
    display: none;
  }
}
.button {
  width: fit-content;
  text-align: center;
}
</style>

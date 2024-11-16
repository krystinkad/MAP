<script setup>
//import footerBar from "@/components/footer.vue";
</script>

<template>
  <main>
    <div class="positions">
      <div>
        <img src="/img/korinek_wave_heart.png" class="image" alt="" />
      </div>
      <div class="files">
        <h2>soubory ke stažení</h2>
        <span class="divider"></span>
        <p><i class="fa-solid fa-download"></i> Přihláška</p>
        <span class="divider"></span>
        <p><i class="fa-solid fa-download"></i> Potvrzení o bezinfekčnosti</p>
        <span class="divider"></span>
        <p><i class="fa-solid fa-download"></i> Seznam věcí s sebou</p>
        <span class="divider"></span>
        <h3>Fotky a videa</h3>
        <p class="button">Ke stažení zde</p>
      </div>
    </div>
    <img class="wave" src="/img/footer_wave.png" />
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;

h2,
h3 {
  font-family: "Luckiest";
  color: colors.$green_dark;
  font-size: 2.8em;
  padding: 25px 0 15px 0;
      @include mixins.responsive(tablet) {
      font-size: 2.2em;
      text-align: center;
    }
    @include mixins.responsive(mobile) {
      font-size: 1.6em;
      padding-top: 10px;
    }
}
main {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url("/img/background2.png");
  background-size: cover;
  background-position: center;
  z-index: 0;
  padding: 0;
  position: unset;
  .positions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .files {
      margin-top: 80px;
      padding: 30px;
      background-color: colors.$clr_white;
      border-radius: 20px;
      border: colors.$green_primary 3px solid;
      width: 25%;
      p {
        font-size: 1.2em;
        i {
          color: colors.$green_primary;
          font-size: 1.2em;
        }
          @include mixins.responsive(tablet) {
            text-align: center;
}
      }
      .divider {
        display: block;
        height: 2px;
        width: 80%;
        background-color: colors.$green_primary;
        margin: 15px 0 15px 0;
      }
      .button {
        font-family: "Luckiest";
        color: colors.$clr_white;
        padding: 15px 20px 10px 20px;
        background-color: colors.$green_primary;
        font-size: 1.5em;
        border-radius: 50px;
        width: fit-content;
      }
      @include mixins.responsive(1000px) {
        width: 50%;
      }
      @include mixins.responsive(tablet) {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
    }
    div {
      img.image {
        position: absolute;
        bottom: 0;
        max-height: 60vh;
        max-width: 50vw;
        z-index: 6;
        justify-self: end;
        left: 60px;
        @include mixins.responsive(laptop) {
          max-height: 50vh;
          left: 30px;
        }
        @include mixins.responsive(tablet) {
          max-height: 40vh;
          left: 10px;
        }
        @include mixins.responsive(mobile) {
          display: none;
        }
      }
    }
    @include mixins.responsive(tablet) {
      justify-content: center;
    }
  }
  img.wave {
    position: absolute;
    bottom: 0;
    rotate: 0deg;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 1;
  }
}
</style>

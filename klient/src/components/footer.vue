<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="footerWrap">
    <div class="contactsWrap">
      <span class="contacts">
        <h3>Sociální sítě</h3>
        <span
          ><i class="fa-brands fa-instagram"></i>
          <p>ldt_korinek</p></span
        >
        <span
          ><i class="fa-brands fa-facebook"></i>
          <p>LDT Kořínek</p></span
        >
        <span
          ><i class="fa-regular fa-envelope"></i>
          <p>marcel.rychtecky@gmail.com</p></span
        >
        <span
          ><i class="fa-solid fa-phone"></i>
          <p>+420 606 863 362</p></span
        >
      </span>
    </div>
    <span class="copy">
      <p>Copyright</p>
      <p class="copysign">&copy;</p>
      <p>Kristýna Dřevikovská 2025</p>
    </span>
    <img class="footer_image" src="/img/korinek_wave_heart.png" alt="" />
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/fontawesome.scss";
@use "@/assets/fonts.scss";
@use "@/assets/mixins.scss" as mixins;

.footerWrap {
  width: 100%;
  height: 260px;
  font-family: "Luckiest";
  position: relative;
  background-image: url("@/assets/footer.svg");
  z-index: 3;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0px;
  margin: 0;

  .contactsWrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding-right: 190px;
      padding-top: 30px;
      padding-bottom: 30px;
      h3 {
        font-size: 1.8em;
        @include mixins.responsive(laptop) {
          padding-top: 30px;

          font-size: 1.5em;
        }
        @include mixins.responsive(tablet) {
          padding-top: 50px;
          font-size: 1em;
        }
      }
      span {
        font-family: "Quicksand", sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        font-size: 1.2em;
        @include mixins.responsive(laptop) {
          font-size: 1em;
        }
        @include mixins.responsive(900px) {
          font-size: 0.8em;
          gap: 10px;
        }
      }
      @include mixins.responsive(1300px) {
        padding-right: 150px;
      }
      @include mixins.responsive(laptop) {
        padding-right: 100px;
      }
      @include mixins.responsive(tablet) {
        padding-top: 10px;
        gap: 5px;
      }
      @include mixins.responsive(555px) {
        padding-top: 10px;
        padding-bottom: 40px;
        padding-right: 50px;
      }
      @include mixins.responsive(mobile) {
        padding-right: 0;
        align-items: center;
      }
    }
    @include mixins.responsive(mobile) {
      align-items: center;
    }
  }
  .copy {
    font-family: "Quicksand", sans-serif;
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;
    .copysign {
      font-size: 1.4em;
      font-weight: 300;
      @include mixins.responsive(laptop) {
        font-size: 1.2em;
        align-items: flex-end;
      }
    }
    @include mixins.responsive(900px) {
      justify-content: end;
      width: 100%;
      align-self: flex-end;
      margin: 0;

      margin-right: 20px;
    }
    @include mixins.responsive(tablet) {
      font-size: 0.8em;
      margin-right: 60px;
    }
    @include mixins.responsive(555px) {
      font-size: 0.6em;
      margin: 0px;
      justify-content: center;
    }
  }
  @include mixins.responsive(555px) {
    justify-content: end;
    margin: 0;
    text-align: center;
    width: 100%;
    align-self: center;
  }
  @include mixins.responsive(tablet) {
    height: 200px;
    z-index: 0;
  }
  @include mixins.responsive(mobile) {
    height: 190px;
    bottom: 0;
  }
}
img.wave {
  position: absolute;
  bottom: 0;
  rotate: 180deg;
  width: 100%;
  padding: 0;
  z-index: 1;
}
img.footer_image {
  position: absolute;
  bottom: 0;
  padding: 0;
  height: 350px;
  z-index: 4;
  padding-left: 80px;
  @include mixins.responsive(laptop) {
    height: 300px;
    padding-left: 50px;
  }
  @include mixins.responsive(900px) {
    height: 250px;
    padding-left: 30px;
  }
  @include mixins.responsive(tablet) {
    height: 200px;
    padding-left: 25px;
  }
  @include mixins.responsive(555px) {
    height: 150px;
    padding-left: 20px;
  }
  @include mixins.responsive(mobile) {
    display: none;
  }
}
</style>


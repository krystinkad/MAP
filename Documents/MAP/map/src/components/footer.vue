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

.footerWrap {
  width: 100%;
  height: 260px;
  font-family: "Luckiest";
  position: relative;
  background-image: url("@/assets/footer.svg");
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .contactsWrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      padding-right: 190px;
      padding-top: 30px;
      h3 {
        font-size: 1.8em;
      }
      span {
        font-family: "Quicksand", sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        font-size: 1.2em;
      }
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
    }
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
}
</style>


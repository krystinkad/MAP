<script setup>
import headerBar from "@/components/header.vue";
import footerBar from "@/components/footer.vue";
</script>

<template>
  <main class="homePage">
    <img class="heroImage" src="/img/hero_image.png" alt="" />
    <div class="countdown">
      <h2>Další tábor začíná za</h2>
      <div class="countdownCont">
        <div class="countdownPart">
          <p>00</p>
          <p>dní</p>
        </div>
        <div class="countdownPart">
          <p class="separator">:</p>
          <p>&nbsp;</p>
        </div>
        <div class="countdownPart">
          <p>00</p>
          <p>hodin</p>
        </div>
        <div class="countdownPart">
          <p class="separator">:</p>
          <p>&nbsp;</p>
        </div>
        <div class="countdownPart">
          <p>00</p>
          <p>minut</p>
        </div>
        <div class="countdownPart">
          <p class="separator">:</p>
          <p>&nbsp;</p>
        </div>
        <div class="countdownPart">
          <p>00</p>
          <p>sekund</p>
        </div>
      </div>
    </div>
    <div class="aktuality">
      <h2>Aktuality</h2>
      <p>
        Tady budou nějakým způsobem aktuality, netuším jak, out of ideas, konec
        hlášení
      </p>
    </div>
    <div class="separator">
      <span></span>
    </div>

    <div class="sponsors">
      <h2>Podpořili nás</h2>
      <p>tady budou loga sponzorů</p>
    </div>
  </main>
  <footerBar class="bottom"></footerBar>
</template>
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;
h2 {
  font-family: "Luckiest";
  font-size: 2.8em;
  padding: 25px;
}
main.homePage {
  display: flex;
  flex-direction: column;
  gap: 0px;
  .heroImage {
    width: 100%;
    padding: 0;
  }
  .countdown {
    background-color: colors.$green_primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: colors.$clr_white;
    padding: 50px;
    h2 {
      font-size: 1.8em;
    }
    .countdownCont {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom:20px;
      .countdownPart {
        display: flex;
        flex-direction: column;
        align-items: center;
        :first-child {
          font-family: "Luckiest";
          font-size: 3.5em;
        }
        :nth-child(2) {
          font-family: "Quicksand", sans-serif;
          font-size: 1.2em;
          text-transform: uppercase;
        }
      }
      .separator {
        font-family: "Luckiest";
        font-size: 1.8em;
      }
    }
  }
  .aktuality {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    h2 {
      color: colors.$green_dark;
    }
  }
  .separator {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    padding: 40px;
    span {
      height: 3px;
      width: 40%;
      background-color: colors.$green_primary;
      align-self: center;
    }
  }
  .sponsors {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    h2 {
      color: colors.$green_dark;
    }
  }
}
</style>

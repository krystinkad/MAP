<script setup>
import footerBar from "@/components/footer.vue";
import sponsors from "@/components/sponsors.vue";
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
    <div class="separatorLine">
      <span></span>
    </div>

    <sponsors></sponsors>
  </main>
  <footerBar class="bottom"></footerBar>
</template>
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;

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
    color: colors.$clr_white;
    padding: 50px;
    gap: 20px;
    h2{
      color: colors.$clr_white;
    }
/*     h2 {
      text-align: center;
      @include mixins.responsive(tablet) {
        font-size: 2.3em;
      }
      @include mixins.responsive(mobile) {
        font-size: 1.8em;
        padding-top: 10px;
      }
    } */
    .countdownCont {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      padding: 20px 0 20px 0;
      @include mixins.responsive(320px) {
        flex-direction: column;
        gap: 10px;
      }
      .countdownPart {
        display: flex;
        flex-direction: column;
        align-items: center;

        :first-child {
          font-family: "Luckiest";
          font-size: 3.5em;

          @include mixins.responsive(tablet) {
            font-size: 3em;
          }
          @include mixins.responsive(mobile) {
            font-size: 2em;
          }
          @include mixins.responsive(320px) {
            font-size: 1.6em;
          }
        }
        :nth-child(2) {
          font-family: "Quicksand", sans-serif;
          font-size: 1.2em;
          text-transform: uppercase;
          @include mixins.responsive(mobile) {
            font-size: 0.8em;
          }
        }
      }
      .separator {
        font-family: "Luckiest";
        font-size: 1.8em;
        @include mixins.responsive(tablet) {
          font-size: 1.3em;
        }
        @include mixins.responsive(mobile) {
          font-size: 0.8em;
        }
        @include mixins.responsive(320px) {
          display: none;
        }
      }
    }
    @include mixins.responsive(tablet) {
      padding: 20px;
      gap: 10px;
    }
  }
  .aktuality {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
/*     h2 {
      color: colors.$green_dark;
      @include mixins.responsive(tablet) {
        font-size: 1.6em;
      }
      @include mixins.responsive(mobile) {
        font-size: 1.3em;
        padding-top: 10px;
      }
    } */
  }
  .separatorLine {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    padding: 60px;
    span {
      height: 3px;
      width: 40%;
      background-color: colors.$green_primary;
      align-self: center;
    }
  }
}
</style>

<script setup>
import footerBar from "@/components/footer.vue";
import sponsors from "@/components/sponsors.vue";

</script>

<template>
  <div class="about">
    <div class="aboutUs">
      <h2>O nás</h2>
      <p>
        Už od roku 1998, kdy jsme začínali jako tábor Březová, vytváříme pro děti nezapomenutelné prázdniny. Stovky dětí už s námi prožily léto plné her, dobrodružství a nových kamarádů.
Každý rok přinášíme nové téma a zajímavé aktivity, díky kterým se děti nejen baví, ale také učí a rozvíjejí. Naším cílem je, aby se na tábor Kořínek děti těšily a odjížděly s úsměvem na tváři.
Máme za sebou spoustu skvělých let a plánujeme v tom pokračovat. Chceme, aby tábor Kořínek byl místem, kde se děti cítí jako doma a kde si vytvoří vzpomínky na celý život.
      </p>
    </div>
    <!-- <div class="separatorLine">
      <span></span>
    </div>
    <div class="aboutUs">
      <h2>Současnost</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sed
        
      </p>
    </div> -->
    <div class="separatorLine">
      <span></span>
    </div>
    <sponsors></sponsors>
  </div>
  <footerBar></footerBar>
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;

.about {
  padding-top: 60px ;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .aboutUs {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    text-align: center;
    line-height: 1.5;
    h2 {
      color: colors.$green_dark;
    }
  }
  .separatorLine {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    padding-bottom:60px ;
    width: 100%;
    span {
      height: 3px;
      width: 40%;
      background-color: colors.$green_primary;
      align-self: center;
    }
  }
  @include mixins.responsive(tablet){
    padding-top: 10px;
  }
}
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrap">
    <article class="vzkaz">
      <span class="green">
        <p>p.Nemethová,p.Gogolová a všich </p>
        <p>15.07.2024 16:04:43</p>
      </span>
      <p>
        Moc děkujeme za opět krásně zorganizovaný tábor,každý rok jinakzaměřený
        a vždy jedinečný.Strava,vedoucí a zázemí vynikající.Naši kluci se vrací
        každý rok nadšeni.Držíme palce do dalších ročníků bohužel jižbez
        nás,kluci jsou již příští rok staří,ale mají na co
        vzpomínat.DěkujemeHeřman Tomáš
      </p>
    </article>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;
.vzkaz {
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: colors.$clr_white;
    padding: 10px;
    border: 3px solid colors.$green_primary;
    border-radius: 15px;
    gap: 20px;
    line-height: 1.2;
    .green {
        display: flex;
        flex-wrap: wrap;
        color: colors.$green_primary;
        font-weight: 600;
        flex-direction: row;
        gap: 5px;
    }
}
</style>


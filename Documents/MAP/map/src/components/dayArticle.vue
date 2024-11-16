<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>
<template>
  <div class="article">
    <h1>1. den</h1>
    <h2>název článku</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt
      ex, pariatur sapiente doloribus totam perferendis, a maxime quasi quo
      velit et eum, reprehenderit alias doloremque voluptas. Veniam, atque sunt?
    </p>
    <RouterLink class="link" to="/about"><button>číst dál</button></RouterLink>
      <span class="divider"></span>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
h1,h2, button{
    font-family:'Luckiest';
}
h1{
    font-size: 3em;
    color:colors.$green_primary;
}
h2{
    font-size: 1.7em;
    color:colors.$green_dark;

}
.article{
    display: flex;
    flex-direction: column;
    align-self: center;
    gap:20px;
    width: 80%;
    line-height: 1.2;
    button{
        width: 100px;
        padding: 15px 10px 10px 10px;
        border-radius: 30px;
        font-size: 1.15em;
        color:colors.$clr_white;
        background-color:colors.$green_primary;
        border: colors.$green_primary solid 2px;
    }
}
.divider{
    width: 80%;
    height: 3px;
    background-color: colors.$green_primary;
    margin: 30px 0 10px 0;
}
</style>
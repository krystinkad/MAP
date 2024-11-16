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
button{
    font-family:'Luckiest';
}
h1{
    color:colors.$green_primary;
    text-align: start;
}
h2{
    text-align: start;
}
.article{
    display: flex;
    flex-direction: column;
    align-self: center;
    //gap:10px;
    width: 80%;
    line-height: 1.3;
    letter-spacing: 1.2;
    button{
        width: 100px;
        padding: 15px 10px 10px 10px;
        margin: 10px 0 10px 0;
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
    margin: 15px 0 10px 0;
}
</style>
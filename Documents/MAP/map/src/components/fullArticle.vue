<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="article">
    <h1>název článku</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae, a
      itaque porro et ad deleniti tenetur? Porro dolorem nam eveniet expedita
      explicabo ipsum laborum, incidunt, laboriosam voluptatem, distinctio
      quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      nulla accusamus quidem. Et, in fugiat, illo aliquid facere sunt libero
      aperiam dolorum temporibus qui eligendi at quidem cupiditate cumque
      provident!
    </p>
    <section class="gallery">

    </section>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;

h1 {
  color: colors.$green_primary;
  text-align: start;
}
.article {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  line-height: 1.5;
  letter-spacing: 1.2;
  gap:20px;
}
.gallery{
    width: 100%;
}

</style>
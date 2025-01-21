<script setup>
import { RouterLink, RouterView } from "vue-router";
const props = defineProps({
  articleValue: {
    type: Object,
    required: true,
  },
});

</script>
<template>
  <div class="article">
    <h1 v-if="articleValue.day && articleValue.day != 0">{{ articleValue.day }}. den</h1>
    <h2>{{ articleValue.header }}</h2>
    <article v-html="articleValue.content"></article>
    <RouterLink class="link button" to="/article">číst dál</RouterLink>
    <span class="divider"></span>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;

button {
  font-family: "Luckiest";
}

h1 {
  color: colors.$green_primary;
  text-align: start;
}

h2 {
  text-align: start;
}

.article {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  line-height: 1.3;
  letter-spacing: 1.2;
}

.button {
  text-align: center;
}

.link {
  &:hover {
    cursor: default;
  }
}

.divider {
  width: 100%;
  height: 2px;
  background-color: colors.$green_primary;
  margin: 15px 0 10px 0;
}
</style>
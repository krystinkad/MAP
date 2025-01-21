<script setup>
import { text } from "@fortawesome/fontawesome-svg-core";
import { RouterLink, RouterView } from "vue-router";
const props = defineProps({
  childName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  messageTime: {
    type: String,
    required: true
  }
});
</script>

<template>
  <article class="vzkaz">
    <span class="green">
      <p>{{ childName }} </p>
      <p>{{ messageTime }}</p>
    </span>
    <p class="content">
      {{ content }}
    </p>
  </article>
</template>
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;

.vzkaz {
  width: 90%;
  height: fit-content;
  display: flex;
  justify-self: center;
  flex-direction: column;
  background-color: colors.$clr_white;
  padding: 10px;
  border: 3px solid colors.$green_primary;
  border-radius: 15px;
  gap: 20px;
  line-height: 1.5;
  break-inside: avoid;
  margin-bottom: 20px;
  .content{
    hyphens: auto;
  }
}
</style>

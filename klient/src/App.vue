<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerBar from '@/components/header.vue'

</script>

<template>

  <headerBar></headerBar>

  <RouterView/>
</template>

<style scoped lang="scss">

.wraper{
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
headerBar{
  z-index: 10;
}


</style>

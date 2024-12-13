<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from './views/LoginView.vue'
import headerBar from '@/components/header.vue'

</script>

<template>
<headerBar/>
  <RouterView />
</template>

<style scoped>

</style>

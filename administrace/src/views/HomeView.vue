<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'

</script>

<template>
  <main class="flexC"> 
    <form action="">
      <h3>Nový článek</h3>
      <section class="flexC">
        <label for="nadpis">Nadpis článku</label>
        <input type="text" class="input" name="nadpis" id="">
        <textEdit></textEdit>
      </section>
      
    </form>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/styles.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";

h3{
  font-family: 'Luckiest';
}
main{
  align-items: center;
  justify-content: center;
}
form{
  width: 80%;
}
</style>

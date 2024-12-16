<script setup>
import headerBar from '../components/header.vue'

</script>

<template>
  <main class="flexC"> 
    <form action="">
      <h1>Nahrát soubor ke stažení</h1>
      <section class="flexC">
        <label for="nadpis">Název souboru</label>
        <input type="text" class="input" name="nadpis" id="">
        <input type="file" accept=".docx,.pdf" name="" id="">
        <button class="button">Nahrát</button>
      </section>
      
    </form>
  </main>
</template>

<style lang="scss">
@use "@/assets/styles.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";

h1{
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

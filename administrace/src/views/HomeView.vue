<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'

</script>

<template>
  <main class="flexC"> 
    <form action="">
      <h3>Přidat turnus</h3>
      <section class="flexC">
        <label for="year">Rok</label>
        <input type="number" name="year" id="">
        <label for="place">Lokace</label>
        <input type="text" name="place" value="Kořínek" id="">

        <button class="button">Přidat lokaci</button>
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

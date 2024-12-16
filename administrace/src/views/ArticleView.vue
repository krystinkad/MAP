<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'

</script>

<template>
  <main class="flexC"> 
    <form action="" id="new">
      <h1>Nový článek</h1>
      <section class="flexC">
        <label for="nadpis">Nadpis článku</label>
        <input type="text" class="input" name="nadpis" id="">
        <textEdit></textEdit>
        <button class="button">Přidat článek</button>
      </section>
    </form>
    <span class="divider"></span>

    <form action="" id="edit">
      <h1>Upravit článek</h1>
      <section class="flexC">
        <label for="select">Vyberte článek k úpravě</label>
        <select class="input" name="select" id="">
          <option value="">Clanek1</option>
          <option value="">Clanke1</option>
        </select>
        <label for="nadpis">Nadpis článku</label>
        <input type="text" class="input" name="nadpis" id="">
        <textEdit></textEdit>
        <button class="button">Upravit článek</button>
      </section>
    </form>
    <span class="divider"></span>
    <form action="" id="delete">
      <h1>Smazat článek</h1>
      <section class="flexC">
        <select class="input" name="select" id="">
          <option value="">Clanek1</option>
          <option value="">Clanke1</option>
        </select>
        <!--VYpsat článek-->
        <button class="button">Smazat článek</button>
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

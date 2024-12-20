<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'
import router from '@/router';

const token = localStorage.getItem("token");

if (!token) {
    router.push("/");
}
</script>

<template>
  <main class="flexC"> 
    <form action="" id="new">
      <h3>Nový článek</h3>
      <section class="flexC">
        <label for="nadpis">Nadpis článku</label>
        <input type="text" class="input" name="nadpis" id="">
        <textEdit></textEdit>
        <button class="button">Přidat článek</button>
      </section>
    </form>
    <span class="divider"></span>

    <form action="" id="edit">
      <h3>Upravit článek</h3>
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
      <h3>Smazat článek</h3>
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

<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'

</script>

<template>
  <main class="flexR"> 
    <section class="flexC">
    <form action="">
      <h1>Nahrát fotky</h1>
      <section class="flexC">
        <label for="folderName">Název složky</label>
        <input type="text" class="input" name="folderName" id="">
        <input type="file" multiple accept=".jpg,.png,.ARW,.CR2" name="galerie" id="">
        <button class="button">Nahrát složku do galerie</button>
      </section>
    </form>
    <form action="">
      <h1>Odstranit fotky</h1>
      <section class="flexC">
        <label for="images">Vyberte soubror</label>
        <select class="input" name="images" id="">
          <option value="">imdw</option>
          <option value="dwdwa">dwdaw</option>
        </select>
        <button class="button">Odstranit z galerie</button>
      </section>
    </form>
  </section>
  <aside>
    <p>Zobrazení složek</p>
  </aside>
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
  width: 80vw;
}
form{
}
aside{
  width: 10vw;
}
</style>

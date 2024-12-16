<script setup>

</script>

<template>
  <div>
  <main class="flexR"> 
    <section class="flexC">
    <form action="">
      <h3>Nahrát fotky</h3>
      <section class="flexC">
        <label for="folderName">Název složky</label>
        <input type="text" class="input" name="folderName" id="">
        <input type="file" multiple accept=".jpg,.png,.ARW,.CR2" name="galerie" id="">
        <button class="button">Nahrát složku do galerie</button>
      </section>
    </form>
    <form action="">
      <h3>Odstranit fotky</h3>
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
</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main{
  //margin: 0 100px 0 100px;
  gap: 50px;
  width: 90%;
  display: flex;
  align-self: center;
  width: 80%;
}
section{
  width: 70%;
}
aside{
  padding-top: 50px;
}
</style>

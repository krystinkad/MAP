<script setup>
</script>
<template>
  <main>
    <h2>Podpořili nás</h2>
    <section>
      <img src="/img/sponsors/AZUS.png" alt="" />
      <img src="/img/sponsors/Emtera_RGB_72.png" alt="" />
      <img src="/img/sponsors/kynsperk.png" alt="" />
      <img src="/img/sponsors/brezova.png" alt="" />
      <img src="/img/sponsors/TVAR.png" alt="" />
    </section>
  </main>
</template>
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;
main {
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
  h2 {
    font-family: "Luckiest";
    font-size: 2.8em;
    padding: 25px;
    color: colors.$green_dark;
  }
  section {
    width: 60%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:50px;
    align-items: center;
    justify-content: center;
    filter: grayscale(1);
    img {
      max-width: 200px;
      height: auto;
    }
  }
}
</style>
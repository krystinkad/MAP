<script setup>
</script>

<template>
  <main>
    <form action="" class="flexC">
      <h1>Přihlaste se</h1>
      <label for="name">Jméno</label>
      <input class="input" type="text" name="" id="">
      <label for="pass">Heslo</label>
      <input class="input" type="password" name="pass" id="">
      <button class="button">Přihlásit se</button>
    </form>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/styles.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";

main{
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  top:0;
}
form{
  width: 40%;
}

</style>
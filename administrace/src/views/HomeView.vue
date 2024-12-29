<script setup>

import { onBeforeMount, ref, watch } from 'vue';
import { serverAddress } from '../stores/address.js'
const add = serverAddress();
const location = ref("");
const turnusYear = ref();
const username = ref();
const password = ref();


const createTurnus = async () => {
  event.preventDefault();
  await fetch(`${add.address}/settings/createTurnus`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      location: location.value,
      turnusYear: turnusYear.value
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
};

const createUser = async () => {
  event.preventDefault();
  await fetch(`${add.address}/settings/createUser`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: username.value,
      password: password.value
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
};
</script>

<template>
  <main class="flexC"> 
    <form action="">
      <h3>Přidat turnus</h3>
      <section class="flexR">
        <span>
          <label for="year">Rok</label>
          <input v-model="turnusYear" type="number" name="year" id="">
        </span>
        <span>
          <label for="place">Název</label>
          <input v-model="location" type="text" name="place" id="">          
        </span>
      </section>
      <button class="button" @click="createTurnus">Přidat turnus</button>
    </form>
    <!--Odstranit turnus-->

    <form action="">
      <h3>Vytvořit uživatele</h3>
      <section class="flexR">
        <span>
          <label for="year">Jméno</label>
          <input v-model="username" type="text" name="year" id="" value="user">
        </span>
        <span>
          <label for="pass">Heslo</label>
          <input v-model="password" type="text" name="pass" value="" id="">          
        </span>
      </section>
      <button class="button" @click="createUser">Vytvořit uživatele</button>
    </form>

    <!--Odstranit uživatele-->
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
  margin-top: 50px;
}
form{
  width: 80%;
}
.flexR{
  gap:20px;
  span{
    display: flex;
    gap:10px;
  }
}
input{
  height: 1.2em;
}
</style>

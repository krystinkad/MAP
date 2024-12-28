<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'
import router from '@/router';
import { onBeforeMount, ref } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const header = ref("");
const editorData = ref("");
const uploadArticle = async () => {
    event.preventDefault();  
    console.log(`http://localhost:5174/articles/uploadArticle`)
    await fetch(`${add.address}/articles/uploadArticle`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          header: header.value,
          //editorData: editorData.value
        })
    })/* .then(response => {
        console.log(response)
        if (!response.ok) {
            return Promise.reject('Login failed with status ' + response.status);
        }
        return response.json();
    }).then(( token ) => {
        localStorage.setItem("token", token.token);
        router.push("/article");
    }) */.catch(error => {
        console.error('Error stink during login:', error);
    }); 
};

onBeforeMount(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/");
  }
})

</script>

<template>
  <main class="flexC">
    <form action="" id="new">
      <h3>Nový článek</h3>
      <section class="flexC">
        <label for="nadpis">Nadpis článku</label>
        <input v-model="header" type="text" class="input" name="nadpis" id="">
        <textEdit v-model="editorData"></textEdit>
        <button class="button" @click="uploadArticle">Přidat článek</button>
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

h3 {
  font-family: 'Luckiest';
}

main {
  align-items: center;
  justify-content: center;
}

form {
  width: 80%;
}
</style>

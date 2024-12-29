<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'
import router from '@/router';
import { onBeforeMount, ref } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const header = ref("");
const editorData = ref("");
const yearsArray = ref([]);
const yearValue = ref([]);
const day = ref();

const getAllYears = async () => {
  await fetch(`${add.address}/articles/getYears`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      yearsArray.value = [];
      for (let i = 0; i < data.length; i++) {
        yearsArray.value.push(data[i])
      }
      console.log(yearsArray.value)
      yearsArray.value.reverse();
    })
}

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
      year_id: yearValue.value,
      day: day.value
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
};

onBeforeMount(() => {
  getAllYears()
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
        <section class="flexR">
          <span>
            <label for="nadpis">Nadpis článku</label>
            <input v-model="header" type="text" class="input" name="nadpis" id="">
          </span>
          <span>
            <label for="year">Turnus</label>
            <select v-model="yearValue" name="year" id="options">
              <option v-for="year in yearsArray" :value="year.id">{{ year.turnusYear }}</option>
            </select>
          </span>
          <span>
            <label for="day">Den č.</label>
            <input v-model="day" type="number" class="input day" name="day" id="">
          </span>
        </section>
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

#new {
  span{
    display: flex;
    gap:5px;
  }
  margin-top: 50px;

  label {
    align-self: center;
  }

  .day {
    min-width: 30px;
  }
}
</style>

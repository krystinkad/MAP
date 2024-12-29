<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'
import router from '@/router';
import { onBeforeMount, ref, watch } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const header = ref("");
const editorContent = ref("");
const yearsArray = ref([]);
const yearValue = ref(14);
const articlesArray = ref([]);
//const articleValue = ref("");
const day = ref();
const delete_id = ref();

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
      yearsArray.value.reverse();
    })
}
const getArticles = async () => {
  await fetch(`${add.address}/articles/getArticles/${yearValue.value}`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      articlesArray.value = [];
      for (let i = 0; i < data.length; i++) {
        articlesArray.value.push(data[i])
      }
      articlesArray.value.reverse();
    })
}

const uploadArticle = async () => {
  event.preventDefault();
  await fetch(`${add.address}/articles/uploadArticle`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      header: header.value,
      year_id: yearValue.value,
      day: day.value,
      content: editorContent.value
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
  getArticles()
};

const deleteArticle = async () => {
  event.preventDefault();
  await fetch(`${add.address}/articles/deleteArticle`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({
      delete_id: delete_id.value,
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
  getArticles()
};

watch(yearValue, () => {getArticles()})

onBeforeMount(() => {
  getAllYears()
  getArticles()
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/");
  }
})

</script>

<template>
  <main class="flexC">
    <section class="flexR">
      <label for="year">Upravovat turnus: </label>
      <select v-model="yearValue" name="year" id="options">
        <option v-for="year in yearsArray" :value="year.id">{{ year.turnusYear }}</option>
      </select>
    </section>

    <form action="" id="new">
      <h3>Nový článek</h3>
      <section class="flexC">
        <section class="flexR">
          <span>
            <label for="nadpis">Nadpis článku</label>
            <input v-model="header" type="text" class="input" name="nadpis" id="">
          </span>
          <span>
            <label for="day">Den č.</label>
            <input v-model="day" type="number" class="input day" name="day" id="">
          </span>
        </section>
        <textEdit v-model="editorContent"></textEdit>
        <button class="button" @click="uploadArticle">Přidat článek</button>
      </section>
    </form>
    <span class="divider"></span>

<!--     <form action="" id="edit">
      <h3>Upravit článek</h3>
      <section class="flexC">
        <label for="article">Vyberte článek k úpravě</label>
          <select v-model="articleValue" name="article" id="options">
            <option v-for="article in articlesArray" :value="article.id">{{ article.header }}</option>
          </select>
        <label for="nadpis">Nadpis článku</label>
        <input type="text" class="input" name="nadpis" id="">
        <textEdit></textEdit>
        <button class="button">Upravit článek</button>
      </section>
    </form> -->
    <span class="divider"></span>
    <form action="" id="delete">
      <h3>Smazat článek</h3>
      <section class="flexC">
        <section class="flexR">
          <label for="article">Článek</label>
          <select v-model="delete_id" name="article" id="options">
            <option v-for="article in articlesArray" :value="article.id">{{ article.header }}</option>
          </select>
        </section>
        <button class="button" @click="deleteArticle">Smazat článek</button>
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
  margin-top: 50px;

  align-items: center;
  justify-content: center;
}

form {
  width: 80%;
}
.flexR{
  width: 80%;
  justify-content:start;
}
#new {
  span {
    display: flex;
    gap: 5px;
  }

  label {
    align-self: center;
  }

  .day {
    min-width: 30px;
  }
}
</style>

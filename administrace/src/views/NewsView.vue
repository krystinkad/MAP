<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'
import router from '@/router';
import { onBeforeMount, ref } from 'vue';

import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const newsTime = ref(getCurrentDatetime());
const newsContent = ref("");
const deleteValue = ref("");
const newsArray = ref([""]);

const getAllNews = async () => {
  await fetch(`${add.address}/news/getNews`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      newsArray.value = [];
      for (let i = 0; i < data.length; i++) {
        newsArray.value.push(data[i])
      }
    })
}

const createNews = async () => {
  event.preventDefault();
  const isoToDate = new Date(newsTime.value);
  const middleEurope = new Date(isoToDate.getTime() + 60 * 60 * 1000);

  await fetch(`${add.address}/news/createNews`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      news_date: middleEurope.toISOString(),
      content: newsContent.value
    })
  })
  .catch(error => {
    console.error('Error during login:', error);
  });
  location.reload();
};
//do budoucna upravit novinky
const deleteNews = async () => {
  event.preventDefault();
  await fetch(`${add.address}/news/deleteNews`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({
      delete_id: deleteValue.value
    })
  }).catch(error => {
    console.error('Error ndnwjdnwj during login:', error);
  });
  location.reload();
};

function getCurrentDatetime() {
  const now = new Date();
  return now;
}

onBeforeMount(() => {
  getAllNews()
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/");
  }
})
</script>

<template>
  <main class="flexC">
    <form action="">
      <h3>Přidat aktualitu</h3>
      <section class="flexC">
        <label for="date">Datum</label>
        <input v-model="newsTime" type="datetime-local" name="date" id="">
        <input v-model="newsContent" type="text" name="" id="">
        <button class="button" @click="createNews">Přidat aktualitu</button>
      </section>
    </form>
    <form action="">
      <h3>Odstranit aktualitu</h3>
      <section class="flexC">
        <select v-model="deleteValue" name="" id="options">
          <option v-for="news in newsArray" :value="news.id">{{ news.content }}</option>
        </select>
        <button class="button" @click="deleteNews">Odstranit aktualitu</button>
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

  input {
    width: min-content;
  }

  option {
    color: black;
  }
}
</style>

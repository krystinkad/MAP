<script setup>
import router from '@/router';
import { onBeforeMount, ref, watch } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const yearValue = ref(14);
const yearsArray = ref([]);
const articlesArray = ref([]);
const article_id = ref();
const fileInput = ref([]);


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

const uploadPhotos = async () => {
  event.preventDefault();
  const formData = new FormData();

for (const file of fileInput.value) {
    formData.append('photos', file);
}

  await fetch(`${add.address}/photos/uploadPhotos`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      articleId: article_id.value,
      formData
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
};

watch(yearValue, () => { getArticles() })

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
  <div>
    <main class="flexR">
      <section class="flexR">
        <label for="year">Upravovat turnus: </label>
        <select v-model="yearValue" name="year" id="options">
          <option v-for="year in yearsArray" :value="year.id">{{ year.turnusYear }}</option>
        </select>
      </section>
      <section class="flexC">
        <form action="">
          <h3>Nahrát fotky</h3>
          <section class="flexC">
            <label for="article">Článek</label>
            <select v-model="article_id" name="article" id="options">
              <option v-for="article in articlesArray" :value="article.id">{{ article.header }}</option>
            </select>
            <input type="file" multiple accept=".jpg,.png,,jpeg,.gif,.ARW,.CR2" name="galerie" id="">
            <button class="button" @click="uploadPhotos">Nahrát složku do galerie</button>
          </section>
        </form>
<!--         <form action="">
          <h3>Odstranit fotky</h3>
          <section class="flexC">
            <label for="images">Vyberte soubror</label>
            <select multiple class="input" name="images" id="">
              <option value="">imdw</option>
              <option value="dwdwa">dwdaw</option>
            </select>
            <button class="button">Odstranit z galerie</button>
          </section>
        </form> -->
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

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main {
  //margin: 0 100px 0 100px;
  gap: 50px;
  width: 90%;
  display: flex;
  align-self: center;
  width: 80%;
  margin-top: 50px;
}
section {
  width: 70%;
}
</style>

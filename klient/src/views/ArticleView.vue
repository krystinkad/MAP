<script setup>
import { serverAddress } from '../stores/address.js'
import { ref, onBeforeMount, onMounted } from 'vue';
import fullArticle from '@/components/fullArticle.vue'
import footerBar from "@/components/footer.vue";


const add = serverAddress();
const articlesArray = ref([]);
const selectedArticle = ref({});

const getArticles = async () => {
  await fetch(`${add.address}/articles/getArticles/${14}`, {
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
    console.log(articlesArray.value)
    if (articlesArray.value.length > 0) {
    selectedArticle.value = articlesArray.value[0];
  }
}
 
const changeSelected = (article) => {
  selectedArticle.value = null;
  selectedArticle.value = article;
  console.log(selectedArticle.value)
};
 

onBeforeMount(() => {
getArticles()
})
</script>

<template>
  <div class="wrap">
    <aside>
      <section class="" v-for="article in articlesArray">
        <p @click="changeSelected(article)" :key="article.id" :class="selectedArticle.id === article.id ? 'selected' : ''">
          {{ "den " + article.day + " - " + article.header }} </p>
      </section>
    </aside>
    <main>
      <fullArticle :articleContent="selectedArticle"></fullArticle>
    </main>
  </div>
  <footerBar></footerBar>
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;

.wrap {
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  margin-bottom: -80px;
  aside {
    width: 30vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap:20px;
    line-height: 1.4;
    border-right: 2px colors.$green_primary solid;
    padding-bottom: 60px;
    margin-bottom: 150px;

    section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0 20px 0 50px;
      p {
        font-size: 1.1em;
        &:hover {
          cursor: pointer;
        }
        @include mixins.responsive(tablet) {
          min-width: 150px;
          text-align: center;
        }
      }
      .selected {
        font-family: Luckiest;
        font-size: 1.2em;
        color: colors.$green_dark;

        &:hover {
          cursor: pointer;
        }

        @include mixins.responsive(tablet) {
          min-width: 130px;
          margin-top: -5px;
        }
      }
      h4 {
        &:hover {
          cursor: pointer;
        }
        @include mixins.responsive(tablet) {
          min-width: 130px;          text-align: center;

          margin-top: -5px;
        }
      }
      @include mixins.responsive(tablet) {
        flex-direction: row;
        gap: 10px;
        margin: 10px 0 10px 0;
      }
    }
    @include mixins.responsive(tablet) {
      border-bottom: 3px colors.$green_primary solid;
      border-right: none;
      width: 90%;
      overflow: scroll;
      justify-content: start;
      padding-bottom: 20px;
      align-self: center;
      margin-bottom: 20px
    }
  }
  main {
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 20px;
    gap: 40px;
    width: 80%;
        margin-bottom: 150px;

    span {
      display: flex;
      flex-direction: row;
      gap: 20px;
      width: 80%;
      margin: 0 20px 0 20px;
      justify-content: start;
      align-self: center;
      p {
        transition: ease 0.2s;

        &:hover {
          transition: ease 0.2s;
          cursor: pointer;
          scale: 1.05;
        }
      }
    }
    @include mixins.responsive(tablet) {
      width: 90%;
      padding-top: 40px;
      align-self: center;
      padding-bottom: 50px;
      margin-bottom: 100px;
    }
        @include mixins.responsive(mobile) {
      width: 90%;
      padding-top: 40px;
      align-self: center;
      margin-bottom: 50px;
    }
  }

  @include mixins.responsive(tablet) {
    flex-direction: column;
    padding-top: 40px;
  }
}
</style>

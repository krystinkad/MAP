<script setup>
import { serverAddress } from '../stores/address.js'
import { ref, onBeforeMount, onMounted, computed } from 'vue';
import fullArticle from '@/components/fullArticle.vue'
import footerBar from "@/components/footer.vue";
import { useRouter, useRoute } from 'vue-router'
import showImage from "@/components/showImage.vue";


const add = serverAddress();
const articlesArray = ref([]);
const selectedArticle = ref({});

const route = useRoute();
const router = useRouter();
const yearID = computed(() => route.params.id);
const articleID = computed(() => route.params.articleID);
//const isVisible = ref(true)

const getArticles = async () => {
  await fetch(`${add.address}/articles/getArticles/${yearID.value}`, {
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
    if (articlesArray.value.length > 0) {
    selectedArticle.value = articlesArray.value.find(article => article.id == articleID.value);
      console.log(articleID.value)
  }
}
 
const changeSelected = (article) => {
  selectedArticle.value = article;
  router.push({
    name: route.name, 
    params: { 
      id: yearID.value,
      articleID: article.id 
    }
  });
};
 

onBeforeMount(() => {
getArticles()
})
</script>

<template>
  <div class="wrap">
<!--     <showImage class="fullImage"></showImage>
 -->    <aside>
      <section class="articleButton" v-for="article in articlesArray">
        <p :class="selectedArticle.id === article.id ? 'selected' : ''" :style="{ display: article.day != null && article.day != 0 ? 'block' : 'none' }" class="day">{{  "den " + article.day + " - "  }}</p>
        <p @click="changeSelected(article)" :key="article.id" :class="selectedArticle.id === article.id ? 'selected' : ''">
          {{article.header }} </p>
      </section>
    </aside>
    <main v-if="selectedArticle.id != undefined" :key="selectedArticle">
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
  overflow: hidden;

  aside {
    min-width: 30vw;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap:20px;
    line-height: 1.4;
    border-right: 2px colors.$green_primary solid;
    padding-bottom: 60px;
    margin-bottom: 150px;

    section {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin: 0 20px 0 50px;
      gap:2px;
      .day{
        display: inline-block;
        min-width: 60px;
      }
      p {
        font-size: 1.1em;
        &:hover {
          cursor: pointer;
        }
        @include mixins.responsive(tablet) {
          text-align: left;
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
          min-width: 60px;
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
.fullImage{
  position: fixed;
  z-index: 6;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<script setup>
import { serverAddress } from '../stores/address.js'
import { ref, onBeforeMount, onMounted } from 'vue';
import dayArticle from '@/components/dayArticle.vue'
import footerBar from "@/components/footer.vue";


const add = serverAddress();
const turnusArray = ref([]);
const selectedTurnus = ref("");
const articlesArray = ref([]);


const getAllYears = async () => {
  await fetch(`${add.address}/articles/getYears`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      turnusArray.value = [];
      for (let i = 0; i < data.length; i++) {
        turnusArray.value.push(data[i])
      }
      turnusArray.value.reverse();
    })
  if (turnusArray.value.length > 0) {
    selectedTurnus.value = turnusArray.value[0];
  }
  getArticles()
}

const getArticles = async () => {
  await fetch(`${add.address}/articles/getArticles/${selectedTurnus.value.id}`, {
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

const changeSelected = (turnus) => {
  selectedTurnus.value = null;
  selectedTurnus.value = turnus;
  getArticles();
};


onBeforeMount(() => {
  getAllYears();
})

</script>

<template>
  <div class="wrap">
    <aside>
      <section class="flexC" v-for="turnus in turnusArray">
        <p @click="changeSelected(turnus)" :key="turnus.id" :class="selectedTurnus.id === turnus.id ? 'selected' : ''">
          {{ turnus.location + " " + turnus.turnusYear }} </p>
      </section>
    </aside>
    <main>
      <article v-for="article in articlesArray">
        <dayArticle :articleValue="article"></dayArticle>
      </article>
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
    min-width: 20vw;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 20px;
    height: 100%;
    line-height: 1.4;
    border-right: 2px colors.$green_primary solid;
    margin-bottom: 120px;
    margin-right: 50px;

    section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0 20px 0 20px;

      p {
        font-size: 1.1em;

        &:hover {
          cursor: pointer;
        }

        @include mixins.responsive(tablet) {
          min-width: 130px;
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
          align-items: center;
        }
      }

      @include mixins.responsive(tablet) {
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin: 10px 0 10px 0;
      }
    }

    @include mixins.responsive(800px) {
      border-bottom: 2px colors.$green_primary solid;
      border-right: none;
      overflow: scroll;
      justify-content: start;
      padding-bottom: 20px;
      width: 80%;
      align-items: center;
      align-self: center;
      margin: 0;
    }
    @include mixins.responsive(mobile) {
      border-bottom: 2px colors.$green_primary solid;
      border-right: none;
      overflow: scroll;
      justify-content: start;
      padding-bottom: 20px;
      width: 100%;
      align-items: center;
      align-self: center;
      margin: 0;
      font-size: 0.9em;
      padding: 0;
      margin: 0;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    margin: 0 60px 0 20px;
    gap: 40px;
    width: 80%;
    padding-bottom: 250px;

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

    @include mixins.responsive(800px) {
      padding-top: 60px;
      align-self: center;
      align-items: center;
      justify-content: center;
      padding-bottom: 100px;
      margin: 0;
    }
  }

  @include mixins.responsive(800px) {
    flex-direction: column;
    padding-top: 40px;
  }
}
</style>

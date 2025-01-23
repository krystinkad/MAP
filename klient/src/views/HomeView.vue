<script setup>
import footerBar from "@/components/footer.vue";
import sponsors from "@/components/sponsors.vue";
import { ref,onMounted, onUnmounted } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();

const days = ref(10);
const hours = ref(10);
const minutes = ref(10);
const seconds = ref(10);
const daysTxt = ref("dní");
const hoursTxt = ref("hodin");
const minutesTxt = ref("minut");
const secondsTxt = ref("seconds");
const countdownDate = ref( new Date("Jan 29, 2025 15:00:00").getTime());

const newsArray = ref([])

const getDate = async() => {
  await fetch(`${add.address}/config/getTime`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
        const datum = data[0]
        countdownDate.value = new Date(datum)
    })
    updateCountdown()
}

let interval;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate.value - now;

  if (distance < 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    clearInterval(interval);
    return;
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

  if(days.value < 5 && days.value >= 2) daysTxt.value = "dny";
  else if(days.value < 2 && days.value > 0) daysTxt.value = "den";
  else daysTxt.value = "dní";

  if(hours.value < 5 && hours.value >= 2) hoursTxt.value = "hodiny";
  else if(hours.value < 2 && hours.value > 0) hoursTxt.value = "hodina";
  else hoursTxt.value = "hodin";

  if(minutes.value < 5 && minutes.value >= 2) minutesTxt.value = "minuty";
  else if(minutes.value < 2 && minutes.value > 0) minutesTxt.value = "minuta";
  else minutesTxt.value = "minut";

  if(seconds.value < 5 && seconds.value >= 2) secondsTxt.value = "sekundy";
  else if(seconds.value < 2 && seconds.value > 0) secondsTxt.value = "sekunda";
  else secondsTxt.value = "sekund";
};

const getAllNews = async () => {
  await fetch(`${add.address}/news/getNews`, {
    headers: {},
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      newsArray.value = [];
      for (let i = 0; i < data.length; i++) {
        newsArray.value.push(data[i]);
      }
      for (let i = 0; i < newsArray.value.length; i++) {
        const date = new Date(newsArray.value[i].news_date);
        newsArray.value[i].news_date = formatDate(date);
      }
    });
};

function formatDate(date) {
  const months = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}. ${month} ${year}, ${hours}:${minutes}`;
}


onMounted(() => {
  getDate();
  getAllNews()
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <main class="homePage">
    <img class="heroImage" src="/img/hero_image.png" alt="" />
    <div class="countdown">
      <h2>Další tábor začíná za</h2>
      <div class="countdownCont">
        <div class="countdownPart">
          <p>{{ days }}</p>
          <p>{{daysTxt}}</p>
        </div>
        <div class="countdownPart">
          <p class="separator">:</p>
          <p>&nbsp;</p>
        </div>
        <div class="countdownPart">
        <p>{{ hours }}</p>
          <p>{{hoursTxt}}</p>
        </div>
        <div class="countdownPart">
          <p class="separator">:</p>
          <p>&nbsp;</p>
        </div>
        <div class="countdownPart">
          
      <p>{{ minutes }}</p>
          <p>{{minutesTxt}}</p>
        </div>
        <div class="countdownPart">
          <p class="separator">:</p>
          <p>&nbsp;</p>
        </div>
        <div class="countdownPart">
          <p>{{ seconds }}</p>
          <p>{{secondsTxt}}</p>
        </div>
      </div>
    </div>
    <div class="aktuality">
      <h2>Aktuality</h2>
      <section class="" v-for="news in newsArray">
        <p class="b">{{ news.news_date}}</p>
        <p>{{ news.content }}</p>
      </section>
    </div>
    <div class="separatorLine">
      <span></span>
    </div>

    <sponsors></sponsors>
  </main>
  <footerBar class="bottom"></footerBar>
</template>
<style lang="scss" scoped>
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;
@use "@/assets/imports.scss";

main.homePage {
  display: flex;
  flex-direction: column;
  gap: 0px;
  .heroImage {
    width: 100%;
    padding: 0;
  }
  .countdown {
    background-color: colors.$green_primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: colors.$clr_white;
    padding: 50px;
    gap: 20px;
    h2{
      color: colors.$clr_white;
    }
    .countdownCont {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      padding: 20px 0 20px 0;
      @include mixins.responsive(320px) {
        flex-direction: column;
        gap: 10px;
      }
      .countdownPart {
        display: flex;
        flex-direction: column;
        align-items: center;

        :first-child {
          font-family: "Luckiest";
          font-size: 3.5em;

          @include mixins.responsive(tablet) {
            font-size: 3em;
          }
          @include mixins.responsive(mobile) {
            font-size: 2em;
          }
          @include mixins.responsive(320px) {
            font-size: 1.6em;
          }
        }
        :nth-child(2) {
          font-family: "Quicksand", sans-serif;
          font-size: 1.2em;
          text-transform: uppercase;
          @include mixins.responsive(mobile) {
            font-size: 0.8em;
          }
        }
      }
      .separator {
        font-family: "Luckiest";
        font-size: 1.8em;
        @include mixins.responsive(tablet) {
          font-size: 1.3em;
        }
        @include mixins.responsive(mobile) {
          font-size: 0.8em;
        }
        @include mixins.responsive(320px) {
          display: none;
        }
      }
    }
    @include mixins.responsive(tablet) {
      padding: 20px;
      gap: 10px;
    }
  }
  .aktuality {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Quicksand", sans-serif;
    section{
      width: fit-content;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      line-height: 2em;
      @include mixins.responsive(1100px) {
    }
    }
    h2{
      padding-top: 50px;
    }
  }
  .separatorLine {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    padding: 60px;
    span {
      height: 3px;
      width: 40%;
      background-color: colors.$green_primary;
      align-self: center;
    }
  }
}
</style>

<script setup>
import footerBar from "@/components/footer.vue";
import note from "@/components/note.vue";
import { ref,onMounted, onUnmounted } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const messagesArray = ref([])

const childName = ref("");
const messageContent = ref("")

const getMessages = async() => {
  await fetch(`${add.address}/messages/getMessages`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {

        messagesArray.value.push(data[i]);
        
        const date = new Date(messagesArray.value[i].postedDate);
        messagesArray.value[i].postedDate = formatDate(date);
      }
    })
    messagesArray.value.reverse()
}

function formatDate(date) {
  const day = date.getDate();
  const month = (date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}. ${month}. ${year}, ${hours}:${minutes}`;
}


const clearMessage = () =>{
  messageContent.value = ""
  childName.value = ""
}

const sendMessage = async() =>{
  event.preventDefault()
  await fetch(`${add.address}/messages/sendMessage`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body:JSON.stringify({
      childName: childName.value,
      messageContent: messageContent.value,
    })
  }).catch(error => {
    console.error('Error during sending message:', error);
  });
  getMessages()
  childName.value=""
  messageContent.value=""
  location.reload();
}

onMounted(() => {
  getMessages()
});

onUnmounted(() => {
});</script>

<template>
  <main>
    <h1>Táborová pošta</h1>
    <img class="wave wave1" src="@/assets/header_wave.svg" alt="" />
    <section class="sendForm">
      <article class="vzkazy">
        <h2>Vzkazy</h2>
        <p>
          V průběhu konání tábora můžete psát vzkazy vašim dětem. Vzkazy budeme
          dětem denně předávat. <b>Děti vám na ně ale nebudou odpovídat</b>
        </p>
        <p>
          Pokud budete mít nějaký dotaz na vedení tábora kontaktujte nás pomocí
          e-mailu nebo mobilního telefonu.
          <b>Kontakty naleznete <RouterLink class="link" to="/contacts">zde.</RouterLink></b>
        </p>
        <form action="">
          <span>
            <label for="jmeni">Jméno a příjmení dítěte</label>
            <input type="text" name="jmeno" id="" v-model="childName"/>
          </span>
          <textarea
            v-model="messageContent"
            placeholder="Zde napište vzkaz..."
            name=""
            id=""
            cols="15"
            rows="5"
          ></textarea>
          <span class="buttons"
            ><button class="storno" @click="clearMessage">storno</button
            ><button class="send" @click="sendMessage">odeslat</button></span
          >
        </form>
      </article>
      <article class="dopisy">
        <h2>Dopisy</h2>
        <p>
          Během tábora můžete posílat dopisy, pohledy a balíčky.
          <b>Určitě nezapomeňte!</b> Děti jsou pak smutné, když vidí kamarády,
          jak dostávají poštu...a ony nic...
        </p>
        <section class="adresa">
          <p>Tábor VRÁNOV Lomnice</p>
          <p class="green">jméno a příjmení dítěte</p>
          <p>356 01 Sokolov</p>
        </section>
        <p>
          Poštu je možné nechávat v obchodě, kam každý den jezdíme vyzvedávat
          pečivo.
        </p>
        <section class="adresa">
          <p class="green">CBA - Potraviny Na Březové s.r.o.</p>
          <p>Hlavní 100, 356 01 Březová</p>
        </section>
      </article>
    </section>
    <img class="wave" src="@/assets/header_wave.svg" alt="" />

    <section class="vzkazy">
        <note v-for="message in messagesArray" :childName="message.childName" :content="message.content" :messageTime="message.postedDate">
        </note>
    </section>
  </main>
  <footerBar></footerBar>
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;

h2 {
  color: colors.$green_primary;
}
main {
  position: relative;
  width: 100%;
  background-image: url("/img/background.png");
  background-repeat: repeat-y;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  margin-bottom: -30px;
  h1 {
    padding-top: 100px;
    padding-bottom: 50px;
    @include mixins.responsive(tablet) {
      padding-top: 80px;
    }
  }
  img.wave1 {
    rotate: 180deg;
  }
  img.wave {
    width: 100%;
  }
  .sendForm {
    background-color: white;
    margin: -1px;
    width: 100%;
    display: flex;
    flex-direction: row;
    line-height: 1.2;
    justify-content: space-around;
    .vzkazy {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 40%;
      form {
        display: flex;
        gap: 15px;
        flex-direction: column;
        span > input,
        textarea {
          border-radius: 15px;
          border: 3px solid colors.$green_primary;
          padding: 5px;
        }
        span {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          gap: 20px;
          button {
            padding: 5px 15px 5px 15px;
            border-radius: 30px;
            border: 3px solid colors.$green_primary;
            font-weight: 600;
          }
          .storno {
            background-color: colors.$clr_white;
            color: colors.$green_primary;
          }
          .send {
            background-color: colors.$green_primary;
            color: colors.$clr_white;
          }
        }
      }
      @include mixins.responsive(tablet) {
        width: 80%;
      }
    }
    .dopisy {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 40%;
      @include mixins.responsive(tablet) {
        width: 80%;
      }
    }
    @include mixins.responsive(tablet) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px;
      padding: 40px 0 40px 0;
    }
  }
  section.vzkazy {
    margin: 70px;
    width: 90%;
    column-count: 3;
    column-gap: 20px; 
    row-gap: 20px;
    @include mixins.responsive(1000px) {
      column-count: 2;
      column-gap: 20px;
    }
    @include mixins.responsive(555px) {
      column-count: 1;
      gap: 30px;
    }

  }
}
footerBar {
  position: absolute;
  bottom: 0;
}
</style>

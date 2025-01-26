<script setup>

import { onBeforeMount, ref, watch } from 'vue';
import { serverAddress } from '../stores/address.js'
import { remove } from 'ckeditor5';


const add = serverAddress();
const location = ref("");
const turnusYear = ref();
const username = ref();
const password = ref();
const startTime = ref("");
const messagesArray =ref([])
const messageRemove = ref()

const createTurnus = async () => {
  event.preventDefault();
  await fetch(`${add.address}/settings/createTurnus`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      location: location.value,
      turnusYear: turnusYear.value
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
};

const createUser = async () => {
  event.preventDefault();
  await fetch(`${add.address}/settings/createUser`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: username.value,
      password: password.value
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
};

const getTime = async () => {
  await fetch(`${add.address}/settings/getTime`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then((response) => response.json())
    .then((data) => {
      startTime.value = formatToDateTimeLocal(data.value);

      console.log(startTime.value)
    }).catch(error => {
      console.error('Error during loading time:', error);
    });
};

const formatToDateTimeLocal = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const editTime = async () => {
  event.preventDefault();
  await fetch(`${add.address}/settings/editTime`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      startTime: startTime.value
    })
  }).catch(error => {
    console.error('Error during login:', error);
  });
};

const getMessages = async() => {
  await fetch(`${add.address}/messages/getMessages`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      messagesArray.value=[]
      for (let i = 0; i < data.length; i++) {

        messagesArray.value.push(data[i]);
        
        const date = new Date(messagesArray.value[i].postedDate);
      }
    })
}

const removeMessage = async() =>{
  console.log(messageRemove.value)
  event.preventDefault()
  await fetch(`${add.address}/messages/deleteMessage`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body:JSON.stringify({
      message_id: messageRemove.value
    })
  }).catch(error => {
    console.error('Error during sending message:', error);
  });
  getMessages()
}

const removeAllMessages = async() =>{
  event.preventDefault()
  await fetch(`${add.address}/messages/deleteAllMessages`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body:JSON.stringify({})
  }).catch(error => {
    console.error('Error during sending message:', error);
  });
  getMessages()
}

onBeforeMount(() => {
  getTime()
  getMessages()
})
</script>

<template>
  <main class="flexC">
    <form action="">
      <h3>Přidat turnus</h3>
      <section class="flexR">
        <span>
          <label for="year">Rok</label>
          <input v-model="turnusYear" type="number" name="year" id="">
        </span>
        <span>
          <label for="place">Název</label>
          <input v-model="location" type="text" name="place" id="">
        </span>
      </section>
      <button class="button" @click="createTurnus">Přidat turnus</button>
    </form>
    <!--Odstranit turnus-->

    <form action="">
      <h3>Vytvořit uživatele</h3>
      <section class="flexR">
        <span>
          <label for="year">Jméno</label>
          <input v-model="username" type="text" name="year" id="" value="user">
        </span>
        <span>
          <label for="pass">Heslo</label>
          <input v-model="password" type="text" name="pass" value="" id="">
        </span>
      </section>
      <button class="button" @click="createUser">Vytvořit uživatele</button>
    </form>

    <!--Odstranit uživatele-->
    <form action="">
      <h3>Upravit čas odpočtu</h3>
      <section class="flexR">
        <span>
          <label for="time">Počáteční čas</label>
          <input v-model="startTime" type="datetime-local" id="time"> </span>
      </section>
      <button class="button" @click="editTime">Upravit čas</button>
    </form>

    <form action="">
      <h3>Smazat vzkaz</h3>
      <section class="flexR">
        <span>
          <label for="time">Vyberte vzkaz</label>
          <select v-model="messageRemove" name="messages" id="options">
            <option v-for="message in messagesArray" :value="message.id">{{ message.content }}</option>
          </select>
        </span>
      </section>
      <button class="button" @click="removeMessage">Smazat vzkaz</button>
    </form>
    <form action="">
      <h3>Smazat všechny vzkazy</h3>
      <button class="button" @click="removeAllMessages">Smazat všechny vzkazy</button>
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
  margin-top: 50px;
}

form {
  width: 80%;
}

.flexR {
  gap: 20px;

  span {
    display: flex;
    gap: 10px;
  }
}
#options{
  max-width: 70vw;
  overflow: hidden;
  option{
    max-width: 70vw;
    overflow: hidden;
  }
}
input {
  height: 1.2em;
}
</style>

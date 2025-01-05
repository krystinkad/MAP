<script setup>
import router from '@/router';
import { onBeforeMount, ref, watch } from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const file_id = ref();
const header = ref("");
const fileInput = ref([]);
const filesArray = ref([]);

const getFiles = async () => {
  await fetch(`${add.address}/files/getFiles`, {
    headers: {
    },
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => {
      filesArray.value = [];
      for (let i = 0; i < data.length; i++) {
        filesArray.value.push(data[i])
      }
    })
}

const uploadFile = async () => {
  console.log(header.value)
  event.preventDefault();
  const formData = new FormData();

  for (const file of fileInput.value.files) {
    formData.append('file', file);
  }
  const headerCont = header.value
  await fetch(`${add.address}/files/uploadFile/${headerCont}`, {
    method: "POST",
    body: formData
  });
  getFiles()
};

const deleteFile = async () => {
  event.preventDefault();

  console.log(file_id.value);

  await fetch(`${add.address}/files/deleteFile`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body:JSON.stringify({
      file_id: file_id.value
    })
  })
    .then((response) => response.json())
    .then((data) => {
      filesArray.value = [];
      for (let i = 0; i < data.length; i++) {
        filesArray.value.push(data[i])
      }
    })
    getFiles()
}

onBeforeMount(() => {
  getFiles()
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/");
  }
})
</script>

<template>
  <main class="flexC">
    <form action="">
      <h3>Nahrát soubor ke stažení</h3>
      <section class="flexC">
        <label for="nadpis">Zobrazovaný název souboru</label>
        <input type="text" class="input" name="nadpis" v-model="header">
        <input type="file" accept=".docx,.pdf" name="" id="" ref="fileInput">
        <button class="button" @click="uploadFile">Nahrát</button>
      </section>

    </form>
    <form action="">
      <h3>Odebrat soubor ke stažení</h3>
      <section class="flexC">
        <select v-model="file_id" name="file" id="options">
          <option v-for="file in filesArray" :value="file.id">{{ file.displayName }}</option>
        </select>
        <button class="button" @click="deleteFile">Odebrat</button>
      </section>

    </form>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/styles.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";

main {
  align-items: center;
  margin-top: 20px;
}

section {
  width: 80%;
  align-items: start;
}

form {
  width: 80%;
}
</style>

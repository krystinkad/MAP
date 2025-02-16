<script setup>
import router from '@/router';
import { ref,computed, onBeforeMount} from 'vue';
import { serverAddress } from '../stores/address.js'

const add = serverAddress();
const username = ref("");
const password = ref("");

const login = async () => {
    await fetch(`${add.address}/auth/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
    }).then(response => {
        console.log(response)
        if (!response.ok) {
            return Promise.reject('Login failed with status ' + response.status);
        }
        return response.json();
    }).then(( token ) => {
        localStorage.setItem("token", token.token);
        router.push("/article");
    }).catch(error => {
        console.error('Error stink during login:', error);
    }); 
};

onBeforeMount(() => {
    const token = localStorage.getItem('token');
    if (token) {
        fetch(`${add.address}/auth`, {
            headers: {
                "Content-Type": "application/json",
                "token":token
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                token: token
            })
        })
        .then(response => {
            if (response.status === 200) {
                router.push('/info');
            }
             else {
                localStorage.removeItem("token");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            localStorage.removeItem("token");
        });
    }
});</script>

<template>
  <main>
    <div class="flexC">
      <h1>Přihlaste se</h1>
      <label for="name">Jméno</label>
      <input v-model="username" class="input" type="text" name="" id="">
      <label for="pass">Heslo</label>
      <input v-model="password" class="input" type="password" name="pass" id="">
      <button class="button" @click="login">Přihlásit se</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/styles.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";

main{
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  top:0;
}
div{
  width: 40%;
}

</style>
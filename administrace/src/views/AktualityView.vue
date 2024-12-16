<script setup>
import headerBar from '../components/header.vue'
import textEdit from '../components/textEdit.vue'

function getCurrentDatetime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            
            // Combine date and time into the format "YYYY-MM-DDTHH:mm"
            return `${year}-${month}-${day}T${hours}:${minutes}`;
        }
</script>

<template>
  <main class="flexC"> 
    <form action="">
      <h3>Přidat aktualitu</h3>
      <section class="flexC">
        <label for="date">Datum</label>
        <input type="datetime-local" name="date" id="" :value="getCurrentDatetime()">
        <textEdit></textEdit> <!--obyč input?-->
        <button class="button">Přidat aktualitu</button>
      </section>
      
    </form>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/styles.scss" as colors;
@use "@/assets/fonts.scss" as fonts;
@use "@/assets/imports.scss";

h3{
  font-family: 'Luckiest';
}
main{
  align-items: center;
  justify-content: center;
}
form{
  width: 80%;
  input{
    width: min-content;
  }
}
</style>

<script setup>
import footerBar from "@/components/footer.vue";
import dayArticle from "@/components/dayArticle.vue";

</script>

<template>
  <div class="wrap">
    <aside>
      <section>
        <h4>Kořínek 2024</h4>
        <p>Kořínek 2023</p>
        <p>Kořínek 2022</p>
        <p>Vránov 2021</p>        
        <p>Vránov 2020</p>
        <p>Vránov 2019</p>
        <p>Vránov 2018</p>
        <p>Vránov 2017</p>
        <p>Vránov 2016</p>
        <p>Vránov 2015</p>
        <p>Kořen 2014</p>
        <p>Kořen 2013</p>
        <p>Kořen 2012</p>
        <p>Kořen 2011</p>
        <p>Kořen 2010</p>
      </section>
    </aside>
    <main>
      <dayArticle></dayArticle>
            <dayArticle></dayArticle>
      <dayArticle></dayArticle>

    </main>
  </div>
  <footerBar></footerBar>
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
/* h3 {
  font-family: "Luckiest";
  font-size: 1.5em;
  color: colors.$green_primary;
} */
.wrap {
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  margin-bottom: -80px;
  aside {
    width: 30vw;
    display: flex;
    justify-content: center;
    height: 90vh;
    line-height: 1.4;
    border-right: 3px colors.$green_primary solid;

    section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      p{
        font-size: 1.1em;
      }
    }
  }
  main{
    display: flex;
    flex-direction: column;
    margin: 30px;
    gap:40px
  }
}
</style>

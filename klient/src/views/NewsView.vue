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
      <span
        ><p class="button"><i class="fa-solid fa-chevron-left"></i></p>
        <p class="button"><i class="fa-solid fa-chevron-right"></i></p
      ></span>
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
    height: 90%;
    line-height: 1.4;
    border-right: 3px colors.$green_primary solid;
    padding-bottom: 60px;

    section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0 20px 0 20px;
      p {
        font-size: 1.1em;
        &:hover{
          cursor: pointer;
        }
        @include mixins.responsive(tablet) {
          min-width: 130px;
        }
      }
      h4 {       &:hover{
          cursor: pointer;
        }
        @include mixins.responsive(tablet) {
          min-width: 130px;
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
    }
  }
  main {
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 20px;
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
    @include mixins.responsive(tablet) {
      width: 90%;
      padding-top: 60px;
      align-self: center;
      padding-bottom: 100px;
    }
  }

  @include mixins.responsive(tablet) {
    flex-direction: column;
    padding-top: 40px;
  }
}
</style>

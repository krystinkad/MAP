<script setup>
import footerBar from "@/components/footer.vue";
import fullArticle from "@/components/fullArticle.vue";
</script>

<template>
  <div class="wrap">
    <aside>
      <section>
        <h4>1. den - název článku</h4>
        <p>2. den - název článku</p>
        <p>3. den - název článku</p>
        <p>4. den - název článku</p>
        <p>5. den - název článku</p>
        <p>6. den - název článku</p>
        <p>7. den - název článku</p>
        <p>8. den - název článku</p>
        <p>9. den - název článku</p>
        <p>10. den - název článku</p>
        <p>11. den - název článku</p>
        <p>12. den - název článku</p>
      </section>
    </aside>
    <main>
      <fullArticle></fullArticle>
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
    line-height: 1.4;
    border-right: 3px colors.$green_primary solid;
    padding-bottom: 60px;
    margin-bottom: 150px;

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
          min-width: 150px;
          text-align: center;
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
</style>

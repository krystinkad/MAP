<script setup>
import footerBar from "@/components/footer.vue";
</script>

<template>
  <main>
    <h1>Kontakty</h1>
    <section class="contacts">
      <div>
        <article>
          <h4>Martina Nemethová</h4>
          <p>randova7@seznam.cz</p>
          <p>+420 725 184 246</p>
        </article>
        <article>
          <h4>Jiřina Gogolová</h4>
          <p>jirina.gogolova@post.cz</p>
          <p>+420 731 177 543</p>
        </article>
        <article>
          <h4>Adéla Munková</h4>
          <p>+420 601 350 053</p>
        </article>
        <article>
          <h4>Kateřina Spieglová</h4>
          <p>+420 724 989 505</p>
        </article>
        <!--         <article>
          <h4>Adresa tábora</h4>
          <p>Tábor VRÁNOV Lomnice</p>
          <p class="green">jméno a příjmení dítěte</p>
          <p>356 01 Sokolov</p>
        </article> -->
      </div>
    </section>
  </main>
  <footerBar></footerBar>
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
@use "@/assets/mixins.scss" as mixins;
h4 {
  color: colors.$green_primary;
}
main {
  min-height: calc(100vh - 70px - 260px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  h1 {
    padding-top: 60px;
    @include mixins.responsive(tablet) {
      padding-top: 30px;
    }
    @include mixins.responsive(mobile) {
      padding-top: 20px;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    width: 50%;
    div {
      width: 100%;
      display: grid;
      gap: 30px;
      grid-template-columns: 1fr 1fr;
      text-align: center;

      article {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        @include mixins.responsive(mobile) {
          font-size: 0.9em;
        }
      }
      @include mixins.responsive(mobile) {
        grid-template-columns: 1fr;
      }
    }
    @include mixins.responsive(tablet) {
      width: 90%;
    }
  }
  @include mixins.responsive(tablet) {
    height: calc(100vh - 70px - 200px);
  }
  @include mixins.responsiveH(670px) {
    padding-bottom: calc(670px - 100vh);
  }
  @include mixins.responsive(mobile) {
    height: calc(100vh - 70px - 190px);
    gap: 20px;
  }
}
footerBar {
  position: absolute;
  bottom: 0;
  rotate: 0deg;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 1;
}
</style>

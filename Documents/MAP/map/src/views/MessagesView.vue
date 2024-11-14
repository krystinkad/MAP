<script setup>
import footerBar from "@/components/footer.vue";
import note from "@/components/note.vue";
</script>

<template>
  <main>
    <h2>Táborová pošta</h2>
    <img class="wave wave1" src="@/assets/header_wave.svg" alt="" />
    <section class="sendForm">
      <article class="vzkazy">
        <h3>Vzkazy</h3>
        <p>
          V průběhu konání tábora můžete psát vzkazy vašim dětem. Vzkazy budeme
          dětem denně předávat. <b>Děti vám na ně ale nebudou odpovídat</b>
        </p>
        <p>
          Pokud budete mít nějaký dotaz na vedení tábora kontaktujte nás pomocí
          e-mailu nebo mobilního telefonu.
          <b>Kontakty naleznete <a href="">zde.</a></b>
        </p>
        <form action="">
          <span>
            <label for="jmeni">Jméno a příjmení dítěte</label>
            <input type="text" name="jmeno" id="" />
          </span>
          <textarea
            placeholder="Zde napište vzkaz..."
            name=""
            id=""
            cols="15"
            rows="5"
          ></textarea>
          <span class="buttons"
            ><button class="storno">storno</button
            ><button class="send">odeslat</button></span
          >
        </form>
      </article>
      <article class="dopisy">
        <h3>Dopisy</h3>
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
      <note></note> <note></note>
      <note></note>

    </section>
  </main>
 <footerBar></footerBar>
</template>

<style scoped lang="scss">
@use "@/assets/colors.scss" as colors;
b {
  font-weight: 600;
}
.green {
  color: colors.$green_primary;
  font-weight: 600;
}
h2,
h3 {
  font-family: "Luckiest";
  color: colors.$green_primary;
  font-size: 2.8em;
  padding: 25px 0 15px 0;
}
main {
  //height: calc(100vh - 70px);
  position: relative;
  width: 100%;
  background-image: url("/img/background.png");
  background-repeat: repeat-y;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:60px;
  margin-bottom: -30px;
  h2 {
    padding-top: 70px;
    font-size: 3em;
    color: colors.$green_dark;
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
    }
    .dopisy {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 40%;
    }
  }
  section.vzkazy {
    padding: 70px;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
footerBar {
  position: absolute;
  bottom: 0;
}
</style>

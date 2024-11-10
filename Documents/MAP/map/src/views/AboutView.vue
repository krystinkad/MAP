<script setup>
import footerBar from "@/components/footer.vue";

</script>

<template>
  <div class="about">
    <div class="aboutUs">
      <h2>Historie</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sed
        cupiditate, dolorem vel maiores, voluptatibus consectetur saepe dolores
        omnis est, officiis voluptates! Excepturi ipsa dolores laudantium veniam
        est dolorum odio. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempore laboriosam eum maiores rerum esse non ipsum consectetur,
        ducimus similique dolorum quod ratione odit unde maxime aliquam
        quibusdam iusto, temporibus ipsa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellendus autem illum odit eligendi. Dolor libero
        quasi alias odit, laboriosam, animi fuga dolore repellendus, eveniet
        error numquam id et saepe esse. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime dolores facilis id maiores optio vel modi a
        architecto corporis, esse consequatur quaerat ipsa aperiam, itaque
        soluta iusto adipisci molestiae quas?
      </p>
    </div>
    <div class="separatorLine">
      <span></span>
    </div>
    <div class="aboutUs">
      <h2>Současnost</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sed
        cupiditate, dolorem vel maiores, voluptatibus consectetur saepe dolores
        omnis est, officiis voluptates! Excepturi ipsa dolores laudantium veniam
        est dolorum odio. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Velit maxime dicta perferendis facere molestiae minus architecto
        placeat consequuntur eos. Impedit natus error distinctio ab quia
        commodi, quas voluptatum ducimus sapiente. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quibusdam, ea? Alias suscipit voluptatibus
        quos cumque, animi excepturi accusamus, error eveniet adipisci libero
        tempore hic eius? Molestias inventore odit consequuntur quos. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa rem a
        deserunt optio perspiciatis consequuntur explicabo iusto inventore
        beatae amet nobis, atque modi quibusdam dolorum dolores aspernatur?
        Cupiditate, ea.
      </p>
    </div>
    <div class="separatorLine">
      <span></span>
    </div>
    <div class="sponsors aboutUs">
      <h2>Podpořili nás</h2>
      <p>tady budou loga sponzorů</p>
    </div>
  </div>
  <footerBar></footerBar>
</template>

<style scooped lang="scss">
@use "@/assets/colors.scss" as colors;

h2 {
  font-family: "Luckiest";
  font-size: 2.8em;
  padding: 25px;
}
.about {
  padding-top: 60px ;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .aboutUs {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Quicksand", sans-serif;
    text-align: center;
    h2 {
      color: colors.$green_dark;
    }
  }
  .separatorLine {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    padding-bottom:60px ;
    width: 100%;
    span {
      height: 3px;
      width: 40%;
      background-color: colors.$green_primary;
      align-self: center;
    }
  }
}
</style>

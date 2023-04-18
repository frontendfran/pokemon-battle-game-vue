<template>
  <!-- conditionals here for the different screens -->
  <section class="battle" v-if="screen === 'battle'">
    <div class="battle__trainer">
      <div class="text utility__visibly-hidden">
        <h2>Eevee {{ trainerHealth }}</h2>
      </div>
      <div class="image">
        <img src="../images/eevee.png">
      </div>
    </div>

    <div class="battle__pokemon">
      <div class="text utility__visibly-hidden">
        <h2>Pikachu {{ pokemonHealth }}</h2>
      </div>
      <div class="image">
        <img src="../images/pikachu.png">
      </div>
    </div>
  </section>

  <section v-else>
    Different screen goes here
  </section>

</template>

<script>
  export default {
    props: {
      trainerHealth: {
        type: Number,
        required: true,
      },
      pokemonHealth: {
        type: Number,
        required: true,
      },
      screen: {
        type: String,
        required: true,
      }
    },
  };
</script>

<style lang="scss">
  .battle {
    padding-top: 140px;

    &__trainer {
      display: flex;
      justify-content: space-between;
    }

    &__pokemon {
      display: flex;
      justify-content: space-between;
      direction: rtl;
    }
  }
</style>

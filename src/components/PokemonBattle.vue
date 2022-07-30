<template>
  <!-- conditionals here for the different screens -->
  <section class="battle" v-if="screen === 'battle'">
    <div class="battle__trainer">
      <div class="text">
        <h2>Trainer {{ trainerHealth }}</h2>
      </div>
      <div class="image">
        <img src="https://via.placeholder.com/100/09f/fff.png">
      </div>
    </div>

    <div class="battle__pokemon">
      <div class="text">
        <h2>Pokemon {{ pokemonHealth }}</h2>
      </div>
      <div class="image">
        <img src="https://via.placeholder.com/100/09f/fff.png">
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
    padding-top: 130px;

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

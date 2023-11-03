<template>
  <!-- conditionals here for the different screens -->
  <section class="battle" v-if="screen === 'battle'">
    <div class="battle__trainer">
      <div class="text">
        <h2>Eevee</h2>
        <div class="healthpoints">
          <div class="healthpoints__value">HP:</div> <div class="healthpoints__bar" v-bind:style="pokemonBarStyles"></div>
        </div>
        <h4>:L6</h4>
        <h4>{{ trainerHealth }}/ 100</h4>
      </div>
      <div>
        <img class="image" alt="Eevee" src="../images/eevee.png">
      </div>
    </div>

    <div class="battle__pokemon">
      <div>
        <img class="image" alt="Pikachu" src="../images/pikachu.png">
      </div>
      <div class="text">
        <h2>Pikachu</h2>
        <div class="healthpoints">
          <div class="healthpoints__value">HP:</div> <div class="healthpoints__bar" v-bind:style="pokemonBarStyles"></div>
        </div>
        <h4>:L7</h4>
        <h4>{{ pokemonHealth }}/ 100</h4>
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
    
    computed: {
      trainerBarStyles() {
        if (this.trainerHealth < 0) {
          return { width: "0%" };
        }

        return { width: this.trainerHealth + "%" };
      },
      pokemonBarStyles() {
        if (this.pokemonHealth < 0) {
          return { width: "0%" };
        }

        return { width: this.pokemonHealth + "%" };
      }
    }
  };
</script>

<style lang="scss">
  .battle {
    padding-top: 180px;

    &__trainer, &__pokemon {
      display: flex;
      justify-content: space-between;
      font-family: 'DotGothic16';
      text-transform: uppercase;
      font-size: 20px;
      line-height: 0;

      .text {
        width: 100%;
      }

      .image {
        width: 150px;
      }
    }

    &__trainer {
      .image {
        margin: 0 0 0 50px;
      }
    }

    &__pokemon {
      .image {
        margin: 0 50px 0 0;
      }
    }

    .healthpoints {
      display: flex;
      align-items: center;
      width: 100%;

      &__bar {
        // TODO: variables!
        background-color: #5fa768;
        border: 1px solid #000000;
        width: 100%;
        height: 100%;
        box-shadow: 2px 2px rgb(31, 8, 0);
        height: 10px;
      }

      &__value {
        padding-right: 5px;
      }
    }
  }
</style>

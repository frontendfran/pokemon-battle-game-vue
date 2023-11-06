<template>
  <!-- conditionals here for the different screens -->
  <section v-if="screen === 'battle'" class="battle">
    <div class="battle__trainer">
      <div class="text">
        <h2>Eevee</h2>
        <h3>:L6</h3>
        <div class="healthpoints">
          <div class="healthpoints__value">HP:</div> 
          <div v-if="trainerHealth > 70" class="healthpoints__bar green" v-bind:style="trainerBarStyles"></div>
          <div v-else-if="trainerHealth > 40 && trainerHealth < 69" class="healthpoints__bar orange" v-bind:style="trainerBarStyles"></div>
          <div v-else-if="trainerHealth < 39" class="healthpoints__bar red" v-bind:style="trainerBarStyles"></div>
        </div>
        <h3>{{ trainerHealth }}/ 100</h3>
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
        <h3>:L7</h3>
        <div class="healthpoints">
          <div class="healthpoints__value">HP:</div> 
          <div v-if="pokemonHealth > 70" class="healthpoints__bar green" v-bind:style="pokemonBarStyles"></div>
          <div v-else-if="pokemonHealth > 40 && pokemonHealth < 69" class="healthpoints__bar orange" v-bind:style="pokemonBarStyles"></div>
          <div v-else-if="pokemonHealth < 39" class="healthpoints__bar red" v-bind:style="pokemonBarStyles"></div>
        </div>
        <h3>{{ pokemonHealth }}/ 100</h3>
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
    font-family: 'DotGothic16', 'Times New Roman', Times, serif;
    text-transform: uppercase;
    font-weight: 900;

    &__trainer, &__pokemon {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      line-height: 0;

      .image {
        width: 150px;
      }
    }

    &__trainer {
      .image {
        margin: 0 0 0 50px;
      }

      .text {
        width: 100%;
        padding: 0 20px;
        text-align: center;
        position: relative;

        &:after {
          position: absolute;
          content: "";
          top: 60px;
          left: 0;
          width: 100%;
          height: 53%;
          background-repeat: no-repeat;
          background-position: 100% 100%;
          background-size: 100%;
          transform: scaleX(-1);
          background-image: url("../images/border.png");
        }
      }
    }

    &__pokemon {
      .image {
        margin: 0 50px 0 0;
      }

      .text {
        width: 100%;
        padding: 0 20px;
        text-align: center;
        position: relative;

        &:after {
          position: absolute;
          content: "";
          top: 65px;
          right: 0;
          width: 100%;
          height: 55%;
          background-repeat: no-repeat;
          background-position: 100% 100%;
          background-size: 100%;
          background-image: url("../images/border.png");
        }
      }
    }

    .healthpoints {
      display: flex;
      align-items: center;
      width: 100%;

      &__bar {
        border: 1px solid #000000;
        width: 100%;
        height: 100%;
        box-shadow: 2px 2px rgb(31, 8, 0);
        height: 10px;
      }

      .green {
        background-color: #5fa768;
      }

      .orange {
        background-color: orange;
      }

      .red {
        background-color: red;
      }

      &__value {
        padding-right: 5px;
      }
    }
  }
</style>

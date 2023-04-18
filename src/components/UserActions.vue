<template>
  <section class="utility__visibly-hidden">
    <form @submit.prevent="submitData">
      <button v-on:click="attackPokemon">ATTACK</button>
      <button v-on:click="healTrainer">POTION</button>
      <button v-on:click="runFromPokemon">RUN</button>
    </form>
  </section>

  <section id="status" class="container utility__visibly-hidden">

    <div v-for="status in statuses" :key="status">
      <span
        :class="{'status--trainer': status.actionBy === 'trainer', 'status--pokemon': status.actionBy === 'pokemon'}"
      >
        {{status.actionBy === 'trainer' ? 'Trainer' : 'Pokemon'}}
      </span>

      <span v-if="status.actionType === 'heal'">
        is healed for
        <span class="status--heal"> {{status.actionValue}}</span>
      </span>

      <span v-else>
        attacks opposition giving
        <span class="status--damage"> {{status.actionValue}}</span>
        damage
      </span>
    </div>

  </section>
</template>

<script>
export default {
  emits: ["set-data"],

  data() {
    return {
      updatedTrainerHealth: 100,
      updatedPokemonHealth: 100,
      statuses: []
    };
  },

  methods: {
    submitData() {
      this.$emit("set-data", this.updatedTrainerHealth, this.updatedPokemonHealth);
    },

    attackTrainer() {
      const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      this.updatedTrainerHealth -= attackValue;
      this.addStatus("trainer", "attack", attackValue);
    },
    
    attackPokemon() {
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.updatedPokemonHealth -= attackValue;
      this.attackTrainer();
      this.addStatus("trainer", "attack", attackValue);
    },
  
    addStatus(who, what, value) {
      this.statuses = [{
        actionBy: who,
        actionType: what,
        actionValue: value,
      }];
    },
  },
};
</script>

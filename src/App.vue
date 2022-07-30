<template>
  <main>
    <pokemon-battle 
      :trainerHealth="trainerHealth" 
      :pokemonHealth="pokemonHealth" 
      :screen="screen"
    >
    </pokemon-battle>
    <user-actions @set-data="setUserData"></user-actions>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        trainerHealth: 100,
        pokemonHealth: 100,
        screen: 'battle',
        winner: null,
        statuses: [],
      };
    },
    methods: {
      setUserData(trainerHealth, pokemonHealth) {
        this.trainerHealth = +trainerHealth;
        this.pokemonHealth = +pokemonHealth;
      },
    },
  };
</script>

<style lang="scss">
  html {
    font-family: sans-serif;
    // need to make these colours vars
    background: rgb(34,193,195);
    background: 
      /* 1 */ radial-gradient(ellipse at center, rgba(255,211,25, 0.2) 0%,rgba(255,211,25, 0) 100%),
      /* 2 */ radial-gradient(ellipse at 70% 60%, rgba(255,144,31, 1) 0%,rgba(255,144,31, 0) 30%),
      /* 3 */ radial-gradient(ellipse at bottom left, rgba(255,41,117, 1) 0%, rgba(255,41,117, 0) 70%),
      /* 4 */ linear-gradient(135deg,  rgba(242,34,255, 0) 0%, rgba(242,34,255, 0) 75%, rgba(242,34,255, 1) 100%),
      /* 5 */ linear-gradient(to right, rgba(255,211,25, 1) 0%, rgba(255,144,31,1) 17%, rgba(255,41,117,1) 74%, rgba(242,34,255, 1) 100%);

    background-blend-mode: 
      /* 1 */ screen, 
      /* 2 */ hue,
      /* 3 */ color,
      /* 4 */ overlay,
      /* 5 */ normal;

    section {
      margin: 2rem auto;
      max-width: 25rem;
    }

    main {
      background-image: url("images/gameboy.png");
      background-repeat: no-repeat;
      background-position: center top;
      background-size: 900px 1345px;
      height: 100vh;
    }
  }
</style>

import { createApp } from "vue";

import PokemonBattle from "./components/PokemonBattle.vue";
import UserActions from "./components/UserActions.vue";

import App from "./App.vue";

const app = createApp(App);

app.component("pokemon-battle", PokemonBattle);
app.component("user-actions", UserActions);

app.mount("#app");
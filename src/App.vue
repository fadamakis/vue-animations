<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="120">
    <h1>Vue.js Real Life Transitions & microinteractions</h1>
    <ExpandCollapse />
    <StateTransitions />
    <ListTransitions />

    <ModalTransitions />
    <CardAppearAnimation />

    <h2>menu item underline</h2>
    <h2>image hover</h2>
    <h2>progress bar</h2>
    <h2>loader</h2>
  </div>
</template>

<script>
import ExpandCollapse from "./components/ExpandCollapse.vue";
import StateTransitions from "./components/StateTransitions.vue";
import ListTransitions from "./components/ListTransitions.vue";
import ModalTransitions from "./components/ModalTransitions.vue";
import CardAppearAnimation from "./components/CardAppearAnimation.vue";

export default {
  name: "app",
  components: {
    ExpandCollapse,
    StateTransitions,
    ListTransitions,
    ModalTransitions,
    CardAppearAnimation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  background-color: #fff;
  color: #42b983;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  font-weight: bold;
}
button + button {
  margin-left: 10px;
}

button:hover {
  color: #fff;
  background-color: #4fc08d;
}

article {
  min-height: 40vh;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="120" />
    <h1>Vue.js Real Life Transitions &amp; Microinteractions</h1>
    <a href="https://github.com/fadamakis/vue-animations" target="_blank"
      >github.com/fadamakis/vue-animations
    </a>
    <SlideToggle />
    <StateTransitions />
    <ListTransitions />
    <ModalTransitions />
    <CardAppearAnimation />
    <ExpandCollapse />
    <ProgressSteps />
    <Navigation />
  </div>
</template>

<script>
import SlideToggle from "./components/SlideToggle.vue";
import StateTransitions from "./components/StateTransitions.vue";
import ListTransitions from "./components/ListTransitions.vue";
import ModalTransitions from "./components/ModalTransitions.vue";
import CardAppearAnimation from "./components/CardAppearAnimation.vue";
import ExpandCollapse from "./components/ExpandCollapse.vue";
import Navigation from "./components/Navigation.vue";
import ProgressSteps from "./components/ProgressSteps.vue";

export default {
  name: "app",
  components: {
    SlideToggle,
    StateTransitions,
    ListTransitions,
    ModalTransitions,
    CardAppearAnimation,
    ExpandCollapse,
    Navigation,
    ProgressSteps,
  },
};
</script>

<style>
@import "./styles/global.css";
</style>

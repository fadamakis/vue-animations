<template>
  <section>
    <article>
      <header>
        <h2>Toggle between two buttons</h2>
      </header>
      <transition name="fade" mode="out-in">
        <button @click="toggle('inPlace')" v-if="!isHidden('inPlace')" key="first">First State</button>
        <button @click="toggle('inPlace')" v-else key="second">Second State</button>
      </transition>
    </article>
    <article>
      <header>
        <h2>Toggle between two states</h2>
      </header>
      <button @click="toggle('box')">Toggle State</button>
      <transition name="bounce" mode="out-in">
        <div class="box" style="background: #5bb984" v-if="!isHidden('box')" key="first"></div>
        <div class="box" style="background: #35495e" v-else key="second"></div>
      </transition>
    </article>
  </section>
</template>

<script>
import toggleVisibility from "../mixins/toggleVisibility.js";
export default {
  mixins: [toggleVisibility]
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce 0.3s;
}
.bounce-leave-active {
  animation: bounce 0.3s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
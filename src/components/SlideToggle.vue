<template>
  <section>
    <article v-if="false">
      <header>
        <h2>Toggle without animation</h2>
      </header>
      <button @click="toggle('normal')">Toggle</button>
      <div class="box" v-if="!isHidden('normal')"></div>
    </article>
    <article>
      <header>
        <h2>Toggle with fade animation</h2>
      </header>
      <button @click="toggle('fade')">Toggle</button>
      <transition name="fade">
        <div class="box" v-if="!isHidden('fade')"></div>
      </transition>
    </article>
    <article>
      <header>
        <h2>Toggle with slide animation</h2>
      </header>
      <button @click="toggle('slide')">Toggle</button>
      <transition name="slide">
        <div class="box" v-if="!isHidden('slide')"></div>
      </transition>
    </article>
  </section>
</template>

<script>
import toggleVisibility from "../mixins/toggleVisibility.js";
export default {
  mixins: [toggleVisibility],
};
</script>

<style>
.box {
  width: 120px;
  height: 120px;
  background: lightgray;
  margin: 8px auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave-from {
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  height: 0;
}
</style>
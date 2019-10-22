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
export default {
  data() {
    return {
      hidden: []
    };
  },
  computed: {
    isHidden() {
      return type => this.hidden.includes(type);
    }
  },
  methods: {
    toggle(type) {
      if (this.isHidden(type)) {
        this.hidden = this.hidden.filter(v => v !== type);
      } else {
        this.hidden.push(type);
      }
    }
  }
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
.fade-enter,
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
.slide-leave {
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  height: 0;
}
</style>
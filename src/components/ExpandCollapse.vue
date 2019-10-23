<template>
  <section>
    <article>
      <header>
        <h2>Expand/Collapse Animation</h2>
      </header>
      <transition-group name="list">
        <div class="row" v-for="index in visible" :key="index">Row {{index}}</div>
      </transition-group>

      <div class="action" @click="toggle()">{{ this.showAll ? 'collapse' : 'expand'}}</div>

    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: 5,
      showAll: false
    };
  },
  methods: {
    toggle() {
      this.showAll = !this.showAll;
      this.visible = this.showAll ? 10 : 5;
    }
  }
};
</script>

<style scoped>
.row {
  width: 320px;
  height: 30px;
  line-height: 30px;
  box-shadow: 0 0 0 2px #ffffff;
  background: lightgray;
  margin: 0 auto;
}
.action {
  cursor: pointer;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  height: 0;
}
</style>
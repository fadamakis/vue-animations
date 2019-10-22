<template>
  <section>
    <article>
      <header>
        <h2>Card Animation</h2>
      </header>
      <button @click="toggle('list')">Play again</button>
      <div>
        <transition-group name="slideLeft">
          <div class="box" v-for="index in 5" :key="index">{{index}}</div>
        </transition-group>
      </div>
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

<style scoped>
.box {
  display: inline-block;
  margin: 10px;
}
.slideLeft-item {
  display: inline-block;
  margin-right: 10px;
}
.slideLeft-enter-active,
.slideLeft-leave-active {
  transition: all 1s;
}
.slideLeft-enter,
.slideLeft-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
</style>
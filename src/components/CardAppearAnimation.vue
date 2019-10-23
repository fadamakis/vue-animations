<template>
  <section>
    <article>
      <header>
        <h2>Card Animation</h2>
      </header>
      <button @click="shown++">Add</button>
      <button @click="shown--">Remove</button>
      <div>
        <transition-group name="slideLeft">
          <div class="box" v-for="index in shown" :key="index">{{index}}</div>
        </transition-group>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      shown: 2,
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
  backface-visibility: hidden;
  z-index: 1;
  line-height: 120px;
}

/* moving */
.slideLeft-move {
  transition: all 0.6s ease-in-out 0.05s;
}

/* appearing */
.slideLeft-enter-active {
  transition: all 0.4s ease-out;
}

/* disappearing */
.slideLeft-leave-active {
  transition: all 0.2s ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.slideLeft-enter,
.slideLeft-leave-to {
  opacity: 0;
}
</style>
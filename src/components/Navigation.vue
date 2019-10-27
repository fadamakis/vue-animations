<template>
  <section>
    <article>
      <header>
        <h2>Navigation Animation</h2>
      </header>
      <div class="nav-container">
        <div v-for="item in navigation" :key="item.id" :ref="`Item_${item.id}`" @click="navigateTo(item)" class="nav-item">
          <i :class="['fa', `fa-${item.id}`]"></i>
        </div>
      </div>

    </article>
  </section>
</template>



<script>
import { TweenMax, Elastic } from "gsap";

export default {
  data() {
    return {
      navigation: [
        { id: "bolt", color: "#EDB205" },
        { id: "user", color: "#ff7e67" },
        { id: "search", color: "#347474" },
        { id: "bell", color: "#42b883" },
        { id: "cog", color: "#35495e" }
      ],
      currentRoute: null
    };
  },

  mounted() {
    this.navigateTo((this.currentRoute = this.navigation[0]));
  },
  methods: {
    navigateTo(item) {
      const previousItem = this.$refs[`Item_${this.currentRoute.id}`];
      const nextItem = this.$refs[`Item_${item.id}`];

      this.currentRoute = item;

      this.animateOut(previousItem);
      this.animateIn(nextItem);
    },
    animateIn(item) {
      this.tweenColor(item, {
        backgroundColor: this.currentRoute.color,
        color: "white"
      });

      this.tweenSize(item, 64);
    },
    animateOut(item) {
      this.tweenColor(item, {
        backgroundColor: "white",
        color: "gray"
      });

      this.tweenSize(item, 32);
    },
    tweenColor(item, options) {
      TweenMax.to(item, 0.3, options);
    },

    tweenSize(item, width) {
      TweenMax.to(item, 0.7, {
        width,
        ease: Elastic.easeOut.config(1, 0.5)
      });
    }
  }
};
</script>



<style>
.nav-container {
  display: flex;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin-top: 100px;
  justify-content: center;
}

.nav-item {
  cursor: pointer;
  width: 32px;
  margin: 8px;
  padding: 8px;
  font-size: 24px;
  color: gray;
  border-radius: 48px;
}
</style>
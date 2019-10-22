<template>
  <section>
    <article>
      <header>
        <h2>List add/remove</h2>
      </header>

      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="ul">
        <li v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </li>
      </transition-group>

      <button @click="shuffle">Shuffle</button>

    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle() {
      this.items.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  padding: 0;
}

li {
  background: #5bb984;
  color: white;
  margin: 2px auto;
  padding: 5px;
  width: 120px;
  list-style: none;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* Shuffle */
.list-move {
  transition: transform 0.6s;
}
</style>
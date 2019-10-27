<template>
  <section>
    <article>
      <header>
        <h2>Progress Animation</h2>
      </header>
      <div class="container">
        <div class="progress-steps">
          <div class="progress">
            <div class="percent" :style="{width: `${ (progress-1) * 30 }%`}"></div>
          </div>
          <div class="steps">
            <div class="step" v-for="index in 4" @click="setProgress(index)" :key="index" :class="{'selected': progress === index,  
           'completed': progress > index }"></div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    };
  },
  methods: {
    setProgress(index) {
      this.progress = index;
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  margin-top: 100px;
}
.progress-steps {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.steps {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.step {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 2px solid lightgray;
  border-radius: 50%;
  transition: all 0.6s;
  cursor: pointer;
}
.step.selected {
  border: 2px solid #42b983;
}
.step.completed {
  border: 2px solid #42b983;
  background: #42b983;
  border-radius: inherit;
}

.step.completed:before {
  font-family: "FontAwesome";
  color: white;
  content: "\f00c";
}
.progress {
  position: absolute;
  width: 100%;
  height: 50%;
  border-bottom: 2px solid lightgray;
  z-index: -1;
}
.percent {
  position: absolute;
  width: 0;
  height: 100%;
  border-bottom: 2px solid #42b983;
  z-index: 1;

  transition: width 0.6s;
}
</style>
 
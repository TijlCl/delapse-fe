<template>
  <div class="animation" ref="ring">
    <div class="rw-words rw-words-1" ref="text">
      <span ref="text1">breath In...</span>
      <span ref="text3">breath out...</span>
    </div>
    <div class="item" ref="dot"></div>
    <div class="point-2"></div>
    <div class="point-3"></div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  props: {
    paused: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
    paused(newVal) {
      if (newVal) {
        this.$refs.dot.style.webkitAnimationPlayState = 'paused';
        this.$refs.text1.style.webkitAnimationPlayState = 'paused';
        this.$refs.text3.style.webkitAnimationPlayState = 'paused';
        this.$refs.ring.style.webkitAnimationPlayState = 'paused';
      } else {
        this.$refs.dot.style.webkitAnimationPlayState = 'running';
        this.$refs.text1.style.webkitAnimationPlayState = 'running';
        this.$refs.text3.style.webkitAnimationPlayState = 'running';
        this.$refs.ring.style.webkitAnimationPlayState = 'running';
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.animation {
  width: 210px;
  height: 210px;
  margin: 0px auto;
  display:grid;
  grid-template-columns:30px;
  grid-template-rows:30px;
  place-content: center;
  border-radius: 50%;
  border-radius: 50%;
  border-width: 10px;
  border-color: rgba(255, 255, 255, 0.2);
  animation: test 9s linear infinite;
  animation-play-state: paused;
}
.item {
  grid-area:1/1;
  text-align: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  animation: spin 9s linear infinite;
  transform:rotate(-0.25turn) translate(100px) rotate(-0.25turn);
  animation-play-state: paused;
}

.point-2 {
  grid-area: 1/1;
  text-align: center;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  background: rgba(255, 255, 255, 0.8);
  transform: rotate(
    0.125turn
  ) translate(109px, -3.5px) rotate(0);
}

.point-3 {
  grid-area: 1/1;
  text-align: center;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  background: rgba(255, 255, 255, 0.8);
  transform: rotate(
    0.75turn
  ) translate(93.5px, 4px) rotate(0);
}

@keyframes spin {
  100% {
    transform:rotate(0.75turn) translate(100px) rotate(-0.75turn);
  }
}

.rw-words {
  display: flex;
  justify-content: center;
}

.rw-words-1 span{
  position: absolute;
  color: white;
  opacity: 0;
  overflow: hidden;
  animation: bin 9s linear infinite 0s;
  animation-play-state: paused;
}
.rw-words-1 span:nth-child(2) {
  animation: bout 9s linear infinite 0s;
  animation-delay: 3s;
  animation-play-state: paused;
}

@keyframes bin {
  0% { opacity: 0; }
  2% { opacity: 1;}
  28% { opacity: 1; }
  30% { opacity: 0; }
}

@keyframes bout {
  0% { opacity: 0; }
  2% { opacity: 1;}
  75% { opacity: 1; }
  80% { opacity: 0; }
}

@keyframes test {
  0% { border-color: rgba(255, 255, 255, 0.2); }
  33% { border-color: rgba(255, 255, 255, 0.8); }
  80% { border-color: rgba(255, 255, 255, 0.2); }
}
</style>

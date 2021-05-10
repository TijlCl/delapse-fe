<template>
  <div class="animation">
    <div class="rw-words rw-words-1">
      <span>breath In...</span>
      <span>hold...</span>
      <span>breath out...</span>
    </div>
    <div class="item"></div>
    <div class="point-1"></div>
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
      debugger
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
}
.item {
  grid-area:1/1;
  text-align: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  animation: spin 9s linear infinite;
  transform:rotate(-0.25turn) translate(100px) rotate(-0.25turn);
}

.point-1 {
  grid-area: 1/1;
  text-align: center;
  border-radius: 20%;
  width: 20px;
  height: 7px;
  background: rgba(255, 255, 255, 0.8);
  transform: rotate(
    0.375turn
  ) translate(106px, -3.5px) rotate(0);
}

.point-2 {
  grid-area: 1/1;
  text-align: center;
  border-radius: 20%;
  width: 20px;
  height: 7px;
  background: rgba(255, 255, 255, 0.8);
  transform: rotate(
    0.125turn
  ) translate(114px, -3.5px) rotate(0);
}

.point-3 {
  grid-area: 1/1;
  text-align: center;
  border-radius: 20%;
  width: 20px;
  height: 7px;
  background: rgba(255, 255, 255, 0.8);
  transform: rotate(
    0.75turn
  ) translate(90px, 3.5px) rotate(0);
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
}
.rw-words-1 span:nth-child(2) {
  animation: hold 9s linear infinite 0s;
  animation-delay: 3s;
}
.rw-words-1 span:nth-child(3) {
  animation: bout 9s linear infinite 0s;
  animation-delay: 6s;
}

@keyframes bin {
  0% { opacity: 0; }
  2% { opacity: 1;}
  28% { opacity: 1; }
  30% { opacity: 0; }
}

@keyframes hold {
  0% { opacity: 0; }
  2% { opacity: 1;}
  25% { opacity: 1; }
  28% { opacity: 0; }
}

@keyframes bout {
  0% { opacity: 0; }
  2% { opacity: 1;}
  32% { opacity: 1; }
  35% { opacity: 0; }
}

@keyframes test {
  0% { border-color: rgba(255, 255, 255, 0.2); }
  33% { border-color: rgba(255, 255, 255, 0.8); }
  50% { border-color: rgba(255, 255, 255, 0.8); }
  80% { border-color: rgba(255, 255, 255, 0.2); }

}
</style>

<template>
  <button class="text-white" v-bind:class="small ? 'button-small' : 'button'" :style="{ 'background-color': color}" ref="button">
    <span v-html="title"></span>
  </button>
</template>

<script>

// button animation source: https://codepen.io/takaneichinose/pen/KJVLqm

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#1BA711'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ripples: []
    }
  },
  methods: {
    animateRipple: function (e) {
      let el = this.$refs.button;
      let pos = el.getBoundingClientRect();

      this.ripples.push({
        x: e.clientX - pos.left,
        y: e.clientY - pos.top,
        show: true
      });
    },
    rippleEnd: function (i) {
      this.ripples[i].show = false;
    }
  }
}
</script>

<style scoped>

button:focus {
  outline:0;
}

.button{
  width: 100%;
  padding: 8px 20px 8px 20px;
  border-radius: 25px;
  text-align: center;
  opacity: 80%;
  overflow: hidden;
  display: inline-block;
  position: relative;
}

.button-small{
  width: 100%;
  padding: 1px 3px 1px 3px;
  border-radius: 25px;
  text-align: center;
  opacity: 80%;
  overflow: hidden;
  display: inline-block;
  position: relative;
  font-size: 1.8vh;
}

.ripple {
  background-color: white;
  width: 1rem;
  height: 1rem;
  position: absolute;
  border-radius: 50%;
  transform: translateX(-100%) translateY(-100%);
  mix-blend-mode: screen;
  animation: ripple 1250ms ease-out forwards, fade 1500ms ease-out forwards;
}

@keyframes ripple {
  0%   { transform: translate(-100%, -100%); }
  80%  { transform: translate(-100%, -100%) scale(50); }
  100% { transform: translate(-100%, -100%) scale(50); opacity: 0; }
}

@keyframes fade {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}

</style>

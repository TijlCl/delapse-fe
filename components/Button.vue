<template>
  <button class="text-white md:text-xl lg:text-2xl opacity-80" v-bind:class="small ? 'button-small' : 'button'" :style="{ 'background-color': color}" ref="button">
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

.opacity-80{
  opacity: 0.8;
}

.button{
  width: 100%;
  padding: 8px 20px 8px 20px;
  border-radius: 25px;
  text-align: center;
  overflow: hidden;
  display: inline-block;
  position: relative;
}

.button-small{
  width: 100%;
  padding: 1px 3px 1px 3px;
  border-radius: 25px;
  text-align: center;
  overflow: hidden;
  display: inline-block;
  position: relative;
  font-size: 1.8vh;
}

</style>

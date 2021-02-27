<template>
  <img class="w-full background" :src="require(`~/assets/img/${img}.jpg`)" :alt="alt">
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: "page background"
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.background{
  height: 100%;
  position: fixed;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: -1;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  object-fit: cover;
}

</style>

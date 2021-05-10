<template>
  <div class="container min-h-screen" :style="pageBackgroundImage">
    <TopNav pageTitle="Take a breath" />
    <div class="animation-container">
      <equal-breathing :paused="paused" />
    </div>
    <div class="w-20 pause-btn">
      <Button :title="paused ? 'Play' : 'Pause'" color="#000000"/>
    </div>
  </div>
</template>

<script>
import EqualBreathing from "~/components/breathing/EqualBreathing";

export default {
  middleware: 'auth',
  components: {
    EqualBreathing
  },
  data() {
    return {
      paused: true
    }
  },
  computed: {
    pageBackgroundImage() {
      const imgUrl = this.$img('/img/login-bg.jpg', { width: 400 })
      return {
        backgroundImage: `url('${imgUrl}')`
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.container {
  background-repeat: no-repeat;
  background-size: 110% 125%;
}

.animation-container {
  padding-top: 45%;
}

.pause-btn {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 10%;
}
</style>

<template>
  <div class="min-h-screen add-event-bg" :style="pageBackgroundImage">
    <TopNav pageTitle="Settings" arrowColour="white"></TopNav>

  </div>
</template>

<script>
export default {
  layout: 'base',

  data() {
    return {

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

  },
}
</script>

<style scoped>

</style>

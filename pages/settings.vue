<template>
  <div class="min-h-screen add-event-bg  bg-no-repeat min-h-screen background-image" :style="pageBackgroundImage">
    <TopNav pageTitle="Settings" arrowColour="white"></TopNav>

    <div class="w-3/4 max-w-sm mx-auto flex items-center justify-center">

      <div class="mt-3">
        <InputField v-model="name" class="mb-4" placeholder="Name" icon="user" :api-errors="errors.name"/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',

  data() {
    return {
      name: ''
    }
  },

  async fetch ({ store }) {
    await store.dispatch('userSettings/fetch');
  },

  computed: {
    pageBackgroundImage() {
      const imgUrl = this.$img('/img/login-bg.jpg', { width: 400 })
      return {
        backgroundImage: `url('${imgUrl}')`
      }
    },

    errors() {
      return this.$store.getters['userSettings/errors'];
    },
  },
  methods: {

  },
}
</script>

<style scoped>

.background-image{
  background-size: 110% 125%;
}

</style>

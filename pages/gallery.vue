<template>
  <div>
    <TopNav pageTitle="Gallery" dark></TopNav>
    <GalleryComponent />
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  },

  async fetch ({ store }) {
    await store.dispatch('completedChallenges/fetchCompleted');
  },
}
</script>

<style scoped>
</style>

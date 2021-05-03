<template>
  <div>
    <TopNav pageTitle="Gallery" dark></TopNav>
    <GalleryComponent />
    <bottom-nav active="gallery"/>
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

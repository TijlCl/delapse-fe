<template>
  <div class="min-h-screen">
    <TopNav dark :pageTitle="challenge.challenge.title || 'Challenge'">

    </TopNav>

  </div>
</template>

<script>
import resetStateOnLeave from "~/mixins/resetStateOnLeave";

export default {
  mixins: [resetStateOnLeave],
  layout: 'base',
  data() {
    return {
      store: 'challenge',
    }
  },
  async fetch ({ store, params }) {
    const userChallengeId = params.id;
    await store.dispatch('challenge/fetch', userChallengeId);
  },
  computed: {
    challenge() {
      return this.$store.getters['challenge/challenge'];
    },

    errors() {
      return this.$store.getters['challenge/errors'];
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>

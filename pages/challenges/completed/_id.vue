<template>
  <div class="min-h-screen overflow-hidden">
    <TopNav v-if="challenge" dark pageTitle="Challenge" :line="false"></TopNav>

    <div class="overflow-hidden w-full inline-block mr-3 shadow-lg">
      <img :src="challenge.image || `/img/${challenge.challenge.image}.jpg`" class="h-64 object-contain w-full" />
    </div>

    <div class="mx-6">

      <div class="mt-4 text-center mb-4">
        <h3 class="font-bold"> {{challenge.challenge.title}} </h3>
        <p> {{challenge.completed_at}} </p>
      </div>

      <p> {{challenge.description || challenge.challenge.description}} </p>
    </div>

    <BottomNav></BottomNav>

  </div>
</template>

<script>
import resetStateOnLeave from "@/mixins/resetStateOnLeave";

export default {
  mixins: [resetStateOnLeave],
  layout: 'base',
  data() {
    return {
      store: 'challenge'
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

  },
  methods: {

  },
}
</script>

<style scoped>

.image-display {
  max-height: 30%;
}

</style>

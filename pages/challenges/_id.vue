<template>
  <div class="min-h-screen">
    <TopNav v-if="challenge" dark :pageTitle="challenge.challenge.title" :line="false"></TopNav>
    <TopNav v-else dark pageTitle="'Challenge'"></TopNav>

    <ActivityCard class="" :img="challenge.challenge.image" :title="challenge.challenge.description"/>

    <div class="mx-5">
      <div class="my-8">
        <TextareaField v-model="completeChallengeDescription" placeholder="Description" :api-errors="errors.description"/>
      </div>

      <div class="image-upload mt-12 mb-6">
        <label for="file-input" class="flex justify-center imagePreview">
          <img v-if="imageUrl" :src="imageUrl" class="w-full object-contain" />
          <font-awesome-icon v-else class="text-6xl text-gray-600" icon="upload"/>
        </label>

        <input id="file-input" type="file" @change="previewImage" class="hidden">
      </div>

      <Button title="Complete challenge"></Button>

    </div>

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
      imageUrl: null
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
    },

    completeChallengeDescription () {
      const date = new Date();
      return `${this.$auth.user.name} completed the challenge ${this.challenge.challenge.title} at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    },

  },
  methods: {
    previewImage (e) {
      const file = e.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    }
  },
}
</script>

<style scoped>
.imagePreview{
  height: 150px;
  position: relative;
}
</style>

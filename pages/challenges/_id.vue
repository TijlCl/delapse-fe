<template>
  <div class="min-h-screen">
    <TopNav v-if="challenge" dark :pageTitle="challenge.challenge.title" :line="false"></TopNav>
    <TopNav v-else dark pageTitle="'Challenge'"></TopNav>

    <ActivityCard class="" :img="challenge.challenge.image" :title="challenge.challenge.description" :rounded="false"/>

    <form @submit.prevent="completeChallenge">
      <div class="mx-5">
        <div class="my-8">
          <TextareaField v-model="completeChallengeDescription" placeholder="Description" :api-errors="errors.description"/>
        </div>

        <div class="image-upload mt-12 mb-6">
          <label for="file-input" class="flex justify-center imagePreview">
            <img v-if="imageUrl" :src="imageUrl" class="w-full object-contain"/>
            <font-awesome-icon v-else class="text-6xl text-gray-600 my-auto" icon="upload"/>
          </label>

          <span v-for="(apiError, i) in errors.image" :key="i" class="input-errors pl-2">{{ apiError }}</span>

          <input id="file-input" ref="image" type="file" @change="previewImage" class="hidden" accept="image/*">
        </div>

        <Button title="Complete challenge"></Button>

      </div>
    </form>

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
      image: '',
      imageUrl: null,
      completeChallengeDescription: ''
    }
  },
  async fetch ({ store, params }) {
    const userChallengeId = params.id;
    await store.dispatch('challenge/fetch', userChallengeId);
  },

  mounted() {
    const date = new Date();
    this.completeChallengeDescription = `${this.$auth.user.name} completed the challenge ${this.challenge.challenge.title} at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  },

  computed: {
    challenge() {
      return this.$store.getters['challenge/challenge'];
    },

    errors() {
      return this.$store.getters['challenge/errors'];
    },

  },
  methods: {
    previewImage (e) {
      if (e.target.files.length){
        const file = e.target.files[0];
        this.imageUrl = URL.createObjectURL(file);
        this.image = this.$refs.image.files[0];
      }
    },

    async completeChallenge() {
      let formData = new FormData();

      formData.append("image", this.image);
      formData.append("description", this.completeChallengeDescription);
      try {
        await this.$store.dispatch('challenge/complete', {id: this.$route.params.id, challenge: formData})
        this.$router.back();
      } catch (e) {
        console.log(e);
      }
    },
  },
}
</script>

<style scoped>
.imagePreview{
  height: 150px;
  position: relative;
}

.input-errors{
  font-weight: bold;
  color: #ff0000;
}
</style>

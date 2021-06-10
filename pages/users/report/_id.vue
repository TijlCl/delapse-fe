<template>
  <div class="min-h-screen bg-no-repeat min-h-screen background-image">
    <TopNav pageTitle="Report user" arrowColour="white" :line="false"></TopNav>

    <div class="w-full max-w-sm mx-auto flex items-center justify-center md:inline md:max-w-full">

      <div class="w-10/12 py-4 px-6 mt-6 md:py-32 md:px-24 lg:py-56">

        <form @submit.prevent="reportUser">

          <div class="mt-5">
            <h2 class="text-white mb-2">Report reason</h2>
            <SelectField v-model="reason" :options="['Inappropriate name', 'Harassment', 'Offencive language', 'Spam', 'Other']" class="mb-4" :api-errors="errors.reason"/>
          </div>

          <div class="mt-10">
            <h2 class="text-white mb-2">Report description</h2>
            <label for="description"></label>
            <textarea v-model="description" class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-300 border border-gray-200 rounded focus:outline-none"
                                                   id="description" rows="6" placeholder="Description..."></textarea>
            <span v-for="(apiError, i) in errors.description" :key="i" class="input-errors pl-2">{{ apiError }}</span>
          </div>


          <div class="mt-12">

            <Button title="Send" class="mb-5"></Button>

          </div>

        </form>


      </div>

    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      reason: 'Inappropriate name',
      description: ''
    }
  },

  computed: {

    errors() {
      return this.$store.getters['user/reportUserErrors'];
    },

  },
  methods: {
    async reportUser() {
      const report = {
        reason: this.reason,
        description: this.description
      }

      try {
        await this.$store.dispatch('user/reportUser', {userId: this.$route.params.id, report: report});
        await this.$router.push('/');
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>

<style scoped>

.background-image {
  background-size: 110% 125%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/img/report-bg.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  object-fit: cover;
}

</style>

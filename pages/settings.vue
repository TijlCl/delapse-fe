<template>
  <div class="min-h-screen add-event-bg  bg-no-repeat min-h-screen background-image" :style="pageBackgroundImage">
    <TopNav pageTitle="Settings" arrowColour="white" :line="false"></TopNav>

    <div
      class="w-3/4 max-w-sm mx-auto flex md:inline md:max-w-full items-center justify-center"
    >
      <div class="py-4 px-6 mt-6 md:py-32 md:px-24">

        <form @submit.prevent="updateSettings">

          <NuxtLink to="/edit-profile">
            <div class="px-3 py-2 flex flex-wrap content-end">
              <span class="flex items-center text-white mr-3 md:text-2xl">
                <font-awesome-icon icon="user"/>
              </span>
              <h2 class="text-white md:text-2xl">Edit Profile</h2>
              <span class="flex items-center text-white ml-auto">
                <font-awesome-icon icon="arrow-right"/>
              </span>
            </div>
            <hr class="mb-16">
          </NuxtLink>

          <div class="px-3 py-2 flex flex-wrap content-end">
              <span class="flex items-center text-white mr-3 md:text-2xl">
                <font-awesome-icon icon="cog"/>
              </span>
            <h2 class="text-white md:text-2xl">Account settings</h2>
          </div>
          <hr class="mb-8">

          <div class="mt-2">
            <ToggleSwitch v-model="enableLocation" title="Enable Location" class="mb-4"/>
          </div>

          <div class="mt-2">
            <ToggleSwitch v-model="sponsor" title="Apply As Sponsor" class="mb-4"/>
          </div>

          <div class="mt-2">
            <ToggleSwitch v-model="publicGallery" title="Public gallery" class="mb-4"/>
          </div>

          <div class="mt-2">
            <ToggleSwitch v-model="emergencyContact" title="Apply As Emergency Contact" class="mb-4"/>
          </div>

          <div class="mt-10">

            <Button title="Save" class="mb-5"></Button>

            <NuxtLink to="/profile">
              <Button color="transparent" title="Cancel"></Button>
            </NuxtLink>

          </div>

        </form>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',

  data() {
    return {}
  },

  async fetch({store}) {
    await store.dispatch('userSettings/fetch');
  },

  computed: {
    pageBackgroundImage() {
      const imgUrl = this.$img('/img/coast.jpg', {width: 400})
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${imgUrl}')`
      }
    },

    enableLocation: {
      get() {
        return this.$store.getters['userSettings/enableLocation']
      },
      set(val) {
        this.$store.commit('userSettings/setEnableLocation', val);
      },
    },

    sponsor: {
      get() {
        return this.$store.getters['userSettings/sponsor']
      },
      set(val) {
        this.$store.commit('userSettings/setSponsor', val);
      },
    },

    publicGallery: {
      get() {
        return this.$store.getters['userSettings/publicGallery']
      },
      set(val) {
        this.$store.commit('userSettings/setPublicGallery', val);
      },
    },

    emergencyContact: {
      get() {
        return this.$store.getters['userSettings/emergencyContact']
      },
      set(val) {
        this.$store.commit('userSettings/setEmergencyContact', val);
      },
    },

    errors() {
      return this.$store.getters['userSettings/errors'];
    },
  },
  methods: {
    async updateSettings() {
      const settings = {
        enable_location: this.enableLocation,
        sponsor: this.sponsor,
        public_gallery: this.publicGallery,
        emergency_contact: this.emergencyContact,
      }

      try {
        await this.$store.dispatch('userSettings/update', settings);
        await this.$router.push('/profile');
      } catch (e) {
        console.log(e);
      }
    },
  },
}
</script>

<style scoped>

.background-image {
  background-size: 110% 125%;
}

</style>

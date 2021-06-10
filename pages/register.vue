<template>
  <div class="min-h-screen bg-gray-200 register-bg pt-10 sm:pt-20 pb-10">
    <div class="mb-5 sm:mb-10 mx-auto flex items-center justify-center">
      <h1 class="register-title">Delapse</h1>
    </div>
    <div
      class="w-3/4 max-w-sm mx-auto flex items-center justify-center md:inline md:max-w-full"
    >
      <div class="py-4 px-6 mt-4 md:py-24 md:px-24 lg:py-48">
        <label class="register-label">Create your account</label>
        <form @submit.prevent="register">
          <div class="mt-4 md:mt-10 lg:mt-12">
            <InputField  v-model="name" class="mb-4" placeholder="Username" icon="user" :api-errors="errors.name"/>
          </div>
          <div class="mt-4 md:mt-10 lg:mt-12">
            <InputField  v-model="email" class="mb-4" placeholder="Email" icon="envelope-open" :api-errors="errors.email"/>
          </div>
          <div class="mt-4 md:mt-10 lg:mt-12">
            <InputField  v-model="password" class="mb-4" placeholder="Password" icon="key" input-type="password" :api-errors="errors.password"/>
          </div>
          <div class="mt-4 md:mt-10 lg:mt-12">
            <InputField  v-model="passwordConfirmation" class="mb-4" placeholder="Confirm password" icon="lock" input-type="password"/>
          </div>
          <div class="mt-4 md:mt-10 lg:mt-12">
            <InputField  v-model="daysClean" class="mb-4" placeholder="Days clean" icon="sun" :api-errors="errors.days_clean"/>
          </div>

          <div class="px-3 py-2 flex flex-wrap content-end mt-10" @click="openSettings">
              <span class="flex items-center text-white mr-3 md:text-2xl">
                <font-awesome-icon icon="cog"/>
              </span>
            <h2 class="text-white md:text-2xl">Settings</h2>
            <span class="flex items-center text-white ml-auto">
                <font-awesome-icon icon="arrow-down"/>
              </span>
          </div>
          <hr class="mb-5 sm:mb-6 md:mb-10">

          <transition name="slide">
            <div class="settings" v-if="showSettings">

              <div class="mt-2 md:mt-10 lg:mt-12">
                <ToggleSwitch v-model="enableLocation" title="Enable Location" :api-errors="errors.enable_location"/>
              </div>

              <div class="mt-2 md:mt-10 lg:mt-12">
                <ToggleSwitch v-model="sponsor" title="Apply As Sponsor" :api-errors="errors.sponsor"/>
              </div>

              <div class="mt-2 md:mt-10 lg:mt-12">
                <ToggleSwitch v-model="publicGallery" title="Public gallery" :api-errors="errors.public_gallery"/>
              </div>

              <div class="mt-2 md:mt-10 lg:mt-12">
                <ToggleSwitch v-model="emergencyContact" title="Apply As Emergency Contact" :api-errors="errors.emergency_contact"/>
              </div>
            </div>
          </transition>

          <div class="mt-12 md:mt-16 lg:mt-20">
            <Button title="Register" color="#1BA711"/>
          </div>

        </form>
      </div>
    </div>
    <NuxtLink  to="/login">
      <div class="w-10/12 px-6 mt-10 mx-auto flex items-center justify-center">
        <Button title="Already have an account? <b>Login here</b>" color="#9c9c9c" small/>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'base',
  auth: 'guest',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      daysClean: '',
      showSettings: false,
      enableLocation: false,
      sponsor: false,
      publicGallery: false,
      emergencyContact: false,
      errors: {},
    }
  },

  computed: {
  },

  methods: {
    async register() {
      this.error = null;
      await this.$axios
        .$post('/api/v1/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
          days_clean: this.daysClean,
          enable_location: this.enableLocation,
          sponsor: this.sponsor,
          public_gallery: this.publicGallery,
          emergency_contact: this.emergencyContact,
        })
        .then(() => {
          this.$toast.success('Your account was created successfully!')
          this.$router.push('/login')
        })
        .catch((e) => {
          this.errors = e.response.data.errors ?? e.response.data
        })
    },

    openSettings() {
      this.showSettings = !this.showSettings;
    }
  },
}
</script>
<style scoped>
.register-bg{
  background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/img/register-bg.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  object-fit: cover;
}
.register-title {
  font-size: 5vh;
  color: white;
}
.register-label {
  color: white;
  font-size: 2vh;
}

.settings{
  transform-origin: top;
  transition: transform .4s ease-in-out;
}

.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
</style>

<template>
  <div class="min-h-screen bg-gray-200 login-bg pt-10 sm:pt-20 pb-1">
    <div class="mb-8 sm:mb-16 mx-auto flex items-center justify-center">
      <h1 class="login-title">Delapse</h1>
      <p class=" ml-1 self-end mb-1 sm:mb-2 text-white text-xs md:text-base">Retake life.</p>
    </div>
    <div
      class="w-3/4 max-w-sm mx-auto flex md:inline md:max-w-full items-center justify-center"
    >
      <div class="py-4 px-6 mt-6 md:py-32 md:px-24 lg:py-56">
        <label class="login-label">Login to your account</label>
        <form @submit.prevent="loginPassport">
          <div class="mt-3 md:mt-10">
            <InputField  v-model="email" class="mb-4" placeholder="Email" icon="user"/>
          </div>
          <div class="mt-4 md:mt-8 lg:mt-12">
            <InputField  v-model="password" class="mb-4" placeholder="Password" icon="key" input-type="password"/>
          </div>
          <div class="mt-8 md:mt-12 lg:mt-20">
            <Button title="Login" color="#1BA711"/>
          </div>
        </form>
      </div>
    </div>
    <div class="w-1/2 py-4 px-6 mt-8 sm:mt-12 mx-auto flex items-center justify-center lg:mt-24">
      <Button title="Forgot password?" color="#9c9c9c" small/>
    </div>
    <NuxtLink  to="/register">
      <div class="w-10/12 py-4 px-6 mt-4 mx-auto flex items-center justify-center">
          <Button title="Don't have an account yet? <b>Sing up here</b>" color="#9c9c9c" small/>
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
      email: null,
      password: null,
      error: null,
    }
  },
  methods: {
    async loginPassport() {
      this.error = null;
      await this.$auth
        .loginWith('password_grant', {
          data: {
            grant_type: "password",
            client_id: this.$config.grandClientId,
            client_secret: this.$config.grandClientSecret,
            scope: "*",
            username: this.email,
            password: this.password
          }
        })
        .then(() => this.$router.push('/'))
        .catch((e) => (this.error = 'Incorrect email or password.'))
    },
  },

  computed: {
  }
}
</script>

<style scoped>
.login-bg{
  background-repeat: no-repeat;
  background-size: 110% 125%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2)), url('/img/login-bg.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  object-fit: cover;
}
.login-title {
  font-size: 5vh;
  color: white;
}
.login-label {
  color: white;
  font-size: 2vh;
}
</style>

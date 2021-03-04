<template>
  <div class="min-h-screen bg-gray-200 register-bg">
    <div class="pt-20 mb-24 mx-auto flex items-center justify-center">
      <h1 class="register-title">Delapse</h1>
    </div>
    <div
      class="w-3/4 max-w-sm mx-auto flex items-center justify-center"
    >
      <div class="py-4 px-6 mt-4">
        <label class="register-label">Create your account</label>
        <form @submit.prevent="register">
          <div class="mt-4">
            <InputField  v-model="name" class="mb-4" placeholder="Username" icon="user"/>
          </div>
          <div class="mt-4">
            <InputField  v-model="email" class="mb-4" placeholder="Email" icon="envelope-open"/>
          </div>
          <div class="mt-4">
            <InputField  v-model="password" class="mb-4" placeholder="Password" icon="key" input-type="password"/>
          </div>
          <div class="mt-4">
            <InputField  v-model="passwordConfirmation" class="mb-4" placeholder="Confirm password" icon="lock" input-type="password"/>
          </div>
          <div class="mt-8">
            <Button title="Register" color="#1BA711"/>
          </div>
        </form>
      </div>
    </div>
    <NuxtLink  to="/login">
      <div class="w-10/12 py-4 px-6 mt-10 mx-auto flex items-center justify-center">
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
      error: null,
    }
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
        })
        .then(() => {
          this.$toast.success('Your account was created successfully!')
          this.$router.push('/login')
        })
        .catch(function (e) {
          this.error = e.response.data.errors ?? e.response.data
        })
    },
  },
}
</script>
<style scoped>
.register-bg{
  background: url('~assets/img/register-bg.jpg');
  background-repeat: no-repeat;
  background-size: 110% 100%
}
.register-title {
  font-size: 5vh;
  color: white;
}
.register-label {
  color: white;
  font-size: 2vh;
}
</style>

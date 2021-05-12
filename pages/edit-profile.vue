<template>
  <div class="min-h-screen add-event-bg  bg-no-repeat min-h-screen background-image" :style="pageBackgroundImage">
    <TopNav pageTitle="Edit profile" arrowColour="white" :line="false"></TopNav>

    <div class="w-full flex flex-col items-center content-center justify-center mt-16">
      <label for="file-input" class="flex justify-center imagePreview">
        <img v-if="userImage" :src="userImage" class="object-cover w-20 h-20 rounded-full profile-image" alt="Profile image"/>
        <div v-else class="rounded-full profile-image bg-gray-400 w-20 h-20 grid place-items-center no-border">
          <font-awesome-icon class="rounded-full text-4xl mx-auto" icon="user"/>
        </div>
      </label>

      <input id="file-input" ref="image" type="file" @change="previewImage" class="hidden" accept="image/*">
    </div>

    <div class="max-w-sm mx-auto flex items-center justify-center px-4">


        <div class="py-4 px-0 w-full mt-8">

          <form @submit.prevent="updateProfile">

            <div class="mt-6">
              <SettingInputField v-model="userName" title="User name" class="mb-4" placeholder="Name" t :api-errors="errors.name"/>
            </div>

            <div class="mt-6">
              <SettingInputField disabled v-model="email" title="Email" class="mb-4" placeholder="Email" />
            </div>

            <div class="mt-6">
              <SettingInputField  v-model="phoneNumber" title="Phone number" class="mb-4" placeholder="Phone number" :api-errors="errors.phoneNumber" />
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
    return {
      userName: this.$auth.user.name,
      email: this.$auth.user.email,
      userImage : this.$auth.user.image,
      image: '',
      phoneNumber: this.$auth.user.phone_number,
    }
  },

  computed: {
    pageBackgroundImage() {
      const imgUrl = this.$img('/img/coast.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${imgUrl}')`
      }
    },

    errors() {
      return this.$store.getters['userProfile/errors'];
    },
  },
  methods: {
    async previewImage(event) {
      if (event.target.files.length){
        const file = event.target.files[0];
        this.userImage = URL.createObjectURL(file);
        this.image = file;
      }
    },

    async updateProfile() {
      let formData = new FormData();

      formData.append("image", this.image);
      formData.append("name", this.userName);
      formData.append("phone_number", this.phoneNumber);
      try {
        await this.$store.dispatch('userProfile/updateProfile', formData);
        await this.$auth.fetchUser();
        await this.$router.push('/profile');
      } catch (e) {
        console.log(e);
      }
    },
  },
}
</script>

<style scoped>

.background-image{
  background-size: 110% 125%;
}

</style>

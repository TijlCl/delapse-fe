<template>
  <div class="min-h-screen pb-16">
    <div class="header-background h-64 flex flex-wrap justify-center shadow ipad-header" >
      <TopNav :line="false" arrowColor="white">
        <NuxtLink  to="/settings">
          <font-awesome-icon class="text-white md:text-2xl" icon="cog"/>
        </NuxtLink>
      </TopNav>
      <div class="flex row-auto w-full">
        <div class="w-1/4"></div>
        <div class="w-1/2 flex flex-col items-center content-center justify-center">
          <h1 class="name m-2 lg:mb-5">{{ userName[0].toUpperCase() + userName.substring(1) }}</h1>
        </div>
        <div class="w-1/4 pb-2 flex flex-wrap content-end justify-center">

        </div>
      </div>
      <div class="flex row-auto w-full">
        <div class="w-1/4"></div>
        <div class="w-1/2 flex flex-col items-center content-center justify-center">
          <label for="file-input" class="flex justify-center imagePreview">
            <img v-if="userImage" :src="userImage" class="object-cover w-20 h-20 rounded-full profile-image md:w-24 md:h-24 lg:w-32 md:h-32" alt="Profile image"/>
            <div v-else class="rounded-full profile-image bg-gray-400 w-20 h-20 grid place-items-center no-border  md:w-24 md:h-24">
              <font-awesome-icon class="rounded-full text-4xl mx-auto" icon="user"/>
            </div>
          </label>

            <input id="file-input" ref="image" type="file" @change="uploadProfilePicture" class="hidden" accept="image/*">
        </div>
        <div class="w-1/4 pb-2 flex flex-wrap content-end justify-center">
          <h1 class="w-full text-white text-right pr-2">Days clean</h1>
          <h2 class="w-full text-white text-right pr-2 font-bold text-xl">{{ daysClean }}</h2>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <span v-for="(apiError, i) in errors.image" :key="i" class="input-errors pl-2">{{ apiError }}</span>
    </div>

    <div id="events" class="scroll-right ml-5 mt-16 mb-6 md:mt-24">
      <Achievement v-for="(achievement, i) in achievements" :key="i" :img="achievement.image" :title="achievement.title" />
    </div>

    <div id="challenges" class="scroll-right ml-5">
      <p class="mb-2 subheader md:text-xl lg:text-2xl">Completed weekly challenges</p>
      <div>
        <CompletedChallengCard v-for="(challenge, i) in challenges" :key="i" v-if="challenge.completed" class="mb-4" :img="challenge.challenge.image" :title="challenge.challenge.title" :caption="challenge.challenge.description"/>
      </div>
    </div>

    <div class="mt-6 px-16 md:mt-20">
      <Button title="I need help!" color="#1BA711" @click.native="help"/>
    </div>

    <bottom-nav active="profile"/>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      userName : this.$auth.user.name,
      userImage : this.$auth.user.image,
    }
  },
  computed: {
    achievements() {
      return this.$store.getters['achievements/achievements'];
    },
    challenges() {
      return this.$store.getters['challenges/challenges'];
    },
    daysClean() {
      return this.$store.getters['daysClean/daysClean'];
    },
    errors() {
      return this.$store.getters['userSettings/errors'];
    },
  },
  async fetch ({ store }) {
    await store.dispatch('achievements/fetchAll');
    await store.dispatch('challenges/fetchActive');
    await store.dispatch('daysClean/fetchDaysClean');
  },
  methods: {
    async uploadProfilePicture(event) {
      if (event.target.files.length){
        const file = event.target.files[0];
        let formData = new FormData();

        formData.append("image", file);
        await this.$store.dispatch('userSettings/changeProfilePicture', formData).then(response => {
          this.userImage = response
        })
      }
    },
    async help() {
      await this.$store.dispatch("user/needHelp");
      this.$toast.success('Help is on the way!');
      this.$router.push('/');
    }
  }
}
</script>
<style scoped>


.header-background{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/home-header-bg.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  object-fit: cover;
}

.header-background:after{
  background-color: rgba(0 ,0 ,0 ,0.1);
}

.name{
  color: white;
  font-size: 24pt;
  max-height: 40%;
  white-space: pre;
}

.location{
  color: white;
  font-size: 10pt;
  max-height: 30%;
}

.scroll-right{
  overflow: auto;
  white-space: nowrap;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scroll-right::-webkit-scrollbar {
  display: none;
}

.subheader {
  font-weight: lighter;
  color: #707070;
}

.profile-image{
  position: relative;
  bottom: -50%;
  border: 3px solid white;
}

.input-errors{
  font-weight: bold;
  color: #ff0000;
}

.no-border{
  border-width: 0;
}

@media only screen and (min-width: 768px) {
  .ipad-header {
    height: 20em;
  }
}

@media only screen and (min-width: 1024px) {
  .ipad-header {
    height: 30em;
  }

  .name{
    font-size: 35pt;
  }

  .location{
    font-size: 16pt;
  }
}
</style>

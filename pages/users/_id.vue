<template>
  <div class="min-h-screen pb-16">
    <div class="header-background h-64 flex flex-wrap justify-center shadow ipad-header" :style="headerBackground">
      <TopNav :line="false" arrowColor="white">
      </TopNav>
      <div class="flex row-auto w-full">
        <div class="w-1/4"></div>
        <div class="w-1/2 flex flex-col items-center content-center justify-center">
          <h1 class="name m-2 lg:mb-5">{{ user.name }}</h1>
        </div>
        <div class="w-1/4 pb-2 flex flex-wrap content-end justify-center">

        </div>
      </div>
      <div class="flex row-auto w-full">
        <div class="w-1/4"></div>
        <div class="w-1/2 flex flex-col items-center content-center justify-center">
          <label class="flex justify-center imagePreview">
            <nuxt-img v-if="user.image" width="200"  :src="user.image" class="object-cover w-20 h-20 rounded-full profile-image md:w-24 md:h-24 lg:w-32 md:h-32" alt="Profile image"/>
            <div v-else class="rounded-full profile-image bg-gray-400 w-20 h-20 grid place-items-center no-border  md:w-24 md:h-24">
              <font-awesome-icon class="rounded-full text-4xl mx-auto" icon="user"/>
            </div>
          </label>


        </div>
        <div class="w-1/4 pb-2 flex flex-wrap content-end justify-center">
          <h1 class="w-full text-white text-right pr-2">Days clean</h1>
          <h2 class="w-full text-white text-right pr-2 font-bold text-xl"> {{ daysClean }}  </h2>
        </div>
      </div>
    </div>

    <div id="events" class="scroll-right ml-5 mt-16 mb-6 md:mt-24">
      <Achievement v-for="(achievement, i) in achievements" :key="i" :img="achievement.image" :title="achievement.title" />
    </div>

    <div class="mt-6 px-16">
      <Button title="Add friend" color="#1BA711" @click.native="friendRequest"/>
    </div>

    <div class="mt-6 px-16">
      <NuxtLink  :to="`/users/report/${this.$route.params.id}`">
        <Button title="Report user" color="#BB0303" @click.native="friendRequest"/>
      </NuxtLink>
    </div>

    <bottom-nav/>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
    }
  },

  async fetch ({ store, params }) {
    await store.dispatch('user/fetch', params.id);
    await store.dispatch('user/fetchUserAchievements', params.id);
    await store.dispatch('user/fetchUserDaysClean', params.id);
  },
  computed: {
    achievements() {
      return this.$store.getters['user/userAchievements'];
    },
    user() {
      return this.$store.getters['user/user'];
    },
    headerBackground() {
      const imgUrl = this.$img('/img/home-header-bg.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgUrl}')`
      }
    },
    daysClean() {
      return this.$store.getters['user/daysClean'];
    }
  },

  mounted() {
    this.$store.dispatch('achievements/fetchAll');
  },
  methods: {
    friendRequest() {
      this.$store.dispatch('user/friendRequest', this.$route.params.id)
    }
  }
}
</script>
<style scoped>


.header-background{
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

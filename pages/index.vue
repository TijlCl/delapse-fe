<template>
  <div class="min-h-screen lg:pb-12">

    <div class="header-background h-48 ipad-header flex flex-wrap content-end shadow mb-10" :style="homeBackground" >
      <NuxtLink  to="/profile">
        <font-awesome-icon icon="user" class="profile-link" />
      </NuxtLink>
      <h1 class="home-title ">Hi {{ userName }}!</h1>
    </div>

    <NuxtLink :to="checkInRoute">
      <HomeCheckIn />
    </NuxtLink>


    <div id="events" class="scroll-right ml-5 mb-10 mt-10">
      <p class="">Events</p>
      <AddEvent img="mountains"/>
      <Event v-for="(event, i) in events" :key="i" :id="event.id" :img="event.image" :title="event.title" :date="event.date" :tag="event.tag" @click.native="editEvent(event.id)"/>
    </div>

    <div id="weekly-challenge-wrapper" class="scroll-right ml-5 mb-10">
      <p class="mb-2 md:text-xl lg:text-2xl">Weekly challenge</p>
      <ChallengeCard v-for="(challenge, i) in challenges" :key="i" v-if="!challenge.completed" class="mb-4" :img="challenge.challenge.image" :title="challenge.challenge.title" :caption="challenge.challenge.description" @click.native="challengeDetail(challenge.id)"/>
    </div>

    <div id="activities" class="mx-5">
      <p class="mb-2">Activities</p>
      <NuxtLink  to="/breathing">
        <ActivityCard class="mb-10" img="breathing" title="Breathing"/>
      </NuxtLink>
    </div>

    <!--    <Button title="LOGOUT" @click.native="logout" />-->
    <bottom-nav active="home"/>
  </div>
</template>

<script>
import HomeCheckIn from "~/components/checkIn/HomeCheckIn";

export default {
  components: {
    HomeCheckIn
  },
  data() {
    return {
      userName : this.$auth.user.name
    }
  },
  computed: {
    events() {
      return this.$store.getters['events/events'];
    },
    challenges() {
      return this.$store.getters['challenges/challenges'];
    },
    homeBackground() {
      const imgUrl = this.$img('/img/home-header-bg.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgUrl}')`
      }
    },
    hasDailyFilled() {
      return this.$store.getters['checkIns/hasDailyFilled']
    },
    checkInRoute() {
      return this.hasDailyFilled ? '/check-in/check-ins' : '/check-in/create';
    }
  },
  async fetch ({ store }) {
    await store.dispatch('events/fetchAll');
    await store.dispatch('challenges/fetchActive');
    await store.dispatch('checkIns/fetchThisWeeks');
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    editEvent(id) {
      this.$router.push({
        name: 'events-id',
        params: {id: id}
      })
    },
    challengeDetail(id) {
      this.$router.push({
        name: 'challenges-id',
        params: {id: id}
      })
    }
  }
}
</script>

<style scoped>

.profile-link {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  margin: 20px;
}

.header-background{
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  object-fit: cover;
}

.header-background:after{
  background-color: rgba(0 ,0 ,0 ,0.1);
}

.home-title{
  color: white;
  font-size: 36pt;
  max-height: 30%;
  margin: 5%;
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

@media only screen and (min-width: 768px) {
  .ipad-header {
    height: 20em;
  }
}

@media only screen and (min-width: 1024px) {
  .ipad-header {
    height: 28em;
  }
}
</style>

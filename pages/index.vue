<template>
  <div class="min-h-screen">

    <div class="header-background h-48 flex flex-wrap content-end shadow mb-10">
      <h1 class="home-title ">Hi {{ userName }}!</h1>
    </div>

    <div id="events" class="scroll-right ml-5 mb-10">
      <p class="mb-2">Events</p>
      <AddEvent img="mountains"/>
      <Event v-for="(event, i) in events" :key="i" :id="event.id" :img="event.image" :title="event.title" :date="event.date" :tag="event.tag" @click.native="editEvent(event.id)"/>
    </div>

    <div id="weekly-challenge-wrapper" class="scroll-right ml-5 mb-10">
      <p class="mb-2">Weekly challenge</p>
      <ChallengeCard v-for="(challenge, i) in challenges" :key="i" v-if="!challenge.completed" class="mb-4" :img="challenge.challenge.image" :title="challenge.challenge.title" :caption="challenge.challenge.description" @click.native="challengeDetail(challenge.id)"/>
    </div>

    <div id="activities" class="mx-5">
      <p class="mb-2">Activities</p>
      <ActivityCard class="mb-10" img="yoga" title="Yoga"/>
      <ActivityCard class="mb-10" img="meditation" title="Meditation"/>
    </div>

    <!--    <Button title="LOGOUT" @click.native="logout" />-->
    <bottom-nav active="home"/>
  </div>
</template>

<script>

export default {
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
  },
  async fetch ({ store }) {
    await store.dispatch('events/fetchAll');
    await store.dispatch('challenges/fetchAll');
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


.header-background{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~assets/img/home-header-bg.jpg"), no-repeat;
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
</style>

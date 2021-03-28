<template>
  <div class="min-h-screen">

    <div class="header-background h-48 flex flex-wrap content-end shadow mb-10">
      <h1 class="home-title ">Hi {{ userName }}!</h1>
    </div>

    <div id="events" class="scroll-right ml-5 mb-10">
      <p class="mb-2">Events</p>
      <AddEvent img="mountains"/>
      <Event v-for="(event, i) in events" :key="i" :img="event.image" :title="event.title" :date="event.date" :tag="event.tag"/>
    </div>

    <div id="weekly-challenge-wrapper" class="mx-5 mb-10">
      <p class="mb-2">Weekly challenge</p>
      <ChallengeCard class="mb-4" img="cake" title="Bake a cake" caption="Search a recipe for a cake and try to make it.
Once you have completed the challenge you can upload a photo here."/>
    </div>

    <div id="activities" class="mx-5">
      <p class="mb-2">Activities</p>
      <ChallengeCard class="mb-10" img="yoga" title="Yoga"/>
      <ChallengeCard class="mb-10" img="meditation" title="Meditation"/>
    </div>

    <!--    <Button title="LOGOUT" @click.native="logout" />-->
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
      return this.$store.getters['modules/events/events'];
    },
  },
  mounted() {
    this.$store.dispatch('modules/events/fetchAll');
  },
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>

<style>


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

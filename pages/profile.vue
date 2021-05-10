<template>
  <div class="min-h-screen">
    <div class="header-background h-64 flex flex-wrap justify-center shadow" :style="headerBackground">
      <TopNav :line="false" />
      <div class="flex row-auto w-full">
        <div class="w-1/4"></div>
        <div class="w-1/2 pb-10 flex flex-col items-center content-center justify-center">
          <h1 class="name m-2">{{ userName[0].toUpperCase() + userName.substring(1) }}</h1>
          <h2 class="location">Brussels, Belgium</h2>
        </div>
        <div class="w-1/4 pb-2 flex flex-wrap content-end justify-center">
          <h1 class="w-full text-white text-right pr-2">Days clean</h1>
          <h2 class="w-full text-white text-right pr-2 font-bold text-xl">100</h2>
        </div>
      </div>
    </div>

    <div id="events" class="scroll-right ml-5 mt-16 mb-6">
      <Achievement v-for="(achievement, i) in achievements" :key="i" :img="achievement.image" :title="achievement.title" />
    </div>

    <div id="challenges" class="scroll-right ml-5">
      <p class="mb-1 subheader">Completed weekly challenges</p>
      <div class="mt-8">
        <CompletedChallengCard v-for="(achievement, i) in achievements" :key="i" img="cake" title="Bake a cake" />
      </div>
    </div>

    <div class="mt-6 px-16">
      <Button title="I need help!" color="#1BA711"/>
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
    }
  },
  computed: {
    achievements() {
      return this.$store.getters['achievements/achievements'];
    },
    headerBackground() {
      const imgUrl = this.$img('/img/home-header-bg.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgUrl}')`
      }
    }
  },
  mounted() {
    this.$store.dispatch('achievements/fetchAll');
  },
  methods: {
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
  max-height: 30%;
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
  position: fixed;
}
</style>

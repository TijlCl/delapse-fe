<template>
  <div class="check-in-card" @click="showDescription = !showDescription">
    <transition name="fade" mode="out-in">
      <div v-if="!showDescription" key="info">
        <p class="date">{{ checkIn.date }}</p>
        <h1 class="mood">{{ checkIn.mood }}</h1>
        <div class="r-chips flex-wrap">
          <div v-for="(tag) in tags">{{ tag }}</div>
        </div>
      </div>
      <div v-else key="d">
        <p class="description">{{ checkIn.description }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    checkIn: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      showDescription: false
    }
  },
  computed: {
    tags() {
      return this.checkIn.tags.split(', ');
    }
  },
  methods: {
    test() {
      debugger
    }
  }
}
</script>

<style scoped>
.check-in-card {
  height: 15vh;
  width: 90%;
  padding: 3vw;
  color: white;
  margin: 1.5rem auto;
  border-radius: 0.75rem;
  text-align: left;
  background: rgba(13,98,12, .7);
  background: linear-gradient(90deg, rgba(13,98,12,.7) 0%, rgba(15,145,36,.7) 45%, rgba(0,212,255,.7) 100%);
}

.r-chips {
  display: flex;
}
.r-chips > * {
  display: inline-block;
  padding: 0 15px;
  height: 25px;
  font-size: 4vw;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  border: 1px solid white;
  margin: 3px
}

.date{
  font-size: 10pt;
}

.mood {
  font-size: 15pt;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

<template>
  <div class="min-h-screen check-in" :style="homeBackground">
    <TopNav pageTitle="Daily check in" arrowColor="white">
      <font-awesome-icon v-if="!selectingMood" icon="save" class="md:text-2xl text-white" @click="save"/>
    </TopNav>
    <h1 v-if="selectingMood">
      How are you feeling today?
    </h1>
    <div v-if="selectingMood" class="moods">
      <div @click="choose('Happy', '&#128522;')">
        <p class="emoji">&#128522;</p>
        <p class="caption">Happy</p>
      </div>
      <div @click="choose('Loved', '&#128525;')">
        <p class="emoji">&#128525;</p>
        <p class="caption">Loved</p>
      </div>
      <div @click="choose('Excited', '&#128516;')">
        <p class="emoji">&#128516;</p>
        <p class="caption">Excited</p>
      </div>
      <div @click="choose('Relaxed', '&#128524;')">
        <p class="emoji">&#128524;</p>
        <p class="caption">Relaxed</p>
      </div>
      <div @click="choose('Tired', '&#128564;')">
        <p class="emoji">&#128564;</p>
        <p class="caption">Tired</p>
      </div>
      <div @click="choose('Bored', '&#128528;')">
        <p class="emoji">&#128528;</p>
        <p class="caption">Bored</p>
      </div>
      <div @click="choose('Angry', '&#128545;')">
        <p class="emoji">&#128545;</p>
        <p class="caption">Angry</p>
      </div>
      <div @click="choose('Stressed', '&#128555;')">
        <p class="emoji">&#128555;</p>
        <p class="caption">Stressed</p>
      </div>
      <div @click="choose('Sad', '&#128542;')">
        <p class="emoji">&#128542;</p>
        <p class="caption">Sad</p>
      </div>
    </div>

    <div v-else>
      <div class="flex flex-col justify-center items-center mt-10">
        <p v-html="selectedEmoji" class="text-3xl"/>
      </div>
      <div class="reasons">
        <p class="text-xl mt-10 mx-5 text-white">What is infecting your mood?</p>
        <div class="r-chips flex-wrap">
          <div v-bind:class="includesReason('Love') ? 'active-reason' : ''" @click="modifyReasons('Love')">Love</div>
          <div v-bind:class="includesReason('Family') ? 'active-reason' : ''" @click="modifyReasons('Family')">Family</div>
          <div v-bind:class="includesReason('School') ? 'active-reason' : ''" @click="modifyReasons('School')">School</div>
          <div v-bind:class="includesReason('Work') ? 'active-reason' : ''" @click="modifyReasons('Work')">Work</div>
          <div v-bind:class="includesReason('Friends') ? 'active-reason' : ''" @click="modifyReasons('Friends')">Friends</div>
          <div v-bind:class="includesReason('Money') ? 'active-reason' : ''" @click="modifyReasons('Money')">Money</div>
          <div v-bind:class="includesReason('Health') ? 'active-reason' : ''" @click="modifyReasons('Health')">Health</div>
        </div>

        <div class="my-8 mx-5">
          <textarea
            v-model="description"
            rows="8"
            class="w-full self-center text-xl text-white outline-none bg-transparent placeholder-opacity-75"
            placeholder="Add note..."
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      selectingMood: true,
      selected: null,
      selectedEmoji: null,
      description: null,
      reasons: []
    }
  },
  computed: {
    homeBackground() {
      const imgUrl = this.$img('/img/register-bg.jpg', { width: 400 })
      return {
        backgroundImage: `url('${imgUrl}')`
      }
    }
  },
  watch: {
  },
  methods: {
    choose(option, emoji) {
      this.selected = option;
      this.selectedEmoji = emoji;
      this.selectingMood = false;
    },
    modifyReasons(reason) {
      if(this.reasons.includes(reason)) {
        this.reasons = this.reasons.filter(item => item !== reason)
      } else {
        this.reasons.push(reason);
      }
    },
    includesReason(reason) {
      return this.reasons.includes(reason);
    },
    async save() {
      await this.$store.dispatch('checkIn/create', {
        mood: this.selected,
        emoji: this.selectedEmoji,
        description: this.description,
        tags: this.reasons
      })
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

h1 {
  color: white;
  text-align: center;
  font-size: 7vw;
  margin: 8vw;
}
.check-in{
  background-repeat: no-repeat;
  background-size: 110% 125%
}

.moods {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-auto-rows: 1fr;
  grid-gap: 5vw;
  padding: 1rem;
}

.moods::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.moods > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.moods > * {
  background: rgba(255,255,255,0.1);
  border-radius: 15%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  color: white;
  font-size: 5vw;
}

.emoji {
  font-size: 10vw;
}

.reasons {
  height: 70vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  width: 100vw;
}

.r-chips {
  display: flex;
  padding: 10px;
}
.r-chips > * {
  display: inline-block;
  padding: 0 15px;
  height: 30px;
  font-size: 5vw;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  border: 1px solid white;
  margin: 3px
}

.active-reason {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

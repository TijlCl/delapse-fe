<template>
  <div class="check-in" :style="checkInBackGround">
    <p>Your daily check in</p>
    <div class="emojis">
      <div class="emoji-wrapper">
        <div class="emoji" v-bind:class="currentDay === 1 ? 'active-emoji' : ''">
          <span class="emoji-icon" v-html="getEmoji('monday')" />
        </div>
        <p>M</p>
      </div>
      <div class="emoji-wrapper">
        <div class="emoji" v-bind:class="currentDay === 2 ? 'active-emoji' : ''">
          <span class="emoji-icon" v-html="getEmoji('tuesday')" />
        </div>
        <p>T</p>
      </div>
      <div class="emoji-wrapper">
        <div class="emoji" v-bind:class="currentDay === 3 ? 'active-emoji' : ''">
          <span class="emoji-icon" v-html="getEmoji('wednesday')" />
        </div>
        <p>W</p>
      </div>
      <div class="emoji-wrapper">
        <div class="emoji" v-bind:class="currentDay === 4 ? 'active-emoji' : ''">
          <span class="emoji-icon" v-html="getEmoji('thursday')" />
        </div>
        <p>T</p>
      </div>
      <div class="emoji-wrapper">
        <div class="emoji" v-bind:class="currentDay === 5 ? 'active-emoji' : ''">
          <span class="emoji-icon" v-html="getEmoji('friday')" />
        </div>
        <p>F</p>
      </div>
      <div class="emoji-wrapper">
        <div class="emoji" v-bind:class="currentDay === 6 ? 'active-emoji' : ''">
          <span class="emoji-icon" v-html="getEmoji('saturday')" />
        </div>
        <p>S</p>
      </div>
      <div class="emoji-wrapper">
        <div class="emoji" v-bind:class="currentDay === 0 ? 'active-emoji' : ''">
          <span class="emoji-icon" v-html="getEmoji('sunday')" />
        </div>
        <p>S</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emojis: {
        monday: '&#128540;',
        tuesday: '&#128540;',
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: null,
        sunday: null,
      }
    }
  },
  computed: {
    checkInsWeekly() {
      return this.$store.getters["checkIns/checkInsWeekly"];
    },
    checkInBackGround() {
      const imgUrl = this.$img('/img/meditation.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${imgUrl}')`
      }
    },
    currentDay () {
      const date = new Date();
      return date.getDay();
    }
  },
  methods: {
    getEmoji(day) {
      return this.checkInsWeekly[day] ? this.checkInsWeekly[day].emoji : null;
    }
  }
}
</script>

<style scoped>
.check-in {
  height: 15vh;
  width: 90%;
  padding: 3vw;
  color: white;
  margin: 0 auto;
  border-radius: 0.75rem;
  text-align: center;
}

.emojis {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.emoji {
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  width: 20pt;
  height: 20pt;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.emoji-icon{
  transform: translateY(0.05em) translateX(-0.02em);
}

.active-emoji {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.8);
}

</style>

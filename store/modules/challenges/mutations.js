import Vue from 'vue'
export default {
  setChallenges(state, challenges) {
    Vue.set(state, 'challenges', challenges)
  }
}

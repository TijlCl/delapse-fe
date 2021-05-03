import Vue from 'vue'
export default {
  setCompletedChallenges(state, challenges) {
    Vue.set(state, 'completedChallenges', challenges)
  },
  addChallenge(state, completedChallenge) {
    state.completedChallenges.push(completedChallenge);
  },
}

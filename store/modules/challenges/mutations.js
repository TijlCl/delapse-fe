import Vue from 'vue'
export default {
  setChallenges(state, challenges) {
    Vue.set(state, 'challenges', challenges)
  },
  updateById(state, updatedChallenge) {
    const oldChallenge = state.challenges.find(challenge => challenge.id === updatedChallenge.id);
    if(oldChallenge) {
      Object.assign(oldChallenge, updatedChallenge);
    }
  },
}

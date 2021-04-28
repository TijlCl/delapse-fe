import Vue from 'vue';
export default {
  setAchievements(state, achievements) {
    Vue.set(state, 'achievements', achievements)
  },
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
  }
}

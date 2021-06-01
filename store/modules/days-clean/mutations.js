import Vue from 'vue'
export default {
  setDaysClean(state, daysClean) {
    Vue.set(state, 'daysClean', daysClean)
  },
}

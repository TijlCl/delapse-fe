import Vue from 'vue'
export default {
  setCheckInsWeekly(state, checkInsWeekly) {
    Vue.set(state, 'checkInsWeekly', checkInsWeekly)
  },
  addCheckIn(state, checkIn) {
    state.checkIns.push(checkIn);
  },
}

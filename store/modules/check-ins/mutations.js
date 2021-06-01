import Vue from 'vue'
export default {
  setCheckInsWeekly(state, checkInsWeekly) {
    Vue.set(state, 'checkInsWeekly', checkInsWeekly)
  },
  setCheckIns(state, checkIns) {
    Vue.set(state, 'checkIns', checkIns)
  },
  addCheckIn(state, checkIn) {
    state.checkIns.push(checkIn);
  },
  setMoodCounts(state, moodCounts) {
    Vue.set(state, 'moodCounts', moodCounts)
  },
  setTotalCheckIns(state, totalCheckIns) {
    Vue.set(state, 'totalCheckIns', totalCheckIns)
  },
  addWeeklyCheckIn(state, checkIn) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];
    state.checkInsWeekly[dayName] = checkIn;
  }
}

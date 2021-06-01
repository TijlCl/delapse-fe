export default {
  async create(context, checkIn) {
    await this.$axios.post(`/api/v1/check-ins`, checkIn)
    await context.commit('checkIns/addWeeklyCheckIn', checkIn, {root: true});
  }
}

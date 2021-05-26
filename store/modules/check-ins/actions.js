export default {
  async fetchThisWeeks (context) {
    if(context.getters['isEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/check-ins/weekly`);
      context.commit('setCheckInsWeekly', data);
    }
  },
}

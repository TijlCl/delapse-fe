export default {
  async fetchDaysClean (context) {
    if(context.getters['daysClean'] == null) {
      const {data} = await this.$axios.get(`/api/v1/days-clean`);
      context.commit('setDaysClean', data);
    }
  }
}

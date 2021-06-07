export default {
  async fetchDaysClean (context) {
    if(context.getters['daysClean'] == null) {
      const {data} = await this.$axios.get(`/api/v1/days-clean`);
      context.commit('setDaysClean', data);
    }
  },

  async relapsed (context) {
    await this.$axios.put(`/api/v1/days-clean/relapsed`);
    context.commit('setDaysClean', 0);
  }
}

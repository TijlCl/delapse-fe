export default {
  async fetchThisWeeks (context) {
    if(context.getters['isWeeklyEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/check-ins/weekly`);
      context.commit('setCheckInsWeekly', data);
    }
  },
  async fetchAll (context, payload) {
    const {data} = await this.$axios.get(`/api/v1/check-ins`, {params: {from: payload.from.toISOString().slice(0, 10), to: payload.to.toISOString().slice(0, 10)}});
    context.commit('setCheckIns', data.data.checkIns);
    context.commit('setTotalCheckIns', data.data.total);
    context.commit('setMoodCounts', data.data.moods);
  },
  async averageMoods (context, payload) {
    if(context.getters['isAverageMoodsEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/check-ins/averege`);
      context.commit('setCheckIns', data.data);
    }
  },
}

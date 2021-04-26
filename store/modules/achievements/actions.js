export default {
  async fetchAll (context) {
    if(context.getters['isEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/achievements`);
      context.commit('setAchievements', data.data);
    }
  }
}

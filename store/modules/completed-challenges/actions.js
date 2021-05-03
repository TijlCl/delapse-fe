export default {
  async fetchCompleted (context) {
    if(context.getters['isEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/challenges/completed`);
      context.commit('setCompletedChallenges', data.data);
    }
  }
}

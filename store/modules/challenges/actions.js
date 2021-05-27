export default {
  async fetchActive (context) {
    if(context.getters['isEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/challenges/active`);
      context.commit('setChallenges', data.data);
    } else if (Date.parse(context.getters['challenges'][0].invalid_at) < new Date()) {
      const {data} = await this.$axios.get(`/api/v1/challenges/active`);
      context.commit('setChallenges', data.data);
    }
  }
}

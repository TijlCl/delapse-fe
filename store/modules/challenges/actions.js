export default {
  async fetchAll (context) {
      const {data} = await this.$axios.get(`/api/v1/challenges/active`);
      context.commit('setChallenges', data.data);
  }
}

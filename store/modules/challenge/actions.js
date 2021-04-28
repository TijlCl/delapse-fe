export default {
  async fetch (context, challengeUserId) {
    const { data } = await this.$axios.get(`/api/v1/challenge-user/${challengeUserId}`);
    context.commit('setChallenge', data.data);
  }
}

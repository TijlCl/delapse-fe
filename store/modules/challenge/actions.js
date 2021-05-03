export default {
  async fetch (context, challengeUserId) {
    const { data } = await this.$axios.get(`/api/v1/challenge-user/${challengeUserId}`);
    context.commit('setChallenge', data.data);
  },

  async complete(context, { id, challenge }) {
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    await this.$axios.post(`/api/v1/challenge-user/${id}/complete`, challenge, config)
      .then(response => {
        context.commit('setErrors', {});
        context.commit('completedChallenges/addChallenge', response.data.data, { root: true });
      }).catch(errors => {
        context.commit('setErrors', errors.response.data.errors);
        throw errors;
      })
  },
}

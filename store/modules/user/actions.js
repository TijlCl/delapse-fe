export default {
  async fetch (context, userId) {
    const { data } = await this.$axios.get(`/api/v1/users/${userId}`);
    context.commit('setUser', data.data);
  },
  async friendRequest (context, userId) {
    const { data } = await this.$axios.post(`/api/v1/users/request/${userId}`);
  },
  async reportUser (context, { userId, report }) {
    await this.$axios.post(`/api/v1/users/report/${userId}`, report)
      .then(response => {
        context.commit('setErrors', {});
      }).catch(errors => {
        context.commit('setErrors', errors.response.data.errors);
        throw errors;
      })
  },

  async fetchUserAchievements (context, userId) {
    const { data } = await this.$axios.get(`/api/v1/achievements/user/${userId}`);
    context.commit('setUserAchievements', data.data);
  },

  async fetchUserDaysClean (context, userId) {
    const { data } = await this.$axios.get(`/api/v1/days-clean/user/${userId}`);
    context.commit('setDaysClean', data);
  },
}

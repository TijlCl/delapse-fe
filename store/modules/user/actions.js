export default {
  async fetch (context, userId) {
    const { data } = await this.$axios.get(`/api/v1/users/${userId}`);
    context.commit('setUser', data.data);
  },
}

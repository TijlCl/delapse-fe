export default {
  async fetchAll (context) {
    const {data} = await this.$axios.get(`/api/v1/friends`);
    context.commit('setFriends', data.data);
  }
}

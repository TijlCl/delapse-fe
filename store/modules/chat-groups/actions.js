export default {
  async fetchAll (context) {
    const {data} = await this.$axios.get(`/api/v1/chat-groups`);
    context.commit('setChatGroups', data.data);
  },
  async create (context, friends) {
    const {data} = await this.$axios.post(`/api/v1/chat-groups`, {friends: friends});
    context.commit('setChatGroups', data.data);
  }
}

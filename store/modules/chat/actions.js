export default {
  async fetch (context, user) {
    const { data } = await this.$axios.get(`/api/v1/chats/${user}`);
    context.commit('setChatId', data.data.id);
    context.commit('setMessages', data.data.messages);
  },
  async sendMessage (context, {message, friendId}) {
    context.commit('addMessage', {body: message, isSender: true});
    await this.$axios.post(`/api/v1/chats/${context.state.id}/send`, {
      to: friendId,
      message: message
    });
  },
  async addEvent(context) {
    this.$axios.put('/api/v1/chats')
  }
}

export default {
  async fetch (context, id) {
    const { data } = await this.$axios.get(`/api/v1/chat-groups/${id}`);
    context.commit('setChatId', data.data.id);
    context.commit('setMessages', data.data.messages);
    context.commit('setUsers', data.data.users);
  },
  async sendMessage (context, {message, chatId}) {
    context.commit('addMessage', {body: message, isSender: true});
    await this.$axios.post(`/api/v1/chat-groups/${chatId}/send`, {
      message: message
    });
  },
  async addUser (context, friendId) {
    await this.$axios.post(`/api/v1/chat-groups/${context.state.id}/addUser`, {
      friendId: friendId
    });
  },
}

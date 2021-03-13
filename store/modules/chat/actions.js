export default {
  async fetch (context, user) {
    const { data } = await this.$axios.get(`/api/v1/chats/${user}`);
    context.commit('setChatId', data.data.id);
    context.commit('setMessages', data.data.messages);
  },
  async sendMessage (context, message) {
    context.commit('addMessage', {body: message, isSender: true});
    await this.$axios.post('/api/v1/chats/4/send', {
      chatId: context.state.id,
      message: message
    });
  }
}

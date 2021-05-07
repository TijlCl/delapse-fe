import mutations from '../../default/detail/mutations'

export default {
  ...mutations,
  setChatId(state, id) {
    state.id = id;
  },
  setMessages(state, messages) {
    state.messages = messages;
  },
  setUsers(state, users) {
    state.users = users;
  },
  addMessage(state, message) {
    state.messages.unshift(message);
  }
}

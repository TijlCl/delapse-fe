import Vue from 'vue'
export default {
  setChatId(state, id) {
    state.id = id;
  },
  setMessages(state, messages) {
    Vue.set(state, 'messages', messages)
    state['messages'] = messages
  },
  addMessage(state, message) {
    state.messages.push(message);
  }
}

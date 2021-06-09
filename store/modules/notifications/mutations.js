export default {
  addNotification(state, amount = 1) {
    state.notificationsAmount = state.notificationsAmount + amount;
  },
  removeNotification(state, amount = 1) {
    state.notificationsAmount = state.notificationsAmount - amount;
  }
}

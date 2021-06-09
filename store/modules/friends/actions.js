export default {
  async fetchAll (context) {
    const {data} = await this.$axios.get(`/api/v1/friends`);
    context.commit('setFriends', data.data);
  },
  async fetchRequests (context) {
    if(context.getters['isRequestsEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/friends/requests`);
      context.commit('setFriendRequests', data.data);
      context.commit('notifications/addNotification', data.data.length, {root: true})
    }
  },
  async acceptRequest (context, userId) {
    const {data} = await this.$axios.post(`/api/v1/friends/accept/${userId}`);
    context.commit('addToFriends', data.data);
    context.commit('removeFromRequests', userId);
  },
  async declineRequest (context, userId) {
    const {data} = await this.$axios.post(`/api/v1/friends/decline/${userId}`);
    context.commit('removeFromRequests', userId);
  }
}

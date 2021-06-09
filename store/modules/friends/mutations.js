export default {
  setFriends(state, friends) {
    state.friends = friends;
  },
  setFriendRequests(state, requests) {
    state.friendRequests = requests.map(request => request.user);
  },
  addFriendRequest(state, user) {
    state.friendRequests.push(user);
  },
  addToFriends(state, friend) {
    state.friends.push(friend);
  },
  removeFromRequests(state, userId) {
    state.friendRequests = state.friendRequests.filter(user => user.id !== userId);
  }
}

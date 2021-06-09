export default {
  friends: state => state.friends,
  findById: state => id => state.friends.filter((friend) => friend.id === id),
  friendRequests: state => state.friendRequests,
  friendRequestsAmount: state => state.friendRequests.length,
  isRequestsEmpty: state => state.friendRequests.length === 0,
  isFriend: state => id => state.friends.filter((friend) => friend.user.id === id).length !== 0,
}

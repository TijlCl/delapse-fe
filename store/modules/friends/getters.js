export default {
  friends: state => state.friends,
  findById: state => id => state.friends.filter((friend) => friend.id === id),
  friendRequests: state => state.friendRequests,
  HelpRequests: state => state.helpRequests,
  friendRequestsAmount: state => state.friendRequests.length,
  HelpRequestsAmount: state => state.helpRequests.length,
  isRequestsEmpty: state => state.friendRequests.length === 0,
  isFriend: state => id => state.friends.filter((friend) => friend.user.id === id).length !== 0,
}

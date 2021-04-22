export default {
  friends: state => state.friends,
  findById: state => id => state.friends.filter((friend) => friend.id === id)

}

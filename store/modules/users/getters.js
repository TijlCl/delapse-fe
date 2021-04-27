export default {
  users: state => state.users,
  findById: state => id => state.users.filter((user) => user.id === id)
}

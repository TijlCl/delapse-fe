export default {
  chatGroups: state => state.chatGroups,
  findById: state => id => state.chatGroups.filter((chatGroup) => chatGroup.id === id)[0]
}

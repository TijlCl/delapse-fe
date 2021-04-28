export default {
  achievements: state => state.achievements,
  errors: state => state.errors,
  isEmpty: state => state.achievements.length <= 0
}

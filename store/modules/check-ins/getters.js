export default {
  checkInsWeekly: state => state.checkInsWeekly,
  errors: state => state.errors,
  isEmpty: state => state.checkInsWeekly.length <= 0
}

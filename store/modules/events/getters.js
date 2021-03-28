export default {
  events: state => state.events,
  errors: state => state.errors,
  isEmpty: state => state.events.length <= 0
}

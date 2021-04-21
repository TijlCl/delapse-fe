import Vue from 'vue'
export default {
  setEvents(state, events) {
    Vue.set(state, 'events', events)
    state['events'] = events
  },
  addEvent(state, event) {
    state.events.push(event);
    state.events.sort((a, b) => new Date(a.date) - new Date(b.date))
  },
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
    state['errors'] = errors
  }
}

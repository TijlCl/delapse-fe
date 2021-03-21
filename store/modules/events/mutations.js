import Vue from 'vue'
export default {
  setEvents(state, events) {
    Vue.set(state, 'events', events)
    state['events'] = events
  },
  addEvent(state, event) {
    state.events.push(event);
  }
}

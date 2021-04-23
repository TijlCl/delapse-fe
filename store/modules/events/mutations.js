import Vue from 'vue'
export default {
  setEvents(state, events) {
    Vue.set(state, 'events', events)
  },
  addEvent(state, event) {
    state.events.push(event);
    state.events.sort((a, b) => new Date(a.date) - new Date(b.date))
  },
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
  },
  updateById(state, updatedEvent) {
    const oldEvent = state.events.find(event => event.id === updatedEvent.id);
    if(oldEvent) {
      Object.assign(oldEvent, updatedEvent);
    }
  },
  removeById(state, eventId) {
    const eventIndex = state.events.map(event => event.id).indexOf(eventId)
    state.events.splice(eventIndex, 1);
  },
}

import Vue from 'vue'
import mutations from '../../default/detail/mutations'

export default {
  ...mutations,
  setEvent(state, event) {
    Vue.set(state, 'event', event)
  },
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
  },
  setTitle(state, title) {
    Vue.set(state.event, 'title', title)
  },
  setDate(state, date) {
    Vue.set(state.event, 'date', date)
  },
  setDescription(state, description) {
    Vue.set(state.event, 'description', description)
  },
  setTag(state, tag) {
    Vue.set(state.event, 'tag', tag)
  },
}

import Vue from 'vue';
export default {
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
  },

  setSettings(state, settings) {
    Vue.set(state, 'settings', settings)
  }
}

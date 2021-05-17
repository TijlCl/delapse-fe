import Vue from 'vue';
export default {
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
  },

  setSettings(state, settings) {
    Vue.set(state, 'settings', settings)
  },

  setEnableLocation(state, enableLocation) {
    Vue.set(state.settings, 'enableLocation', enableLocation)
  },

  setSponsor(state, sponsor) {
    Vue.set(state.settings, 'sponsor', sponsor)
  },

  setPublicGallery(state, publicGallery) {
    Vue.set(state.settings, 'publicGallery', publicGallery)
  },

  setEmergencyContact(state, emergencyContact) {
    Vue.set(state.settings, 'emergencyContact', emergencyContact)
  },
}

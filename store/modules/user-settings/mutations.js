import Vue from 'vue';
export default {
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
  }
}

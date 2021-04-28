import Vue from 'vue'
import mutations from '../../default/detail/mutations'

export default {
  ...mutations,
  setChallenge(state, challenge) {
    Vue.set(state, 'challenge', challenge)
  },
  setErrors(state, errors) {
    Vue.set(state, 'errors', errors)
  },
}

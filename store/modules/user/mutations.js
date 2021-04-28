import Vue from 'vue'
import mutations from '../../default/detail/mutations'

export default {
  ...mutations,
  setUser(state, user) {
    Vue.set(state, 'user', user)
  },
}

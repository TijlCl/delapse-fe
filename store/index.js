import Vuex from 'vuex';
import modules from './modules';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: modules
  });
};

export default createStore

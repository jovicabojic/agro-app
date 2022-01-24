import Vue from 'vue'
import Vuex from 'vuex'
import tractors from './modules/tractors';
import user from './modules/user'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tractors,
    user
  }
})

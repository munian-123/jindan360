import Vue from 'vue'
import Vuex from 'vuex'
import ShowLogin from './ShowLogin'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {

  },
  modules: {
    ShowLogin
  }
})
export default store

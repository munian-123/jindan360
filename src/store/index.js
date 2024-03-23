import Vue from 'vue'
import Vuex from 'vuex'
import ShowLogin from './ShowLogin'
import TorlLry from './TorlLry'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
  },
  modules: {
    ShowLogin,
    TorlLry
  }
})
export default store

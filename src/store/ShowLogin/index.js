export default {
  namespaced: true,
  state: {
    showLogin: false,
    tokon: localStorage.getItem('tokon'),
    // 控制提示框
    isToast: false,
    showCity: false // 地址
  },
  mutations: {
    onShowLogin (state, val) {
      state.showLogin = val
    },
    onShowToast (state, val) {
      state.isToast = val
      setTimeout(() => {
        state.isToast = false
      }, 3000)
    },
    onShowCity (state, val) {
      state.showCity = val
    }
  },
  actions: {

  },
  getters: {

  }
}

export default {
  namespaced: true,
  state: {
    showLogin: false,
    tokon: localStorage.getItem('tokon'),
    // 控制提示框
    isToast: false
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
    }
  },
  actions: {

  },
  getters: {

  }
}

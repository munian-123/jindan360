import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.config.productionTip = false
Vue.use(SlideVerify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

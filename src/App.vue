<template>
  <div id="app">
    <!-- 顶部 -->
    <TopBar/>
    <HeaDers />
   <router-view></router-view>
    <FooTers />
    <LoginHers v-show="showLogin" />
  <ToastHers v-show="isToast">*提示框*</ToastHers>
  <CityType v-show="showCity"/>
  </div>
</template>
<script>
import TopBar from '../src/components/TopBar'
import HeaDers from '../src/components/HeaDers'
import FooTers from '../src/components/FooTers'
import LoginHers from '../src/components/LoginHers.vue'
import ToastHers from '../src/components/ToastHers.vue'
import CityType from '../src/components/CityType.vue'
import { mapState } from 'vuex'
export default {
  components: {
    TopBar,
    HeaDers,
    FooTers,
    LoginHers,
    ToastHers,
    CityType
  },
  computed: {
    ...mapState('ShowLogin', ['showLogin', 'isToast', 'showCity'])
  }
}
</script>
<style>
*{
margin: 0%;
padding: 0%;
box-shadow: none;
}
</style>

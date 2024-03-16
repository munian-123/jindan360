<template>
  <div id="app">
    <!-- 顶部 -->
    <TopBar/>
    <HeaDers />
   <router-view></router-view>
    <FooTers />
    <LoginHers v-show="showLogin" />
  </div>
</template>
<script>
import TopBar from '../src/components/TopBar'
import HeaDers from '../src/components/HeaDers'
import FooTers from '../src/components/FooTers'
import LoginHers from '../src/components/LoginHers.vue'
import { mapState } from 'vuex'
export default {
  components: {
    TopBar,
    HeaDers,
    FooTers,
    LoginHers
  },
  computed: {
    ...mapState('ShowLogin', ['showLogin'])
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

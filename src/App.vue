<template>
  <div id="app">
    <!-- 顶部 -->
    <TopBar/>
    <HeaDers />
   <router-view></router-view>
    <FooTers />
  </div>
</template>
<script>
import TopBar from '../src/components/TopBar'
import HeaDers from '../src/components/HeaDers'
import FooTers from '../src/components/FooTers'
export default {
  components: {
    TopBar,
    HeaDers,
    FooTers
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

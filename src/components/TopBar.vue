<template>
  <div class="topbar">
<div class="wrap wrap-ss">
  <div class="text">欢迎来到叩丁狼积分商城</div>
  <div class="text-list">
  <div class="list">
   <h3 @click="onToast">用户名：youk</h3>
   <h3>我的积分：--</h3>
   <h3>获取积分</h3>
   <h3>叮当狼官网</h3>
  </div>
   <!-- <div class="click" @click="onShowlogin" v-if="tokon">登录</div> -->
   <div class="click"  @click="onTorlley">
    购物车</div>
  </div>
  </div>
  <button @click="ontokon">1</button>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapState('ShowLogin', ['tokon']),
    // ...mapMutations('ShowLogin', ['onShowLogin']),
    onShowlogin () {
      this.$store.commit('ShowLogin/onShowLogin', true)
    },
    ontokon () {
      localStorage.removeItem('tokon')
    },
    onToast () {
      this.$store.commit('ShowLogin/onShowToast', true)
    },
    onTorlley () {
      this.$router.push('/torlley')
    }
  }
}

</script>
<style lang="less" scoped>
.topbar{
  height: 40px;
  background: #242B39;
}
.wrap-ss{
  background: #242B39;
  height: 40px;
}
.wrap{
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text{
  color: #78859F;
}
.list{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-right: 20px;
}
.text-list{
  display: flex;
  font-size: 12px;
}
h3{
  font-weight: 100;
  margin-left: 10px;
  color: #78859F;
}
.click{
width: 124px;
height: 40px;
background: #0A328E;
display: flex;
justify-content: center;
align-items: center;
color: aliceblue;
cursor: pointer;
}
</style>

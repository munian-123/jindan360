<template>
  <div class="curmbs">
    <span @click="$router.push('/')">首页</span>
    <span v-show="curmbs==='1'" @click="$router.push('/goods')" >/全部商品</span>
    <span v-show="curmbs==='2'" :class="curmbs==='2'?'active':''">/商品详情</span>
    <span v-show="curmbs==='3'">/我的订单</span>
    <span v-show="curmbs==='3'">/个人中心</span>
    <span v-show="curmbs==='4'">/专属福利</span>
    <span v-show="curmbs==='5'">/购物车</span>
  </div>
</template>
<script>
export default {
  props: ['curmbs'],
  data () {
    return {
    }
  },
  created () {
    console.log(this.curmbs)
  }
}
</script>
<style lang="less" scoped>
.curmbs{
  span{
    font-size: 20px;
  }
  .active{
    font-size: 25px;
    font-weight: 700;
  }
}
</style>

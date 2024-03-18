<template>
  <div class="headers">
   <div class="warg warg-ssss">
    <div class="head">
      <img src="../assets/img/indexLogo.6f8ac4f0.png" alt="">
    </div>
    <div class="heads">
     <span @click="$router.push('/').catch(err=>{})" :class="$route.path==='/'?'active':''">首页</span>
     <span @click="$router.push(`/goods?curmbs=1`).catch(err=>{})" :class="$route.path==='/goods'?'active':''">全部商品</span>
     <span @click="$router.push('/user').catch(err=>{})" :class="$route.path==='/user'?'active':''">个人中心</span>
     <span @click="$router.push('/order').catch(err=>{})" :class="$route.path==='/order'?'active':''">我的订单</span>
     <span @click="$router.push('free').catch(err=>{})" :class="$route.path==='/free'?'active':''">专属福利</span>
    </div>
    <div class="headss">
      <input type="text" placeholder="输入文字">
      <button class="btn">
        <img src="../assets/img/search.png" alt="">
      </button>
    </div>
   </div>
  </div>
</template>
<script>
export default {
  name: 'HeaDers'
}
</script>
<style scoped lang="less">
.headers{
height: 99px;
background: #fff;
}
.warg-ssss{
 height: 99px;
}
.warg{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .heads{
width: 500px;
height: 16px;
font-family: SourceHanSansSC;
font-weight: 500;
font-size: 16px;
line-height: 23px;
display: flex;
justify-content: space-between;
margin-right: 80px;
margin-top: 10px;
span{
width: 100px;
height: 16px;
cursor: pointer;
color: #555252;
list-style: none;
}
.active{
  color: #2b5ac8;
  font-weight: 300;
}
  }
  .headss{
    input{
width: 214px;
height: 40px;
border-radius: 20px 0px 0px 20px;
border: 1px solid #DEDEDE;
    }
    .btn{
width: 50px;
height: 40px;
background: #0A328E;
border-radius: 0px 20px 20px 0px;
animation: spin 2s linear infinite;
z-index: 1;
    }
  }
}
</style>

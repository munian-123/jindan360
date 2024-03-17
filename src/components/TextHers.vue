<template>
  <div class="text">
   <div class="warg">
    <div class="main">
      <span class="sp"><slot></slot></span>
       <span>更多></span>
    </div>
   </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.text{
  margin-top: 20px;
  background: #fff;
  height: 50px;
  margin-bottom: 10px;
  .warg{
    width: 1200px;
    margin: 0% auto;
    .main{
      height: 50px  ;
      display: flex;
      justify-content: space-between;
      align-items: center ;
      .sp{
        font-size: 30px;
      }
      span{
        color: #e07517;
      }
    }
  }
}
</style>

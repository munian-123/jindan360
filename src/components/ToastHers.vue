<template>
  <div class="toast">
   <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.toast{
  position: fixed;
  top: 0%;
  left: 50%;
  background: #fff;
  // height: 50px;
  padding: 5px;
  border:solid 1px #5a5454;
  border-radius: 20px;
  span{
    color: red;
    font-size: 20px;
  }
}
</style>

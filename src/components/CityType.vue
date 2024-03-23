<template>
  <div class="city">
  <div class="warg" @click.stop="onShowCity"> </div>
    <div class="box-tity">
      <div class="tops">
      <h3>新建地址</h3>
      <img @click="onShowlogin" src="../assets/img/close.png" alt="">
    </div>
     <div class="lisy">
    <div class="nname">
  <div class="item">
   <span >收件人：</span><input type="text" v-model="name" placeholder="请输入你的姓名">
  </div>
  <div class="item">
    <span>手机号码：</span><input type="number" v-model="num" min="1" max="11" placeholder="请输入手机号码" required>
  </div>
  <div class="item">
    <span>地址：</span><input type="text" v-model="dataci" placeholder="请输入详细地址">
  </div>
  <div class="item">
    <input type="checkbox" name="" id="">
    <h3>默认</h3>
  </div>
  <button @click="onType">确定</button>
    </div>
     </div>

  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      num: '',
      dataci: ''
    }
  },
  methods: {
    onShowCity () {
      this.$store.commit('ShowLogin/onShowCity', false)
    },
    onShowlogin () {
      this.$store.commit('ShowLogin/onShowCity', false)
    },
    onType () {
      if (this.name === '' || this.num === '') {
        return alert('不能为空')
      } else {
        console.log('鼠标')
      }
    }
  }

}
</script>
<style lang="less" scoped>
.city{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .warg{
    width: 100%;
    height: 100%;
    background: rgba(0, 0,0,0.5);
  }
    .box-tity{
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0;
    right: 0%;
    margin:auto;
    width: 555px;
    height: 423px;
    background-image: url('../assets/img/login-box-bg.png');
    }
    .tops{
      // margin-left: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: left;
      h3{
        margin-left: 50px;
      }
    }
    .lisy{
      width: 300px;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      // align-items: center;
      margin-top: 50px;
      margin-left: 130px;
      .nname{
        text-align: center;
        .item{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 50px;
          margin-top: 10px;
          span{
            font-size: 20px;
          }
          input{
            width: 170px;
            height: 40px;
          }
        }
      }
    }
  }

</style>

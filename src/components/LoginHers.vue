<template>
  <div class="login-model">
    <div class="mack" @click="onShowlogin"></div>
    <div class="login-box">
      <img @click="onShowlogin" src="../assets/img/close.png" alt="">
      <div class="text-list">
        <span :class="isBody?'active':''" @click="onisBody">手机号码登录</span>
        <span>|</span>
        <span :class="!isBody?'active':''" @click="onisBody">微信扫码登录</span>
      </div>
      <div class="body">
      <div class="inpuot" v-show="isBody">
        <input class="inp" type="text" placeholder="请输入手机号">
         <div class="item">
        <slide-verify :l="42"
            :r="20"
            :w="362"
            :h="140"
            :slider-text="msg"
            class="slide-box"
            :style="{width:'100%'}"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
          </div>
        <div class="item">
          <input type="text" placeholder="请输入验证码">
          <button @click="onCodetime">{{code}}</button>
        </div>
        <button class="btn" @click="onmitLogin">登录</button>
      </div>
       <div class="ma" v-show="!isBody">
        23
       </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isBody: true,
      msg: '向右滑动',
      code: '获取验证码'

    }
  },
  methods: {
    onShowlogin () {
      this.$store.commit('ShowLogin/onShowLogin', false)
    },
    onisBody () {
      this.isBody = !this.isBody
    },
    // 拼图成功
    onSuccess (times) {
      const ms = (times / 1000).toFixed(1)
      this.msg = 'login success,耗时' + ms + '秒'
    },
    // 失败
    onFail () {
      this.onRefresh()
    },
    // 拼图刷新
    onRefresh () {
      this.msg = '再试一次'
    },
    // dianjidengl
    onmitLogin () {
      if (this.msg === '再试一次' || this.msg === '向右滑动') {
        alert('请滑动到指定位置')
        return
      }
      alert('滑动通过')
    },
    // 获取验证码
    onCodetime () {
      const timess = 60
      setInterval(() => {
        this.timess--
      }, 1000)
      this.code = '倒计时' + timess + '秒'
    }
  }
}
</script>
<style lang="less" scoped>
.login-model{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0;
  .mack{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0,0, 0.5);
  }
  .login-box{
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0;
    right: 0%;
    margin:auto;
    width: 555px;
    height: 423px;
    background-image: url('../assets/img/login-box-bg.png');
    img{
      position: absolute;
      right: 0;
    }
    .text-list{
      display: flex;
      justify-content: center;
      margin-top: 40px;
      span{
        margin: 10px;
        color: #696868;
      }
      .active{
         color: #000;
         font-weight: 800;
      }
    }
    .body{
      background: #946060;
       width: 360px;
       height: 200px;
       margin: 0 auto;
       text-align: center;
       .inpuot{
        // text-align: center;
        // width: 100%;
        margin-top: 10px;
        .inp{
          width: 100%;
          height: 50px;
          border:1px solid #000 ;
        }
        .item{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          button{
           background: #1b11b0;
           width: 100px;
           height: 50px;
          }
          input{
            border:1px solid #000 ;
            width: 100%;
            height: 50px;
          }
        }
       }
       .btn{
        width: 100%;
        height: 50px;
        background: #1b11b0;
        margin-top: 20px;

       }
    }
  }
}
/deep/.slide-box{
width: 100%;
position: relative;
box-sizing: border-box;
canvas{
  position: absolute;
  left: 0;
  top: -120px;
  display: none;
  width: 100%;
  box-sizing: border-box;
}
.slide-verify-block{
  width: 85px;
  height: 136px;
}
.slide-verify-refesh-icon{
  top: -120px;
  display: none;
  // height: 100px;
}
&:hover{
  canvas{
    display: block;
  }
  .slide-verify-refesh-icon{
    display: block;
  }
}
}
</style>

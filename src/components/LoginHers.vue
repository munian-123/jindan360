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
        <input class="inp" ref="popin" type="text" v-model="number" placeholder="请输入手机号">
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
          <input type="text" placeholder="请输入验证码" v-model="smsCode">
          <button @click="onCodetime" v-show="isSumde">{{code}}</button>
          <button @click="onCodetime" v-show="!isSumde">{{cunt}}秒</button>
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
import { postCode } from '../request/api'
export default {
  data () {
    return {
      isBody: true,
      msg: '向右滑动',
      code: '获取验证码',
      cunt: 10,
      isSumde: true,
      number: '',
      smsCode: ''
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
      // if (this.number === '') {
      //   return alert('请输入手机号码')
      // }
      const ms = (times / 1000).toFixed(1)
      this.msg = 'login success,耗时' + ms + '秒'
      console.log(this.number)
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
    async onmitLogin () {
      if (this.number === '') {
        return alert('手机号')
      }
      if (this.msg === '再试一次' || this.msg === '向右滑动') {
        alert('请滑动到指定位置')
        return
      }
      const res = await postCode({ isParty: this.isSumde, mobile: this.number, smsCode: this.smsCode })
      console.log(res)
      const tokon = 'ksjdu'
      localStorage.setItem('tokon', tokon)
      alert('登录成功')
      this.$store.commit('ShowLogin/onShowLogin', false)
    },
    // 获取验证码
    onCodetime () {
      const reg = /^1[3-9]\d{9}$/
      if (reg.test(this.number) || this.number === '') {
        alert('手机号码格式不对')
        this.$refs.popin.focus()
        return
      }
      if (this.msg === '再试一次' || this.msg === '向右滑动') {
        return alert('请滑动到指定位置')
      }
      if (!this.isSumde) {
        return
      }
      this.isSumde = false
      // 短信请求
      console.log(this.smsCode)
      const time = setInterval(() => {
        this.cunt--
        if (this.cunt === 5) {
          this.smsCode = '123456'
        }
        if (this.cunt === 0) {
          this.isSumde = true
          clearInterval(time)
          this.cunt = 10
        }
      }, 1000)
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
          border:1px solid #514e4e ;
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
            border:1px solid #535050 ;
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
        border: 0;

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

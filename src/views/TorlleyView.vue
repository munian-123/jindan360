<template>
  <div class="torloy">
<div class="warg">
  <div class="top">
    购物车
  </div>
  <div class="city">
    <div class="text">
      <h3>确认收获地址，收货人，联系方式</h3>
      <h3>
        新建地址
      </h3>
    </div>
    <div class="site">
      <div class="sitycity">
      <input type="checkbox" name="" id="">
      <span>名字</span>
      <span>地址</span>
      <span>号码</span>
    </div>
    <div class="bntu">
      <button>修改</button>
      <button>删除</button>
    </div>
    </div>
    <div class="sitety"><h1 @click="oncity">+</h1></div>
    <div class="sites" v-if="false">空</div>
  </div>
  <div class="goodslist" >
    <div class="tops">
      <input type="checkbox" v-model="checkboxs" @change="onChan" name="" id="">
      <h3>购物车</h3>
      <span>小鸡（积分）</span>
    </div>
    <div class="goods" v-for="(item, index) in goodslist" :key="index">
    <div class="text">
      <input type="checkbox" name="" id="" @change="onCheckBox" v-model="item.checkbox">
     <div class="imag">
       <img :src="item.deteliList.mainPictures[0]" alt="">
     </div>
     <div class="title">
         <h3>{{ item.deteliList.name}}</h3>
         <div class="t">
         <p>{{ item.specsitem }}</p>
         <span>数量:{{ item.value }}</span>
        </div>
     </div>
    </div>
    <div class="btnss">
      <button class="btn1" @click="onqcGoods(item.id,index)">删除商品</button>
      <button class="btn2">提交订单</button>
    </div>
     <span>{{item.deteliList.salesCount}}积分</span>
    </div>
    <div class="tdan" v-if="goodslist.length===1">
     <div class="tex">
      <h3>总分：</h3>
      <span>{{getZongjif}}积分</span>
     </div>
      <button @click="onFron">提交订单</button>
    </div>
  </div>
</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goodslist: JSON.parse(localStorage.getItem('goodsViewList')) || [],
      checkboxs: true,
      zongjif: [],
      formList: JSON.parse(localStorage.getItem('formList')) || []// 订单信息库
    }
  },
  created () {
    console.log(this.goodslist)
    this.Zoonjif()
    console.log(this.zongjif)
    console.log(this.getZongjif)
  },
  methods: {
    // 地址
    oncity () {
      this.$store.commit('ShowLogin/onShowCity', true)
    },
    onChan () {
      console.log(this.checkboxs)
      this.goodslist.forEach(item => {
        item.checkbox = this.checkboxs
      })
    },
    onCheckBox () {
      this.checkboxs = this.goodslist.every(item => {
        return item.checkbox === true
      })
      this.Zoonjif()
    },
    Zoonjif () {
      this.zongjif = this.goodslist.filter(item => {
        return item.checkbox === true
      })
    },
    // 删除
    onqcGoods (id, index) {
      this.goodslist.splice(index, 1)
      localStorage.setItem('goodsViewList', JSON.stringify(this.goodslist))
    },
    // 提交订单
    onFron () {
      const res = this.goodslist.filter(item => {
        return item.checkbox === true
      })
      this.formList = [...res, ...this.formList]
      alert('提交哦啊')
      console.log(this.formList)
      localStorage.setItem('formList', JSON.stringify(this.formList))
      // localStorage.removeItem('formList')
      console.log(this.formList)
      this.goodslist = this.goodslist.filter(item => {
        return item.checkbox === false
      })
      localStorage.setItem('goodsViewList', JSON.stringify(this.goodslist))
      console.log(this.goodslist)
    }
  },
  computed: {

    getZongjif () {
      const totalPrice = this.zongjif.reduce((accumulator, item) => {
        return (accumulator + item.deteliList.salesCount * item.value)
      }, 0)
      return totalPrice
    }
  }
}
</script>
<style lang="less" scoped>
.torloy{
  width: 100%;
  .warg{
    width: 1200px;
    margin: 0 auto;
    .top{
height: 17px;
font-family: SourceHanSansSC;
font-weight: 300;
font-size: 16px;
color: #666666;
line-height: 23px;
padding: 10px;
font-size: 20px;
    }
    .city{
      height: 150px;
      background: #d80f0f;
      margin-bottom: 20px;
      .text{
        height: 50px;
        background: #7f7c7c;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3{
        font-size: 20px;
        font-weight: 100;

      }
      }
       .site{
        height: 50px;
          width: 100%;
          background: #17c814;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .sitycity{
           margin-left: 10px;
           span{
            margin-left: 20px;
           }
          }
       }
       .sitety{
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        h1{
          font-size: 50px;
          margin-top: -10px;
          cursor: pointer;
        }
       }
    }
    .goodslist{
      .tops{
        display: flex;
        background: #c3bdbd;
        justify-content: space-between;
        align-items: center;
        height: 50px;
      }
      .goods{
        width: 100%;
        height: 100px;
        // background: #aa7676;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: #7f7c7c 1px solid;
        .text{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
          .imag{
           width: 80px;
           height: 80px;
           background: #666666;
           margin-left: 20px;
           img{
            width: 100%;
            height: 100%;
           }
          }
          .title{
            margin-left: 10px;
            .t{
              display: flex;
              span{
                margin-left: 20px;
              }
            }
          }
        }
        .btnss{
          button{
            height: 40px;
            width: 80px;
            border: 0;
            margin-left: 10px;
          }
          .btn1{
            background: #666666;
            color: #d80f0f;
          }
          .btn2{
            background: #666666;
            color: #17c814;
          }
        }
        span{
          margin-right: 50px;
        }
      }
      .tdan{
        height: 100px;
        width: 100%;
        margin-left: 95%;
        .tex{
          display: flex;
          align-items: center;
          margin-left: -70px;
          margin-bottom: 20px;
          margin-top: 10px;
        }
        button{
          width: 150px;
          height: 40px;
         background: #1218e1;
         margin-left: -80px;
         border: 0;
        }
      }
    }
  }
}
</style>

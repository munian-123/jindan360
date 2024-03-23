<template>
  <div class="order">
    <div class="warg">
     <div class="top">
      <CurmbsType :curmbs="curmbs"/>
     </div>
     <div class="main" v-for="(item, index) in formList" :key="index">
      <div class="tops">
        <h3>订单信息</h3>
        <h3>时间</h3>
        <h3>地址信息</h3>
      </div>
     <div class="header">
    <div class="text">
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
    <span>{{item.deteliList.salesCount}}积分</span>
      </div>
      <div class="footer">
        <button>获取订单</button>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
import CurmbsType from '../components/CurmbsType.vue'
export default {
  components: {
    CurmbsType
  },
  data () {
    return {
      formList: JSON.parse(localStorage.getItem('formList')) || []
    }
  },
  created () {
    console.log(this.formList)
  }
}
</script>
<style lang="less" scoped>
.order{
  width: 100%;
  .warg{
    width: 1200px;
    margin: 0% auto;
    .top{
margin-top: -20px;
height: 17px;
font-family: SourceHanSansSC;
font-weight: 300;
font-size: 16px;
color: #666666;
line-height: 23px;
padding: 10px;
      }
      .main{
        // background: #666666;
        height: 230px;
        margin-top: 10px;
        border:  #666666 solid 1px;
       .tops{
         height: 50px;
         background: #666666;
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         h3{
          color: #fff;
          align-items: center;
          margin-left: 20px;
         }

       }
       .header{
        // background: #53c54b;
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
          .imag{
           width: 90px;
           height: 90px;
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
       }
      }
  }
}
</style>

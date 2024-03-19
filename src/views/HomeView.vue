<template>
  <div class="home">
    <div class="warg">
  <div class="imag">
    <img src="../assets/img/banner.f559b49d.png" alt="">
  </div>
  <TextHers>*精品推荐*</TextHers>
  <div class="textlist">
    <div class="itme" v-for="(item, index) in MutliList" :key="index">
      <img :src="item.pictures[1]" alt="">
      <div class="call">
        <div class="text">
        <span>{{ item.alt }}</span>
        <h6>{{ item.title }}</h6>
        <button class="btn">立即进入</button>
      </div>
      </div>
    </div>
  </div>
  <TextHers>*热门推荐*</TextHers>
  <div class="texthot">
    <img src="../assets/img/404.94e7c552.jpg" alt="">
    <div class="textlist hot">
    <div class="itme " v-for="item in goodsList" :key="item.id" @click="onDetelis(item.id)">
      <img :src="item.picture" alt="">
      <div class="call">
        <div class="text">
        <span>{{ item.name }}</span>
        <h6>{{item.orderNum}}积分</h6>
        <button class="btn">立即兑换</button>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="footer">
  <div class="foot">
    <TextHers>*积分攻略*</TextHers>
    <div class="imglist">
      <div class="imag">
       <img src="../assets//img/integral-01.9386d4bf.png" alt="">
       <div class="text">
       <span class="s">签到得积分</span><br>
       <button class="btn">去签到</button>
       </div>
      </div>
      <div class="imag">
       <img src="../assets//img/integral-02.150d92a1.png" alt="">
       <div class="text">
       <span class="s">购物课得积分</span><br>
       <button class="btn">去购课</button>
       </div>
      </div>
      <div class="imag">
       <img src="../assets//img/integral-03.9870f3f1.png" alt="">
       <div class="text">
       <span class="s">推荐得积分</span><br>
       <button class="btn">去推荐</button>
       </div>
      </div>
      <div class="imag">
       <img src="../assets//img/integral-04.afadcbdf.png" alt="">
       <div class="text">
       <span class="s">拼团得积分</span><br>
       <button class="btn">去拼团</button>
       </div>
      </div>
    </div>
     </div>
</div>
  </div>
</template>

<script>
import TextHers from '../../src/components/TextHers.vue'
import { getMutliData, getNewData } from '../request/api.js'
export default {
  components: {
    TextHers
  },
  data () {
    return {
      MutliList: [], // 推荐

      page: 1,
      pageSize: 8,
      goodsList: []

    }
  },
  async created () {
    const res = await getMutliData()
    this.MutliList = res.result
    console.log(this.MutliList)
    const ress = await getNewData(this.page, this.pageSize)

    this.goodsList = ress.result.items
    console.log(ress.result.items)
  },
  methods: {
    onDetelis (id) {
      this.$router.push(`/detelis?id=${id}&curmbs=2`)
    }
  }
}
</script>
<style scoped lang="less">
.home{
  background-color: #F5F5F5;
  .warg{
    width: 1200px;
    margin: 0 auto;
    img{
      height: 446px;
      width: 1200px;
    }
    .textlist{
      height: 412px;
      display: flex;
      justify-content: space-between;
      .itme:hover{
        transform: scale(0.9);
        box-shadow: #08dfd1 0 0px 0 5px;
      }
      .itme:hover .btn{
        background: #7f9ee5;
        color: #fff;
      }
      .itme{
       width: 285px;
       transition: all 3s;
       text-align: center;
       img{
        width: 270px;
        height: 250px;
       }
       .call{
         width: 285px;
         height: 162px;
         margin: auto;
        .text{
         text-align: center;
          line-height: 30px;
         span{
          font-weight: 300;
font-size: 18px;
color: #333333;
font-family: SourceHanSansSC;
         }
         h6{
          color: #FD604D;
          font-family: SourceHanSansSC;
         }
         .btn{
          width: 100px;
height: 36px;
border: 1px solid #0A328E;
font-weight: 300;
color: #0A328E;
font-family: SourceHanSansSC;
         }
        }
       }
      }
    }
    .texthot{
    img{
      width: 1200px;
height: 180px;
background: #FFB089;
    }
    .hot{
     height: 864px;
     width: 1200px;
     overflow: hidden;
     flex-wrap: wrap;
     .itme{
      margin-bottom:20px;
     }
    }
    }
  }
  .footer{
      width: 100%;
      height: 280px;
      background: #fff;
      .foot{
        width: 1200px;
        margin: 0 auto;
        .imglist{
          height: 168px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .imag{
            position: relative;
            .text{
              position: absolute;
              top: 20%;
              left: 10%;
              .s{
                width: 149px;
               height: 29px;
                font-family: SourceHanSansSC;
                font-weight: bold;
                font-size: 30px;
                color: #FFFFFF;
                line-height: 23px;
              }
              .btn{
                width: 96px;
                 height: 27px;
                 border: 1px solid #FFFFFF;
                 margin-top: 20px;
                 margin-left: 10px;
              }
            }
          }
        }
      }
    }
}
</style>

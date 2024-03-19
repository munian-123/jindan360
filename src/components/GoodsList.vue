<template>
  <div class="goodslist">
    <div class="warg">
    <div class="texthot">
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
  <div class="footer">
    <h1 v-if="isShow">加载更多~~~</h1>
    <h1 v-else>没有更多了~~~</h1>
  </div>
    </div>
  </div>
</template>
<script>
import { getNewData } from '../request/api'
export default {
  props: ['subType'],
  data () {
    return {
      page: 2,
      pageSize: 20,
      goodsList: [],
      Px: 100,
      isShow: true
    }
  },
  created () {
    this.getGoodsData()
    window.addEventListener('scroll', this.handleScroll)
    this.Px = 0
    console.log(this.subType)
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    console.log(window.innerHeight, window.screenY, document.body.scrollHeight)
  },
  methods: {
    async getGoodsData () {
      const res = await getNewData(this.page, this.pageSize)
      this.goodsList = res.result.items
      console.log(this.goodsList)
    },
    // 整个页面监听高度
    async handleScroll () {
      if (window.pageYOffset > 1672 + this.Px) {
        this.Px = this.Px + 1794
        this.page++
        const res = await getNewData(this.page, this.pageSize)
        console.log(res)
        setTimeout(() => {
          this.goodsList = [...this.goodsList, ...res.result.items]
        }, 2000)
        if (this.page >= res.result.pages) {
          this.isShow = false
        }
        console.log('到底了')
      }
      // console.log(window.innerHeight, window.screenY, document.body.scrollHeight)
      // console.log(window.pageYOffset)
    },
    onDetelis (id) {
      this.$router.push(`/detelis?id=${id}&curmbs=1`)
    }
    // @scroll="handleScroll"  这个可以监听盒子元素
    // handleScroll () {
    //   const scrollContai = document.wind
    //   console.log(scrollContai)
    //   console.log(scrollContai.scrollTop)
    //   if (scrollContai.scrollTop + scrollContai.clientHeight >= scrollContai.scrollHeight) {
    //     console.log('到底了')
    //   }
    // }
  }

}
</script>
<style lang="less" scoped>
.goodslist{
  margin-top: 40px;
  width: 100%;
  .warg{
    width: 1200px;
    margin: 0% auto;
    .textlist{
      // height: 412px;
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
    //  height: 864px;
     width: 1200px;
    //  overflow: hidden;
    // overflow-y: scroll;
     flex-wrap: wrap;
     .itme{
      margin-bottom:20px;
     }
    }
    }
    .footer{
    width: 1200px;
    // height: 30px;
    text-align: center;
    margin-top: -20px;
    }
  }

}
</style>

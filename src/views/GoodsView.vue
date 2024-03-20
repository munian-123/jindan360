<template>
  <div class="goods">
    <div class="warg">
      <div class="top">
        <CurmbsType :curmbs="curmbs"/>
      </div>
      <div class="iamg">
        <img src="../assets/img//banner.4c6b6225.png" alt="">
      </div>
      <div class="textlist">
         <div class="text">
          <h4>排序:</h4>
          <span>价格</span>
          <span>销量</span>
          <span>分数</span>
         </div>
         <div class="list">
          <h4>分类:</h4>
          <span class="sssss"  v-for="item in hotMap" :key="item.type"
          @click="onHotMap(item.url,item.type)" :class="item.type===cunt?'active':''">
            {{item.title}}
            </span>
         </div>
         <div class="spans">
              <span @click="GoodsList(index)" v-for="(item, index) in subTypes"
               :key="index" :class="index===cunts?'goodsive':''">
                 {{ item.title }}
              </span>
            </div>
      </div>
      <GoodsList :goodsLists="goodsLists"/>
    </div>
  </div>
</template>
<script>
import CurmbsType from '../components/CurmbsType.vue'
import GoodsList from '../components/GoodsList.vue'
import { getHotpreFerence } from '../request/api'
export default {
  components: {
    CurmbsType,
    GoodsList
  },
  data () {
    return {
      curmbs: this.$route.query.curmbs,
      hotMap: [
        { type: '0', title: '全部' },
        { type: '1', title: '特惠推荐', url: '/hot/preference' },
        { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
        { type: '3', title: '一站买全', url: '/hot/oneStop' },
        { type: '4', title: '新鲜好物', url: '/hot/new' }
      ],
      subTypes: [],
      goodsLists: [],
      isShow: false,
      cunt: '0',
      cunts: 10
    }
  },
  created () {
    if (this.$route.query.cuntt) {
      this.cunt = this.$route.query.cuntt
    }
    // this.cunts = this.$route.query.cuntt
  },
  methods: {
    async onHotMap (url, type) {
      console.log(url, type)
      if (type === '0') {
        this.$router.go(0)
        this.cunt = '0'
      }
      const res = await getHotpreFerence(url)
      console.log(res.result.subTypes)
      this.subTypes = res.result.subTypes
      this.cunt = type
      this.cunts = 10
    },
    GoodsList (index) {
      this.goodsLists = this.subTypes[index].goodsItems
      console.log(index, this.goodsLists)
      this.cunts = index
    }
  }
}
</script>
<style lang="less" scoped>
.goods{
    background: #eee;
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
      }
      .iamg{
        width: 100%;
        height: 100%;
        margin-top: 10px;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .textlist{
        .text{
          display: flex;
          span{
            margin-left: 10px;
            cursor: pointer;
          }
        }
        .list{
          display: flex;
          margin-top: 10px;
          span{
            margin-left: 10px;
            cursor: pointer;
            text-align: center;
          }

        }
        .spans{
         margin-left: 90px;
         align-items: center;
         height: 35px;
         margin-top: 10px;
        span{
          font-size: 20px;
          color: #1297cc;
          cursor: pointer;
          border: 1px solid #666666;
          margin-left: 10px;
        }
}
      }
    }
}
.active{
  font-weight: 800;
  color: #be1d1d;
  font-size: 20px;
}
.goodsive{
 background: #1297cc;
 color: #fff;
}
</style>

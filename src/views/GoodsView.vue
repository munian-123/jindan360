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
          <span>全部</span>
          <span class="sssss" v-for="item in hotMap" :key="item.type" @click="onHotMap(item.url,item.type)">
            {{item.title}}
            </span>
         </div>
         <!-- <div class="spans">
              111
            </div> -->
      </div>
      <GoodsList/>
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
        { type: '1', title: '特惠推荐', url: '/hot/preference' },
        { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
        { type: '3', title: '一站买全', url: '/hot/oneStop' },
        { type: '4', title: '新鲜好物', url: '/hot/new' }
      ],
      subTypes: [],
      isShow: false
    }
  },
  created () {

  },
  methods: {
    async onHotMap (url, type) {
      console.log(url, type)
      const res = await getHotpreFerence(url)
      console.log(res.result.subTypes)
      this.subTypes = res.result.subTypes
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
          .sssss{
            position: relative;
          }
          .spans{
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
}
</style>

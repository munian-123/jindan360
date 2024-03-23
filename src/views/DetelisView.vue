<template>
  <div class="detelis">
    <div class="warg">
      <div class="top">
        <CurmbsType :curmbs="curmbs"/>
      </div>
      <div class="main">
      <div class="calsslist">
       <div class="imag">
        <div class="imagss">
          <img :src="deteliList.mainPictures[cunt]">
        </div>
        <div class="items">
          <div class="item" v-for="(item, index) in deteliList.mainPictures"
          :key="index" @click="onCunt(index)" :class="cunt===index?'active':''" >
            <img :src="item" alt="">
          </div>
        </div>
       </div>

       <div class="texts">
        <div class="text">
          <h3>{{ deteliList.name }}</h3>
          <p>{{ deteliList.desc }}</p>
          <h2>{{deteliList.salesCount}}积分</h2>
          <div class="lists">
            <span v-for="item in deteliList.categories" :key="item.id">
              {{ item.name }}
            </span>
          </div>
        </div>
        <div class="yanshi">
           <span>商品购买</span>
           <div class="specs">
            <div class="itemLite">
               <h4>{{ specs[0].name }}:</h4>
               <div class="smdx">
                <div class="spansss" v-for="(items, index) in specs[0].values" :key="index"
                 @click="onSpecsItems(items.name,index)" :class="cunts===index?'activess':''">{{ items.name }}</div>
               </div>
            </div>
            <div class="itemLite" v-if="specs.length===2">
               <h4>{{ specs[1].name }}</h4>
               <div class="smdx">
                <div class="spansss" v-for="(item, index) in specs[1].values" :key="index"
                 @click="onItenList(item.name,index)" :class="cuntss===index?'activess':''">{{ item.name }}</div>
               </div>
          </div>
           </div>
        <div class="btnmm">
          <h3>数量：</h3>
        <button @click="butt">+</button>
        <input type="text" v-model="value">
        <button @click="buts">-</button>
       </div>
        </div>

        <div class="btn">
          <button @click="onButton">加入购物车</button>
          <button class="bnt">立即购买</button>
        </div>
       </div>
      </div>
      <div class="calssview">
        <div class="calss">
          <span>你还可以兑换</span>
          <div class="list" v-for="(item, index) in goodsList" :key="index" @click="onDeteList(item.id)">
            <img :src="item.picture" alt="">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xiangq">
     <button>商品详情</button>
     <span>联系我们</span>
     <div class="footers">
      <img :src="deteliList.details.pictures[0]" alt="">
    </div>
    </div>
  </div>

  </div>
</template>
<script>
import CurmbsType from '../components/CurmbsType.vue'
import { getGoodsData, getNewData } from '../request/api'
export default {
  components: {
    CurmbsType
  },
  data () {
    return {
      itemimag: '', // 小图
      imag: '', // 大图
      deteliList: [], // 详情
      cunt: 0,
      goodsList: [],
      curmbs: this.$route.query.curmbs,
      specs: [],
      specsitem: '', // 规格
      specsilist: '', // 尺码,
      cunts: 10,
      cuntss: 10,
      value: 1,
      // curmbs: this.$route.query.curmbs
      id: this.$route.query.id,
      goodsViewList: JSON.parse(localStorage.getItem('goodsViewList')) || [] // 购物车数据
    }
  },
  watch: {
    '$route.query.id': {
      handler () {
        this.$router.go(0)
      }
    }
  },
  async created () {
    console.log(this.$route.query.id, this.$route.query.curmbs)
    const res = await getGoodsData(this.$route.query.id)
    console.log(res)
    this.deteliList = res.result
    this.specs = res.result.specs
    console.log(this.specs.length)
    this.getNewdata()
  },
  methods: {
    onCunt (index) {
      this.cunt = index
    },
    async getNewdata () {
      const res = await getNewData()
      console.log(res)
      this.goodsList = res.result.items
    },
    // 商品跳转
    onDeteList (id) {
      if (this.$route.query.id === id) return alert('已选中该商品')
      this.$router.push(`/detelis?id=${id}&curmbs=2`)
    },
    // 规格选折
    onSpecsItems (name, index) {
      console.log(name)
      this.specsitem = name
      this.cunts = index
      console.log(index, this.cunts)
    },
    onItenList (name, index) {
      this.specsilist = name
      console.log(name)
      this.cuntss = index
    },
    // 规格选折
    butt () {
      this.value++
      console.log(this.value)
    },
    buts () {
      if (this.value === 1) {
        return
      }
      this.value--
    },
    // 加入购物车
    onButton () {
      if (this.specs.length === 2) {
        if (this.specsitem === '' || this.specsilist === '') return alert('商品购买没选1')
        this.GoodsViewList()
        console.log(this.goodsViewList)
      } else {
        if (this.specsitem === '') return alert('商品购买没选2')
        this.GoodsViewList()
        console.log(this.goodsViewList)
      }
    },
    GoodsViewList () {
      this.goodsViewList.unshift({
        id: this.id,
        value: this.value,
        specsitem: this.specsitem, // 规格
        specsilist: this.specsilist, // 尺码,
        de: 1,
        deteliList: this.deteliList, // 详情
        checkbox: true
      })
      console.log(this.goodsViewList)
      // localStorage.removeItem('goodsViewList')
      localStorage.setItem('goodsViewList', JSON.stringify(this.goodsViewList))
    }
  }
}
</script>
<style lang="less" scoped>
.detelis{
  // background: #333;
  .warg{
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    .top{
    width: 1200px;
    height: 40px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .main{
      display: flex;
    .calsslist{
      height: 560px;
      // background: #34cacc;
      width: 940px;
      display: flex;
      .imag{
        width: 460px;
        height:100% ;
        // background: #6ae76c;
        .imagss{
          width: 459px;
          height: 440px;
          // background: #34cacc;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .items{
          width: 460px;
          height: 120px;
          background: #f1f6f1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          .item{
            cursor: pointer;
            width: 80px;
            height: 80px;
            // background: #cc6d6d;
            filter: brightness(50%);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .item:hover{
            filter: brightness(100%) ;
          }
          .active{
            filter: brightness(100%);
          }
        }
      }
      .texts{
        width: 490px;
        margin-left: 20px;
        height:100% ;
        // text-align: center;
        .text{
          width: 430px;
          height: 200px;
          // background: #f1f6f1;
          border-bottom: 1px solid #ECECEC;
          h3{
            // margin-bottom: 10px;
            padding: 10px;
font-family: SourceHanSansSC;
font-weight: 400;
font-size: 28px;
color: #000000;
line-height: 30px;
          }
          p{
            padding: 10px;
font-family: SourceHanSansSC;
font-weight: 300;
font-size: 14px;
color: #999999;
line-height: 20px;
          }
          h2{
            padding: 10px;
font-family: SourceHanSansSC;
font-weight: bold;
font-size: 28px;
color: #FD604D;
line-height: 23px;
          }
          .lists{
            padding: 10px;
           width: 100%;
           text-align: left;
          //  height: 20px;
           span{
            text-align: center;
            height: 20px;
            color: #FD604D;
           }
          }
        }
        .yanshi{
          width: 430px;
          height: 230px;
          // background: #515e51;
          .specs{
            width: 100%;
            height: 120px;
            padding: 10px;
            display: flex;
            justify-content:space-between;
            align-items: center;
            .itemLite{
              width: 200px;
              height: 140px;
              // background: #ECECEC;
              margin-left: 5px;
              h4{
              text-align: left;
              color: #2615c2;
              font-size: 20px;
            }
           .smdx{
              width: 100%;
              height: 120px;
              overflow-y: scroll;
              display: flex;
              flex-wrap: wrap;
              .spansss{
                cursor: pointer;
                padding: 5px;
                border: 1px solid #333333;
                color: #2615c2;
                // height: 25px;
                text-align: center;
                display: flex;
                justify-content: center;
                margin: 5px;
}
.activess{
  // border: #FD604D 1px solid;
  color: #2615c2;
  background: #3DC36B;
              }
           }
            }

          }
        span{
          padding: 10px;
          font-weight: 500;
          font-size: 22px;
        }
          p{
            margin: 10px;
            margin-left: 20px;
            font-weight: 600;
            font-size: 20px;
          }
          .btnmm{
            display: flex;
            align-content: center;
            justify-content: center;
            margin-left: 200px;
            margin-top: 20px;
            // width: 100px;
            height: 40px;
            // margin-left: 160px;
            input{
              width: 20px;
              height: 25px;
              text-align: center;
            }
            button{
              height: 30px;
              width: 30px;
            }
          }
        }
        .btn{
          button{
width: 150px;
height: 46px;
background: #3DC36B;
         }
         .bnt{
          background: #FD604D;
          margin-left: 40px;
         }
        }
      }
    }
    .calssview{
      height: 560px;
      width: 270px;
      // background: #1ec621;
      border-left: #ECECEC 1px solid;
      .calss{
        width: 230px;
        height: 560px;
        overflow-y: scroll;
        list-style: none;
        background: #f1f6f1;
        margin-left: 30px;
        span{
font-family: SourceHanSansSC;
font-weight: 400;
font-size: 18px;
color: #333333;
line-height: 20px;
        }
        .list:hover{
          border: #2615c2 1px solid;
        }
        .list{
          display: flex;
          height: 60px;
          width: 100%;
          margin-bottom: 20px;
          cursor: pointer;
          img{
            width: 80px;
            height: 60px;
          }
          span{
            font-size: 14px;
            font-weight: 300;
          }
        }
      }
    }
  }
  .xiangq{
      height: 300px;
      width: 1200px;
      // background: #2615c2;
      margin-top: 30px;
      border-top: #ECECEC 1px solid;
      button{
        background: #ECECEC;
        width: 120px;
        height: 50px;
        border: 0;
      }
      span{
        margin-left: 30px;
      }
    }
    .footers{
      width: 1200px;
      img{
        height: 100%;
        widows: 100%;
      }
    }
}
}

</style>

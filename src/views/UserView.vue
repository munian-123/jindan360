<template>
  <div class="user">
    <div class="warg">
    <div class="top">
      <CurmbsType :curmbs="curmbs"/>
    </div>
    <div class="main">
      <div class="userss">
            <div class="iamge">
              <img src="../assets/img/userImg.f8bbec5e.png" alt="">
              <div class="text">
              <p>昵称哈哈哈</p>
              <button>退出</button>
            </div>
            </div>
            <div class="title">
              <div class="iamgs">
              <img src="../assets/img/transaction.png" alt="">
              <h3>交易管理</h3>
            </div>
              <p v-for="(item, index) in 6" :key="index">个人中心</p>
            </div>
            <div class="tooter">
              <div class="iamgs">
              <img src="../assets/img/transaction.png" alt="">
              <h3>个人信息管理</h3>
            </div>
            <p>地址管理</p>
            <p class="psp">账号安全</p>
            </div>
      </div>
      <div class="texttext">
      <div class="tex">
        <h2>什么是叩丁积分？</h2>
        <p>叩丁积分是叩丁狼教育粉丝通过注册叩丁狼商城会员，完成相应的任务或课程，参与签到，
          或其他官方活动获得的积分奖励。积分仅供粉丝在商城内兑换相应的礼品、课程或权益。叩丁积分不可转让，赠送，售卖，提现。</p>
      </div>
      <div class="tex">
        <h2>谁能获得积分？？</h2>
        <p>只要凭真实信息在叩丁狼积分商城注册账号的同学，都可以获得积分。</p>
      </div>
      <div class="tex">
        <h2>如何获得积分？</h2>
        <p>1、在叩丁狼购买指定课程，即可获得对应分值的积分。</p>
        <p>2、完成积分商城的签到、活动任务，同样可以获得指定分值的积分。</p>
        <p>3、参与叩丁狼的举办的积分相关活动，如游戏、节假日促销活动，可根据规则获得相应节分。</p>
      </div>
      <div class="tex">
        <h2>为什么我的积分会被冻结？</h2>
        <p> 1、恶意注册刷分，积分会被扣除或冻结。</p>
        <p>2、任务在进行过程中，预先获得积分会被冻结，任务完成后，会解冻相应积分，即可正常使用。</p>
        <p>3、冻结积分如被系统判定为任务失败，会被系统收回。</p>
        <p>4、冻结中的积分无法使用与兑换。</p>
      </div>
      <div class="tex">
        <h2>叩丁积分有什么用？</h2>
        <p> 1、兑换叩丁狼周边产品，只要分值满足兑换条件即可，兑换后会扣除相应分值。</p>
        <p>2、兑换叩丁狼课程抵用券，课程抵用券可直接抵扣课程学费，但不可提现。</p>
        <p>3、可以直接使用积分购买相应分值的课程。</p>
      </div>
      <div class="tex">
        <h2>叩丁积分的有效期是多久？？</h2>
        <p>叩丁积分可以累积，有效期为三年：如在2020年1月1日前获得的积分，将在2023年1月1日24：00过期，有效期内可随时使用。</p>
      </div>
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
  }
}
</script>
<style lang="less" scoped>
.user{
  width: 100%;
  .warg{
   width: 1200px;
   margin: 0 auto;
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
        height: 600px;
        width: 1200px;
        border-top: 1px solid  #666666;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        .userss{
width: 200px;
height: 540px;
background: #E7E7E7;
margin-top: 20px;
text-align: center;
      .iamge{
        img{
width: 100px;
height: 100px;
background: #E1E1E1;
border: 1px solid #FFFFFF;
margin-top: 30px;
        }
        .text{
          display: flex;
          justify-content: center;
          align-items: center;
          p{
            // width: 50px;
          }
          button{
            background: #E7E7E7;
            color: #4471db;
            padding: 2px;
            border: 1px #4471db solid;
            font-weight: 800;
            margin-left: 5px;
          }
        }
      }
      .title{
        text-align: left;
        margin-left: 20px;
        margin-top: 10px;
        .iamgs{
          display: flex;
        }
        p{
          margin-top: 10px;
          font-family: SourceHanSansSC;
          font-weight: 300;
          font-size: 14px;
          color: #666666;
        }
      }
      .tooter{
        text-align: left;
        margin-left: 20px;
        margin-top: 10px;
        .iamgs{
          display: flex;
        }
        p{
          margin-top: 10px;
          font-family: SourceHanSansSC;
          font-weight: 300;
          font-size: 14px;
          color: #666666;
        }
        .psp{
font-family: SourceHanSansSC;
font-weight: 400;
font-size: 14px;
color: #0A328E;
border-left: 1px solid #0A328E;
padding-left:10px ;
        }
      }
        }
      }
      .texttext{
        width: 928px;
        height: 540px;
        margin-top: 30px;
       .tex{
        margin-bottom: 20px;
        h2{
          font-family: SourceHanSansSC;
font-weight: 400;
font-size: 24px;
color: #333333;
line-height: 23px;
        }
       }
      }
  }
}
</style>

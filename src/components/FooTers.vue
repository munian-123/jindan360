<template>
  <div class="footers">
    <div class="warg">
      <div class="main">
      <div class="iamg">
        <img src="../assets/img/slogan.7730f7f2.png" alt="">
        <p>
          叩丁狼是一家专注于培养高级IT技术人才，为学员提供定制化IT职业规划方案及意见咨询服务的教育科技公司，
          为您提供海量优质课程，以及创新的线上线下学习体验，帮助您获得全新的个人发展和能力提升。
        </p>
      </div>
      <div class="center">
        <span>微信公众号</span>
        <span>新浪微博</span>
        <div class="erm">
          <img src="../assets/img/wx.5584e874.png" alt="">
          <h4>在线客服</h4>
        </div>

      </div>
      <div class="right">
        <p>全国免费咨询热线：</p>
        <h3>020-85628002</h3>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.footers{
width: 100%;
height: 240px;
background: #242B39;
  .warg{
   width: 1200px;
   margin: 0 auto;
   height: 240px;
   .main{
    width: 1200px;
   height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   .iamg{
    // display: flex;
    p{
width: 426px;
height: 55px;
font-family: Microsoft YaHei;
font-weight: 400;
font-size: 12px;
color: #7D879A;
    }
   }
   .center{
    margin-top: 30px;
width: 293px;
height: 19px;
font-family: Microsoft YaHei;
font-weight: 400;
font-size: 16px;
color: #7D879A;
display: flex;
justify-content: center;
align-items: center;
    span{
      text-align: center;
    width: 100px;
    height: 19px;
    border-right: #7D879A 1px solid;
    }
    h4{
      margin-left: 15px;
      color:#fff;
    }
    .erm{
      margin-top: -115px;
    }
   }
   .right{
    p{
height: 14px;
font-family: Microsoft YaHei;
font-weight: 400;
font-size: 14px;
color: #7D879A;
    }
    h3{
font-family: SourceHanSansSC;
font-weight: bold;
font-size: 28px;
color: #FFFFFF;
    }
   }
  }
}
}
</style>

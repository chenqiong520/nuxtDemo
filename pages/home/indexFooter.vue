<template>
  <div class="index-footer">
    <div class="footer-logo">
      <img src="@/assets/img/header/logo.png" alt="logo">
    </div>
    <div class="text-wrapper">
      <div class="text-item">关于咕泡</div>
      <div class="text-item">联系我们</div>
      <div class="text-item">加入我们</div>
      <div class="text-item">讲师招募</div>
      <div class="text-item">常见问题</div>
      <div class="text-item">商务合作</div>
      <div class="text-item">意见反馈</div>
    </div>
    <div class="app-wrapper">
      <div class="app-item">
        <img src="@/assets/img/home/indexFooter/gzh.jpg" />
        <div class="desc">咕泡公众号</div>
      </div>
      <div class="app-item">
        <img src="@/assets/img/home/indexFooter/xcx.jpg" />
        <div  class="desc">咕泡小程序</div>
      </div>
      <div class="app-item">
        <img src="@/assets/img/home/indexFooter/xlwb.png" />
        <div  class="desc">官方微博</div>
      </div>
    </div>
    <div class="footer-copy">
      <div class="footer-copy-text1">Copyright©2017-2020 gupaoedu.com All Rights Reserved.</div>
      <div class="footer-copy-text2">版权所有 沪ICP备16036932号-2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.index-footer {
  padding: 50px 30px 0 30px;
  background-color: #f8f8f8;
  .footer-logo {
    margin-bottom: 61px;
    img {
      width: 206px;
      height: 61px;
    }
  }
  .text-wrapper {
    display: flex;
    flex-wrap: wrap;
    .text-item {
      width: 25%;
      color: #666666;
      font-size: 28px;
      line-height: 28px;
      margin-bottom: 46px;
    }
  }
  .app-wrapper {
    display: flex;
    justify-content: space-between;
    .app-item {
      img {
        width: 196px;
        height: 186px;
      }
      .desc {
        color: #999;
        margin-top: 20px;
        text-align: center;
        font-size: 24px;
      }
    }
  }
  .footer-copy {
    color: #999;
    font-size: 24px;
    text-align: center;
    margin-top: 64px;
    line-height: 40px;
    margin-bottom: 23px;
  }
}
</style>

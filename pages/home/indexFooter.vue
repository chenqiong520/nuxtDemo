<template>
  <div class="index-footer">
    <div class="text-wrapper">
      <div class="text-item">  <nuxt-link to="/about" class="label">关于咕泡 </nuxt-link></div>
      <div class="text-item"> <nuxt-link to="/about" class="label">联系我们</nuxt-link></div>
      <div class="text-item"> <nuxt-link to="/partner" class="label">加入我们</nuxt-link></div>
      <div class="text-item"> <nuxt-link to="/partner" class="label">讲师招募</nuxt-link></div>
      <div class="text-item"> <nuxt-link to="/about" class="label">常见问题</nuxt-link></div>
      <div class="text-item"> <nuxt-link to="/partner" class="label">商务合作</nuxt-link></div>
      <div class="text-item"> <a href="/https://q.url.cn/cdh5jl?_type=wpa&qidian=true" class="label">意见反馈</a></div>
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
        <a href="https://weibo.com/gupaoedu?is_hot=1">
          <img src="@/assets/img/home/indexFooter/xlwb.png" />
          <div  class="desc">官方微博</div>
        </a>
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
      .label {
        color: #666666;
      }
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

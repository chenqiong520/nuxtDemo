<template>
  <div class="home-layout">
    <gp-header class="header"/>

    <main class="content">
      <nuxt/>
    </main>
    <!--客服链接-->
    <div class="kf-link">
      <a href="https://q.url.cn/cdh5jl?_type=wpa&qidian=true">
        <img src="@/assets/img/home/kefu.png">
      </a>
    </div>
    <gp-footer class="footer"/>
  </div>
</template>

<script>
import GpHeader from './home/header'
import GpFooter from './home/footer'

export default {
  name: 'HomeLayout',

  components: {
    GpHeader,
    GpFooter
  }
}
</script>

<style scoped>
.home-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.home-layout .header {
  height: 96px;
  overflow: hidden;
}

.home-layout .content {
  flex: 1;
  overflow-y: auto;
}

.home-layout .footer {
  height: 96px;
  overflow: hidden;
}
.kf-link {
  position: fixed;
  bottom: 120px;
  right: 50px;
  z-index: 100;
}
.kf-link img {
  width: 118px;
}
</style>

<template>
  <header class="v-header">
    <div class="index-header-box">
      <div class="i-h-nav">
        <i @click="showMenu" class="iconfont iconmenu" style="font-size:30px"></i>
      </div>
      <div>
        <nuxt-link to="/">咕泡学院</nuxt-link>
      </div>
      <div>
        <i class="iconfont iconsearch"></i>
      </div>
    </div>

    <div v-show="menuShow" @click="showMenu" class="menu">
      <ul class="h-nav-list">
        <li>
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/brand">学院</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/leader">资源库</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/experice">咕泡合伙人</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Gper社区</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/news">关于咕泡</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/join">联系客服</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VHeader',

  data() {
    return {
      menuShow: false
    }
  },

  computed: {
    ...mapState(['headProdNav', 'headNewsNav', 'headJobNav'])
  },

  mounted() {},

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    showMenu() {
      this.menuShow = !this.menuShow
    }
  }
}
</script>

<style scoped>
.v-header {
  width: 100%;
  height: 1.987rem;
  background: #fff;
}

div#index-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.987rem;
  z-index: 10086;
  background: #fff;
}
.index-header-box {
  display: flex;
  height: 1.987rem;
  padding: 0 0.413rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.i-h-nav {
  width: 0.453rem;
}

.h-t-logo {
  width: 1.053rem;
  height: 1.08rem;
}

.h-t-logo a {
  display: block;
  width: 100%;
  height: 100%;
}

.h-t-logo a img {
  width: 100%;
  height: 100%;
}

.h-t-my {
  width: 0.573rem;
  height: 0.733rem;
}

.h-t-my img {
  width: 100%;
}

.phone-show-menu {
  width: 100%;
}

.phone-open-menu {
  overflow: hidden;
  width: 100%;
}

.phone-open-menu p {
  width: 0.453rem;
  height: 0.04rem;
  margin-top: 0.147rem;
  background-color: #a2a1a2;
}

.phone-close-menu {
  width: 0.333rem;
  height: 0.333rem;
}

.phone-close-menu {
  width: 0.333rem;
  height: 0.333rem;
}

.menu {
  position: fixed;
  opacity: 0.8;
  background: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 1.133rem;
  box-sizing: border-box;
  z-index: 10080;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ul.h-nav-list {

} */

ul.h-nav-list li {
  display: block;
  width: 100%;
  height: 1.2rem;
  font-size: 16px;
  margin-top: 10px;
}

ul.h-nav-list li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: left;
}
</style>

<template>
  <header class="gp-header">
    <div class="header-box">
      <div>
        <nuxt-link to="/">
          <img class="logo" src="@/assets/img/header/logo.png" alt="logo">
        </nuxt-link>
      </div>

      <div class="button-group">
        <i @click="toSearch" class="iconfont iconsearch1"></i>
        <i @click="showMenu" class="iconfont iconbx-menu-alt-right"></i>
      </div>
    </div>

    <div v-show="menuShow" @click="showMenu" class="menu">
      <ul class="nav-list">
        <li v-for="(navItem,index) in navList" :key="index">
          <a
            @click="navListClick(navItem,index)"
            :target="navItem.target || ''"
            :class="{active:isActive(navItem.link)}"
          >{{navItem.name}}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader',

  data() {
    return {
      menuShow: false,
      // 导航菜单
      navList: [
        {
          link: '/',
          name: '首页'
        },
        {
          link: '/course',
          name: '学院'
        },
        {
          link: '/resource-library',
          name: '资源库'
        },
        {
          link: '/partner',
          name: '咕泡合伙人'
        },
        {
          link: 'https://m.gper.gupaoedu.com/index',
          name: 'Gper社区',
          target: '_blank'
        },
        {
          link: '/about',
          name: '关于咕泡'
        },
        {
          link: '/kefu',
          name: '联系客服'
        }
      ]
    }
  },

  methods: {
    /**
     * 菜单项点击跳转
     */
    navListClick(navItem, index) {
      if (navItem && navItem.target === '_blank') {
        window.open(navItem.link)
        return
      }

      this.$router.push(navItem.link)
    },

    /**
     * 搜索跳转
     */
    toSearch() {
      window.open('https://m.gper.gupaoedu.com/search?type=answer')
    },

    /**
     * 展开/关闭 菜单栏
     */
    showMenu() {
      this.menuShow = !this.menuShow
    },

    /**
     * 是否是当前激活页面
     */
    isActive(link = '/') {
      if (link === '/') {
        link = '/index'
      }
      // /^\/index/
      const reg = RegExp(`^${link}`, 'i')
      return reg.test(`/${this.$route.name}`)
    }
  }
}
</script>

<style scoped>
.gp-header {
  width: 100%;
  height: 100%;
  background: #fff;
}

.gp-header .header-box {
  display: flex;
  height: 96px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.header-box img.logo {
  display: block;
  width: 170px;
}

.header-box .button-group .iconfont {
  font-size: 36px;
  color: #252525;
}

.gp-header .menu {
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  z-index: 10080;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.menu .nav-list {
  margin-top: 300px;
}

.menu .nav-list li {
  margin-top: 63px;
}

.menu .nav-list li a {
  color: rgba(217, 217, 217, 1);
  font-size: 36px;
  font-weight: 400;
}

.menu .nav-list li a.active {
  position: relative;
  font-size: 36px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

.menu .nav-list li a.active:before {
  content: '\e645';
  font-family: 'iconfont';
  position: absolute;
  left: -42px;
  top: 8px;
}
</style>

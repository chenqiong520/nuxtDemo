<template>
  <footer class="footer">
    <div
      v-for="(tabbar,index) in tabbars"
      :key="index"
      @click="onTabbarClick(tabbar,index)"
      class="tabbar"
      :class="{active:isActive(tabbar.link)}"
    >
      <img class="img-icon" :src="isActive(tabbar.link) ? tabbar.active:tabbar.src" alt>
      <span class="title">{{tabbar.name}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'DefaultFooter',

  data() {
    return {
      tabbars: [
        {
          link: '/',
          name: '首页',
          src: require('@/assets/img/home/footer/home.png'),
          active: require('@/assets/img/home/footer/home-active.png')
        },
        {
          link: '/course',
          name: '学院',
          src: require('@/assets/img/home/footer/course.png'),
          active: require('@/assets/img/home/footer/course-active.png')
        },
        {
          link: '/resource-library',
          name: '资源库',
          src: require('@/assets/img/home/footer/resource.png'),
          active: require('@/assets/img/home/footer/resource-active.png')
        }
      ]
    }
  },

  methods: {
    onTabbarClick(tabbar, index) {
      this.$router.push(tabbar.link)
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
footer {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border-top: 1px #e9e9e9 solid;
}

footer .tabbar {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: rgba(199, 199, 201, 1);
}

footer .tabbar .title {
  font-size: 20px;
}

footer .tabbar .img-icon {
  width: 36px;
}

footer .tabbar.active {
  color: rgba(253, 85, 58, 1);
}
</style>

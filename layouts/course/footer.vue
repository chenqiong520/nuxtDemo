<template>
  <footer class="course-footer">
    <div
      v-for="(tabbar,index) in tabbars"
      :key="index"
      @click="onTabbarClick(tabbar,index)"
      class="tabbar"
      :class="{active:isActive(tabbar.link)}"
    >
      <i class="iconfont" :class="tabbar.icon"></i>
      <span class="title">{{tabbar.name}}</span>
    </div>
    <div class="tencent">
      <div class="button">前往腾讯课堂听课</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CourseFooter',

  data() {
    return {
      tabbars: [
        {
          link: '/',
          name: '客服',
          icon: 'iconkefu'
        },
        {
          link: '/course',
          name: '交流群',
          icon: 'icongroup'
        },
        {
          link: '/resource-library',
          name: '公众号',
          icon: 'iconchat01'
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
      return link === `/${this.$route.name}`
    }
  }
}
</script>

<style scoped>
footer {
  box-sizing: border-box;
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border-top: 1px #e9e9e9 solid;
}

footer .tencent {
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer .tencent > .button {
  font-weight: 500;
  text-align: center;
  background: rgba(253, 85, 58, 1);
  color: #fff;
  padding: 20px;
  border-radius: 5px;
}

footer .tabbar {
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}

footer .tabbar .title {
  font-size: 25px;
}

footer .tabbar .iconfont {
  font-size: 40px;
}

footer .tabbar.active {
  color: rgba(253, 85, 58, 1);
}
</style>

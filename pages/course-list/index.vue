<template>
  <div class="course-list">
    <div class="tabs">
      <div
        :class="['tabs-item', {'on': index == currentTab}]"
        v-for="(item, index) in tabs"
        :key="index"
        @click="switchTab(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <HotCourse :hotCourse="currentCourse" class="div-padding"></HotCourse>
  </div>
</template>

<script>
import HotCourse from '@/components/HotCourse'
export default {
  layout(context) {
    return 'course'
  },
  components: {
    HotCourse
  },
  data() {
    return {
      // tabs
      tabs: [
        { id: 1, name: '热门课程' },
        { id: 2, name: '折扣专区' },
        { id: 3, name: '猜你喜欢' }
      ],
      // 当前选中tab下标
      currentTab: 0,
      currentCourse: {
        courseList: [
          {
            coverImg: '//cdn.gupaoedu.com/newIndex/images/kc/Git.jpg',
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Git入门教程',
            price: '¥29.99'
          },
          {
            coverImg: '//cdn.gupaoedu.com/newIndex/images/kc/xmkjpkc.jpg',
            url: '',
            readNum: 6112,
            CommentNum: 20,
            courseName: ' 小马哥的精品课程详解',
            price: ' ¥6.66'
          },
          {
            coverImg: '//cdn.gupaoedu.com/newIndex/images/kc/Git.jpg',
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Git入门教程',
            price: '¥29.99'
          },
          {
            coverImg: '//cdn.gupaoedu.com/newIndex/images/kc/xmkjpkc.jpg',
            url: '',
            readNum: 6112,
            CommentNum: 20,
            courseName: ' 小马哥的精品课程',
            price: ' ¥6.66'
          }
        ]
      }
    }
  },

  methods: {
    // 切换tab
    switchTab(index) {
      this.currentTab = index
      this.currentCourse = this.currentCourse
    }
  }
}
</script>

<style lang="scss" scoped>
.course-list {
  .tabs {
    height: 88px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tabs-item {
      height: 100%;
      width: 126px;
      text-align: center;
      line-height: 88px;
      color: #252525;
      font-weight: bold;
      position: relative;
    }
    .on {
      color: #fd553a;
      &::after {
        content: '';
        width: 126px;
        height: 6px;
        border-radius: 3px;
        background: #fd553a;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
  .div-padding {
    padding: 0 30px;
  }
}
</style>

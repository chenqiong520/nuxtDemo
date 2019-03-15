<template>
  <div class="course-list">
    <div class="tabs">
      <div
        :class="['tabs-item', {'on': index == currentTab}]"
        v-for="(item, index) in tabs"
        :key="index"
        @click="switchTab(index)"
      >{{ item.name }}</div>
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
        { id: 1, name: '热门课程' }
        // { id: 2, name: '折扣专区' },
        // { id: 3, name: '猜你喜欢' }
      ],
      // 当前选中tab下标
      currentTab: this.$route.query.currentTab || 0,
      currentCourse: {
        courseList: [
          {
            coverImg: require('../../assets/img/course/hot/ai.jpg'),
            url: 'https://ke.qq.com/course/369205?tuin=9f7c6eb0',
            readNum: 1021,
            CommentNum: 265,
            courseName: ' 人工智能技术全景与实战',
            price: '¥1'
          },
          {
            coverImg: require('../../assets/img/course/hot/Git.jpg'),
            url: 'https://ke.qq.com/course/282167',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Git入门教程',
            price: '¥29.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/xmkjpkc.jpg'),
            url: 'https://ke.qq.com/course/244483',
            readNum: 6112,
            CommentNum: 60,
            courseName: ' 小马哥精品课',
            price: '¥6.6'
          },
          {
            coverImg: require('../../assets/img/course/hot/Maven.jpg'),
            url: 'https://ke.qq.com/course/276245',
            readNum: 7163,
            CommentNum: 712,
            courseName: ' Maven入门教程',
            price: '¥29.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/qhdfljgzn.jpg'),
            url: 'https://ke.qq.com/course/337060',
            readNum: 821,
            CommentNum: 165,
            courseName: ' 前端架构分离指南',
            price: '¥6.66'
          },
          {
            coverImg: require('../../assets/img/course/hot/IntelliJ-IDEA.jpg'),
            url: 'https://ke.qq.com/course/297923',
            readNum: 11241,
            CommentNum: 384,
            courseName: ' IntelliJ IDEA入门到精通',
            price: '¥29.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/rjcs.jpg'),
            url: 'https://ke.qq.com/course/301739',
            readNum: 2512,
            CommentNum: 351,
            courseName: ' 软件测试精品专题体系课程',
            price: '¥29.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/Jenkins-xxzl.jpg'),
            url: 'https://ke.qq.com/course/304919',
            readNum: 1052,
            CommentNum: 98,
            courseName: ' JenKins学习之旅',
            price: '¥39.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/dsjjhs.jpg'),
            url: 'https://ke.qq.com/course/358561',
            readNum: 310,
            CommentNum: 56,
            courseName: ' 大数据交互式',
            price: '¥299'
          },
          {
            coverImg: require('../../assets/img/course/hot/Python-jcrm.jpg'),
            url: 'https://ke.qq.com/course/332671',
            readNum: 6912,
            CommentNum: 265,
            courseName: ' Python基础入门VIP精品课程',
            price: '¥29.99'
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

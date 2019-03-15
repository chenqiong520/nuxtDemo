<template>
  <div class="course">
    <div class="one-column">
      <nuxt-link class="img-container java" to="course/java">
        <h1 class="title">JAVA架构师学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>

    <div class="one-column">
      <nuxt-link class="img-container intelligence" to="course/intelligence">
        <h1 class="title">人工智能学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>

    <div class="two-column">
      <nuxt-link class="img-container block" to="course/block">
        <h1 class="title">区块链学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
      <div class="gutter"></div>
      <nuxt-link class="img-container web" to="course/web">
        <h1 class="title">Web前端学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>

    <div class="two-column">
      <nuxt-link class="img-container test" to="course/test">
        <h1 class="title">软件测试学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
      <div class="gutter"></div>
      <nuxt-link class="img-container bigdata" to="course/bigdata">
        <h1 class="title">大数据学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>

    <!-- 热门课程 -->
    <hot-course :hotCourse="hotCourse" @jump="jumpToPage"></hot-course>

    <!-- 折扣专区 -->
    <hot-course :hotCourse="disCountCourse" @jump="jumpToPage"></hot-course>

    <!-- 猜你喜欢 -->
    <hot-course :hotCourse="likeCourse" @jump="jumpToPage"></hot-course>
  </div>
</template>

<script>
import HotCourse from '@/components/HotCourse'

export default {
  name: 'Course',

  layout(context) {
    return 'home'
  },

  components: {
    HotCourse
  },

  data() {
    return {
      // 热门课程
      hotCourse: {
        titleName: '爆款推荐',
        jumpPage: '/course-list',
        titleIcon: require('@/assets/img/home/hot-icon.png'),
        titleDesc: '最热门的爆款课程',
        index: 0,
        courseList: [
          {
            coverImg: require('../../assets/img/course/hot/Git.jpg'),
            url: '',
            readNum: 23331,
            CommentNum: 145,
            courseName: ' Python基础入门VIP精品课程',
            price: '¥9.9'
          },
          {
            coverImg: require('../../assets/img/course/hot/IntelliJ-IDEA.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Jenkins学习之旅',
            price: '¥39.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/Jenkins-xxzl.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Git入门教程',
            price: '¥29.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/Maven.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' 小马哥精品课',
            price: '¥39.99'
          }
        ]
      },
      //折扣专区
      disCountCourse: {
        titleName: '折扣专区',
        jumpPage: '/course-list',
        titleIcon: require('@/assets/img/course/discount.png'),
        titleDesc: '最新课程底折放送',
        index: 1,
        courseList: [
          {
            coverImg: require('../../assets/img/course/hot/Python-jcrm.jpg'),
            url: '',
            readNum: 23331,
            CommentNum: 145,
            courseName: ' Python基础入门VIP精品课程',
            price: '¥9.9'
          },
          {
            coverImg: require('../../assets/img/course/hot/ai.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Jenkins学习之旅',
            price: '¥39.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/dsjjhs.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Git入门教程',
            price: '¥29.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/qhdfljgzn.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' 小马哥精品课',
            price: '¥39.99'
          }
        ]
      },
      //猜你喜欢
      likeCourse: {
        titleName: '猜你喜欢',
        jumpPage: '/course-list',
        titleIcon: require('@/assets/img/course/like.png'),
        titleDesc: '量身制定总有你喜欢',
        index: 2,
        courseList: [
          {
            coverImg: require('../../assets/img/course/hot/rjcs.jpg'),
            url: '',
            readNum: 23331,
            CommentNum: 145,
            courseName: ' Python基础入门VIP精品课程',
            price: '¥9.9'
          },
          {
            coverImg: require('../../assets/img/course/hot/xmkjpkc.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Jenkins学习之旅',
            price: '¥39.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/Git.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Git入门教程',
            price: '¥29.99'
          },
          {
            coverImg: require('../../assets/img/course/hot/Git.jpg'),
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' 小马哥精品课',
            price: '¥39.99'
          }
        ]
      }
    }
  },

  methods: {
    jumpToPage(courseObject) {
      this.$router.push({
        path: courseObject.jumpPage,
        query: {
          currentTab: courseObject.index
        }
      })
    }
  }
}
</script>

<style scoped>
.course {
  margin: 0 33px;
}

.course > div {
  margin-bottom: 18px;
}

.course .img-container {
  height: 198px;
  border-radius: 12px;
  overflow: hidden;
}

.course .two-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.course .two-column .img-container {
  flex: auto;
  width: 50%;
  /* width:40%; */
}

.img-container.java {
  background: url(../../assets/img/course/java.png);
  background-size: cover;
}

.img-container.intelligence {
  background: url(../../assets/img/course/block.png);
  background-size: cover;
}

.img-container.block {
  background: url(../../assets/img/course/intelligence.png);
  background-size: cover;
}

.img-container.web {
  background: url(../../assets/img/course/web.png);
  background-size: cover;
}

.img-container.test {
  background: url(../../assets/img/course/test.png);
  background-size: cover;
}

.img-container.bigdata {
  background: url(../../assets/img/course/bigdata.png);
  background-size: cover;
}

.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.img-container .title {
  font-size: 36px;
}

.img-container .count {
  display: block;
  padding: 5px 15px;
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

.gutter {
  height: 100%;
  width: 20px;
}
</style>

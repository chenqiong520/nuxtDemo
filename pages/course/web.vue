<template>
  <div class="course-web">
    <main class="content">
      <nav class="banner">
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">
      </nav>

      <section class="course-title">
        <h1>学院课程</h1>
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">
      </section>

      <section class="course-summary">
        <h2>Web全栈高级提升课程</h2>
        <h3>加入咕泡，开启web全栈之路</h3>
        <p class="price">￥6000.00</p>
        <p>周期 8个月</p>
        <p>方式 直播为主，录播、学习资料为辅</p>
        <p>地点 腾讯课堂</p>
        <p>时间 每周三、周六、周日晚20:00~22:00</p>
      </section>

      <section class="course-teacher">
        <h2>老师介绍</h2>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="teacher in teachers" :key="teacher.id">
              <img :src="teacher.imgUrl" alt="课程详情介绍">
              <p class="teacher-name">{{teacher.name}}</p>
              <p class="teacher-tag">{{teacher.tag}}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="course-detail">
        <h2>图文介绍</h2>
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">

        <div class="load-more">查看全部图片</div>
      </section>

      <section class="course-compendium">
        <h2>课程大纲</h2>
      </section>
    </main>

    <course-footer class="footer"></course-footer>
  </div>
</template>

<script>
import CourseFooter from '@/layouts/course/footer'

export default {
  name: 'CourseWeb',

  layout(context) {
    console.log(context)
    return 'course'
  },

  components: {
    CourseFooter
  },

  data() {
    return {
      // swiper配置
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10
      },

      teachers: [
        {
          id: '1',
          imgUrl: require('../../assets/img/course/web.png'),
          name: 'song',
          tag: '高级前端讲师'
        },
        {
          id: '2',
          imgUrl: require('../../assets/img/course/web.png'),
          name: 'song',
          tag: '高级前端讲师'
        },
        {
          id: '3',
          imgUrl: require('../../assets/img/course/web.png'),
          name: 'song',
          tag: '高级前端讲师'
        },
        {
          id: '4',
          imgUrl: require('../../assets/img/course/web.png'),
          name: 'song',
          tag: '高级前端讲师'
        }
      ]
    }
  },

  methods: {
    async getTeachers() {
      const response = await this.$axios.get()

      if (response && response.status === 200) {
        this.teachers = response.data.data
      }
    }
  },

  mounted() {
    this.getTeachers()
  }
}
</script>

<style scoped>
/* 布局 */
.course-web {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.course-web main.content {
  flex: 1;
  overflow-y: auto;
}

.course-web .footer {
  height: 96px;
}

/* 主内容 */

.course-web main.content h3 {
  color: rgba(0, 0, 0, 0.5);
}

/* banner */

.course-web main.content nav.banner {
  height: 350px;
}

.course-web main.content nav.banner img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.course-web main.content section {
  padding: 0 30px;
  margin: 25px 0;
}

/* 学院课程 */

.course-web main.content .course-title {
  height: 350px;
}

.course-web main.content .course-title img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* 老师介绍 */
.course-web main.content .course-teacher {
  margin-top: 15px;
}

.course-web main.content .swiper-wrapper {
  margin-top: 15px;
}

.course-web main.content .swiper-wrapper .swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.course-web main.content .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
}

.course-web main.content .swiper-wrapper .swiper-slide .teacher-name {
  font-size: 18px;
}

.course-web main.content .swiper-wrapper .swiper-slide .teacher-tag {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
}

/* 图文介绍 */

.course-web main.content .course-detail img {
  width: 100%;
}
</style>

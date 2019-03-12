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
        <p class="cycle">
          <strong>周期</strong>8个月
        </p>
        <p class="way">
          <strong>方式</strong>直播为主，录播、学习资料为辅
        </p>
        <p class="place">
          <strong>地点</strong>腾讯课堂
        </p>
        <p class="time">
          <strong>时间</strong>每周三、周六、周日晚20:00~22:00
        </p>
      </section>

      <section class="course-teacher">
        <h2>老师介绍</h2>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="teacher in teachers" :key="teacher.id">
              <img :src="teacher.teacherImage" alt="课程详情介绍">
              <p class="teacher-name">{{teacher.teacherName}}</p>
              <p class="teacher-tag">{{teacher.teacherTag}}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="course-detail">
        <h2>图文介绍</h2>
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">
        <template v-if="isLoadAll">
          <img src="../../assets/img/course/java.png" alt="课程详情介绍">
          <img src="../../assets/img/course/java.png" alt="课程详情介绍">
          <img src="../../assets/img/course/java.png" alt="课程详情介绍">
        </template>
        <div class="load-all">查看全部图文</div>
      </section>

      <section class="course-compendium">
        <h2>课程大纲</h2>
      </section>
    </main>

    <course-footer class="footer"></course-footer>
  </div>
</template>

<script>
import CourseFooter from './footer'

export default {
  name: 'CourseWeb',

  layout(context) {
    return 'course'
  },

  components: {
    CourseFooter
  },

  data() {
    return {
      // swiper配置
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10
      },
      isLoadAll: false,

      teachers: []
    }
  },

  methods: {
    async getTeachers() {
      const response = await this.$axios.get('wwwapi/findTeacherTeam')

      if (response && response.status === 200) {
        this.teachers = response.data.data.slice(0, 5)
      }
    }
  },

  mounted() {
    this.getTeachers()
  }
}
</script>

<style lang="scss" scoped>
/* 布局 */
.course-web {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;

  main.content {
    width: 100%;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .footer {
    height: 96px;
  }
}

/* 主内容 */
.course-web main.content {
  nav.banner {
    height: 350px;
  }

  section {
    box-sizing: border-box;
    padding: 0 30px;
    margin: 25px 0;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
  }
}

/* banner */
.course-web main.content nav.banner {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

/* 学院课程 */
.course-web main.content .course-title {
  height: 350px;

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}

/* 课程简介 */
.course-web main.content .course-summary {
  .price {
    margin-top: 10px;
    font-size: 34px;
    font-weight: bold;
    color: #fd553a;
  }

  .cycle,
  .way,
  .place,
  .time {
    margin-top: 25px;

    strong {
      color: rgba(0, 0, 0, 0.5);
      margin-right: 30px;
    }
  }
}

/* 老师介绍 */
.course-web main.content .course-teacher {
  margin-top: 50px;

  .swiper-wrapper {
    margin-top: 15px;

    .swiper-slide {
      width: 280px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 280px;
        height: 280px;
        border-radius: 5px;
      }

      .teacher-name {
        font-size: 18px;
      }

      .teacher-tag {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}

/* 图文介绍 */
.course-web main.content .course-detail {
  margin-top: 50px;
  width: 100%;

  img {
    display: block;
    margin-bottom: 15px;
    width: 100%;
    object-fit: cover;
  }

  .load-all {
    margin-top: 15px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
}

/* 课程大纲 */
.course-web main.content .course-compendium {
  margin-top: 50px;
  width: 100%;
  height: 500px;
}
</style>

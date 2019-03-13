<template>
  <div class="course-web">
    <main class="content">
      <nav class="banner">
        <img src="../../assets/img/course/java.png" alt="课程详情介绍">
      </nav>

      <section class="course-title">
        <h1 class="title">学院课程</h1>
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
        <div class="load-all" v-show="!isLoadAll" @click="loadAll">查看全部图文</div>
      </section>

      <section class="course-compendium">
        <h2>课程大纲</h2>

        <div class="course-compendium-item">
          <div class="item-title">
            <strong>01</strong>需要更多往期视频加曼妮老师qq1213512135
          </div>
          <div class="video-name">Java架构专题课程介绍</div>
          <div class="time">6分钟</div>
        </div>
        <div class="course-compendium-item">
          <div class="item-title">
            <strong>02</strong>需要更多往期视频加曼妮老师qq1213512135
          </div>
          <div class="video-name">Java架构专题课程介绍</div>
          <div class="time">6分钟</div>
        </div>
        <div class="course-compendium-item">
          <div class="item-title">
            <strong>03</strong>需要更多往期视频加曼妮老师qq1213512135
          </div>
          <div class="video-name">Java架构专题课程介绍</div>
          <div class="time">6分钟</div>
        </div>
      </section>
    </main>

    <course-footer class="footer"></course-footer>
  </div>
</template>

<script>
import CourseFooter from './common/footer'

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
        spaceBetween: 16
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
    },

    /**
     * 加载全部图文
     */
    loadAll() {
      this.isLoadAll = true
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
    height: 548px;
  }

  .course-title {
    margin-top: 54px;
  }

  .course-summary {
    margin-top: 40px;
  }

  section {
    box-sizing: border-box;
    padding: 0 30px;
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
  .title {
    height: 31px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
    line-height: 44px;
  }

  img {
    margin-top: 24px;
    width: 686px;
    height: 381px;
    border-radius: 8px;
    object-fit: cover;
  }
}

/* 课程简介 */
.course-web main.content .course-summary {
  h2 {
    height: 38px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(37, 37, 37, 1);
  }

  h3 {
    margin-top: 24px;
    height: 25px;
    font-size: 26px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .price {
    margin-top: 32px;
    height: 32px;
    font-size: 42px;
    font-weight: bold;
    color: rgba(253, 85, 58, 1);
  }

  .cycle {
    margin-top: 80px;
  }

  .way,
  .place,
  .time {
    margin-top: 67px;
  }

  .cycle,
  .way,
  .place,
  .time {
    font-size: 28px;
    font-weight: 400;
    color: rgba(37, 37, 37, 1);

    strong {
      margin-right: 55px;
      width: 49px;
      height: 25px;
      font-size: 26px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
}

/* 老师介绍 */
.course-web main.content .course-teacher {
  margin-top: 90px;

  h2 {
    height: 31px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
  }

  .swiper-wrapper {
    margin-top: 27px;

    .swiper-slide {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 300px;
        height: 300px;
        border-radius: 8px;
      }

      .teacher-name {
        margin-top: 24px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(37, 37, 37, 1);
      }

      .teacher-tag {
        margin-top: 19px;
        font-size: 26px;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
    }
  }
}

/* 图文介绍 */
.course-web main.content .course-detail {
  margin-top: 98px;
  width: 100%;

  h2 {
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
  }

  img {
    display: block;
    margin-bottom: 31px 0 15px 0;
    width: 100%;
    object-fit: cover;
  }

  .load-all {
    margin-top: 62px;
    width: 686px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    background: rgba(245, 245, 245, 1);
    border-radius: 6px;
    font-size: 26px;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
  }
}

/* 课程大纲 */
.course-web main.content .course-compendium {
  margin-top: 64px;

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
    margin-bottom: 47px;
  }

  .course-compendium-item {
    margin-bottom: 64px;
    .item-title {
      font-size: 34px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      strong {
        color: rgba(208, 208, 208, 1);
        margin-right: 10px;
      }
    }

    .video-name {
      margin-top: 48px;
      margin-left: 126px;
      font-size: 28px;
      font-weight: 400;
      color: rgba(37, 37, 37, 1);
      position: relative;

      &:before {
        content: '\e7c8';
        font-family: 'iconfont';
        position: absolute;
        font-size: 28px;
        top: 5px;
        left: -35px;
      }
    }

    .time {
      margin-top: 16px;
      margin-left: 126px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(199, 199, 201, 1);
    }
  }
}
</style>

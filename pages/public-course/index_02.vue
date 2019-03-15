<template>
  <div class="public-course">
    <!-- 标题 -->
    <div class="course-title">{{courseTitle}}</div>

    <!-- 轮播图 -->
    <div class="swiper" v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in publicCourseList"
          :key="index">
          <img :src="item.promotion_img" alt="">
          <div class="status">{{statusText(item.start_time, item.end_time)}}</div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'course'
  },

  data() {
    return {
      // 轮播图选项
      swiperOption: {
        effect: 'coverflow',
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 60,
          modifier: 0.5,
          slideShadows : false
        },
        pagination: {
          el: '.swiper-pagination',
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        },
        on: {
          transitionEnd:() => {
            let activeIndex = this.$refs.mySwiper.swiper.activeIndex
            let filterRes = this.publicCourseList.filter((ele, index) => index == activeIndex)
            this.courseTitle = filterRes[0].course_name
          }
        }
      },
      // 公开课列表
      publicCourseList: [],
      // 课程标题
      courseTitle: ''
    }
  },

  methods: {
    // 获取今日公开课
    async getTodayPublicCourse() {
      const res = await this.$axios.get('arrangement/getToDayPublicCourse?token=gupao-wechat-applet')
      const data = res.data.data
      this.publicCourseList = data
      this.courseTitle = data[0].course_name
    },

    // 获取当前时间戳
    getCurrentTimestamp() {
      return new Date().getTime()
    },

    // 时间戳转时间
    toTime(times) {
      let date = new Date(times),
          d = date.getDate()
      return date.toTimeString().substr(0, 5)
    },

    // 直播状态文字
    statusText(start, end) {
      let timeNow = this.getCurrentTimestamp()
      let text = ''
      if (start < timeNow && end > timeNow) {
        text = '直播中'
      } else if (end < timeNow) {
        text = '直播已结束'
      } else {
        text = `${this.toTime(start)}开播`
      }
      return text
    }
  },

  mounted() {
    this.getTodayPublicCourse()
    this.statusText()
  }
}
</script>

<style lang="scss" scoped>
.public-course {
  .course-title {
    color: #252525;
    font-size: 32px;
    margin-top: 20px;
    padding: 0 34px;
    font-weight: bold;
  }
  .swiper {
    height: 950px;
    margin-top: 20px;
    .swiper-slide {
      width: 600px;
      height: 950px;
      border-radius: 24px;
      background: cyan;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 24px;
      }
      .status {
        width: 190px;
        height: 68px;
        background: #FD553A;
        font-size: 28px;
        color: white;
        text-align:center;
        line-height: 68px;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 24px 0 24px;
        box-shadow:-7px 7px 18px 0px rgba(59,59,59,0.15);
      }
      .swiper-pagination-bullet-custom {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 1;
        &.swiper-pagination-bullet-active {
          width: 40px;
          height: 12px;
          background: rgba(255, 255, 255, 1);
          border-radius: 5px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="public-course">
    <!-- 标题 -->
    <div class="course-title">JAVA开发架构课</div>

    <!-- 滚动选择 -->
    <div class="swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in rollerList"
          :key="index">
          <img :src="item.imgUrl" alt="">
          <div class="status">{{item.status}}</div>
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
        }
      },
      // 轮播图列表
      rollerList: [
        { imgUrl: '//cdn.gupaoedu.com/index/images/students/adv_icon_07.jpg', status: '直播中' },
        { imgUrl: '//cdn.gupaoedu.com/index/images/students/adv_icon_07.jpg', status: '直播中' },
        { imgUrl: '//cdn.gupaoedu.com/index/images/students/adv_icon_07.jpg', status: '直播中' }
      ]
    }
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
    height: 928px;
    margin-top: 20px;
    .swiper-slide {
      width: 600px;
      height: 927px;
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

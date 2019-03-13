<template>
  <div class="team">
    <div class="category-title">
      <div><span class="left-line" /> 团队分采<span class="right-line" /></div>
    </div>
    <!-- 滚动选择 -->
    <div v-swiper:mySwiper="swiperOption" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(item,index) in honorList"
          :key="index"
          @click="selectTeacher(item)"
          class="swiper-slide team-item"
        >
          <img :src="item.img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teacher',

  data() {
    return {
      honorList: [
        {
          img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/12.png'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/13.png'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/14.png'
        }
      ],
      // 轮播图选项
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-title {
  font-size: 36px;
  line-height: 36px;
  font-weight: bold;
  color: rgba(37, 37, 37, 1);
  text-align: center;
}
.category-title .left-line {
  width: 35px;
  height: 4px;
  background: rgba(222, 222, 222, 1);
  margin-right: 16px;
  display: inline-block;
  vertical-align: middle;
}
.category-title .right-line {
  width: 35px;
  height: 4px;
  background: rgba(222, 222, 222, 1);
  margin-left: 16px;
  display: inline-block;
  vertical-align: middle;
}
.category-title .text {
  font-size: 24px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 24px;
  margin-top: 18px;
}
.team {
  margin-top: 95px;
  .swiper {
    margin-top: 35px;
  }
  .team-item {
    width: 300px;
    margin-right: 16px;
    text-align: center;
    position: relative;
    img {
      width: 300px;
      height: 218px;
      border-radius: 8px;
    }
  }
}
</style>

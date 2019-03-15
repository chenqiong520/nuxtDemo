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
          class="swiper-slide team-item"
        >
          <img :src="item.img">
          <div class="img-desc">
            {{ item.desc }}
          </div>
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
          img: require('@/assets/img/home/team/team_icon_01.jpg'),
          desc: '橘子洲踏青团建活动'
        },
        {
          img: require('@/assets/img/home/team/team_icon_02.jpg'),
          desc: '泰国豪华6日游'
        },
        {
          img: require('@/assets/img/home/team/team_icon_03.jpg'),
          desc: '17年咕泡学院年会'
        },
        {
          img: require('@/assets/img/home/team/team_icon_04.jpg'),
          desc: '17年方特之旅团建活动'
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
    .img-desc {
      font-size: 24px;
      font-weight: 500;
      width: 100%;
      box-sizing: border-box;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
      padding: 16px;
      position: absolute;
      bottom: 0;
      background: rgba(31, 31, 31, 0.38);
    }
  }
}
</style>

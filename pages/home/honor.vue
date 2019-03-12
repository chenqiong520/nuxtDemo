<template>
  <div class="honor">
    <div class="category-title">
      <div><span class="left-line" /> 咕泡荣誉<span class="right-line" /></div>
    </div>
    <!-- 滚动选择 -->
    <div v-swiper:mySwiper="swiperOption" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(item,index) in honorList"
          :key="index"
          @click="selectTeacher(item)"
          class="swiper-slide honor-item"
        >
          <img :src="item.img">
          <div>{{ item.desc }}</div>
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
          img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg',
          desc: '2018年腾讯课堂‘卓越贡献奖’'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/12.png',
          desc: '荣获腾讯2018年度影响力在线教育品牌'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/13.png',
          desc: '成为腾讯课堂认证机构'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/14.png',
          desc: '荣获腾讯2017年度知名在线教育品牌'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/15.png',
          desc: '荣获腾讯课堂“金课堂·最具潜力奖”'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/16.png',
          desc: '荣获腾讯课堂“创造101火箭机构奖”'
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
.honor {
  margin-top: 48px;
  .swiper {
    margin-top: 35px;
  }
  .teacher-item {
    width: 300px;
    margin-right: 16px;
    border: 1px solid rgba(236, 236, 236, 1);
    text-align: center;
    .teacher-img {
      width: 300px;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px 8px 0px 0px;
      }
    }
    .teacher-name {
      font-size: 32px;
      line-height: 32px;
      font-weight: 500;
      color: rgba(37, 37, 37, 1);
      margin-top: 24px;
      margin-bottom: 19px;
    }
    .teacher-tag {
      font-size: 26px;
      line-height: 26px;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 41px;
    }
  }
}
</style>

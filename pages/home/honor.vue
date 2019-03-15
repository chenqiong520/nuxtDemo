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
          class="swiper-slide honor-item"
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
          img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg',
          desc: '腾讯课堂·卓越贡献奖'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/12.png',
          desc: '年度影响力在线教育品牌'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/13.png',
          desc: '腾讯课堂认证机构'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/14.png',
          desc: '年度知名在线教育品牌'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/15.png',
          desc: '腾讯课堂·金课堂奖'
        },
        {
          img: '//cdn.gupaoedu.com/newIndex/images/16.png',
          desc: '创造101火箭机构奖'
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
  .swiper {
    margin-top: 35px;
  }
  .honor-item {
    width: 300px;
    margin-right: 16px;
    text-align: center;
    position: relative;
    img {
      width: 300px;
      height: 300px;
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
      background: rgba(31, 31, 31, 0.14);
    }
  }
}
</style>

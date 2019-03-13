<template>
  <div class="school">
    <div class="category-title">
      <div><span class="left-line" /> 学院风采<span class="right-line" /></div>
    </div>
    <!-- 滚动选择 -->
    <div v-swiper:mySwiper="swiperOption" class="swiper">
      <div class="swiper-wrapper">
        <div
          :class="item.secondList.length ===1 ? 'big-div': 'small-div'"
          v-for="(item,index) in honorList"
          :key="index"
          @click="selectTeacher(item)"
          class="swiper-slide school-item"
        >
          <div v-if="item.secondList" v-for="(second,i) in item.secondList" :key="i">
            <img :class="item.secondList.length ===1 ? 'big-img': 'small-img'" :src="second.img"/>
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
          secondList: [
            {
              img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg'
            }
          ]
        },
        {
          secondList: [
            {
              img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg'
            },
            {
              img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg'
            }
          ]
        },
        {
          secondList: [
            {
              img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg'
            }
          ]
        },
        {
          secondList: [
            {
              img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg'
            },
            {
              img: '//cdn.gupaoedu.com/newIndex/images/txzyj.jpg'
            }
          ]
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
.school {
  margin-top: 96px;
  .swiper {
    margin-top: 35px;
  }
  .school-item {
    margin-right: 16px;
    text-align: center;
    position: relative;
    .big-img {
      width: 382px;
      height: 310px;
      border-radius: 8px;
    }
    &.big-div {
      width: 382px;
    }
    &.small-div {
      width: 218px;
      font-size: 0;
      .small-img {
        width: 218px;
        height: 147px;
        border-radius: 8px;
        &:first-child {
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>

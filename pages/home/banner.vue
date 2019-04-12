<template>
  <div class="banner">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div  v-for="(item, index) in bannerList"  :key="index" class="swiper-slide">
          <a :href="item.bannerurl">
          <div class="banner-item" :style="`background-color:${item.colour} `">
            <img :src="item.picurl"/>
          </div>
          </a>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',

  data() {
    return {
      bannerList: [],
      swiperOption: {
        autoplay: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        }
      }
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  async mounted() {
    await this.getBannerList()
  },
  methods: {
    async getBannerList() {
      // 通过服务器接口获取数据
      await this.$axios.get(`wwwapi/view?bannertype=2`).then(res => {
        if (res.data.data.list) {
          this.bannerList = res.data.data.list
        }
      })
    }
  }
}
</script>

<style>
.banner {
  padding: 0 !important;
}

.banner .banner-item {
  width: 100%;
  height: 289px;
  overflow: hidden;
  text-align: center;
}

.banner .banner-item img {
  height: 100%;
  width: 100%;
}
.swiper-pagination-bullet-custom {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
  width: 40px;
  height: 12px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  margin-right: 5px;
}
</style>


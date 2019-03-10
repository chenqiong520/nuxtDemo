<template>
  <div class="banner">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="banner-item banner1"></div>
        </div>
        <div class="swiper-slide">
          <div class="banner-item banner1"></div>
        </div>
        <div class="swiper-slide">
          <div class="banner-item banner1"></div>
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
      swiperOption: {
        autoplay: true,
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

  methods: {
    callback() {}
  },

  mounted() {}
}
</script>

<style>
.banner .banner-item {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
}

.banner1 {
  background: url(../../assets/img/home/banner/b3.png);
  background-size: cover;
}

.banner2 {
  background: url(../../assets/img/home/banner/b4.png);
  background-size: cover;
}

.banner3 {
  background: url(../../assets/img/home/banner/b3.png);
  background-size: cover;
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


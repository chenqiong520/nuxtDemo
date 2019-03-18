<template>
  <div class="teacher">
    <div class="category-title">
      <div>
        <span class="left-line"/> 咕泡讲师
        <span class="right-line"/>
      </div>
      <p class="text">做教育，我们是认真的</p>
    </div>
    <!-- 滚动选择 -->
    <div v-swiper:mySwiper="swiperOption" class="swiper" >
      <div class="swiper-wrapper">
        <div
          v-for="(item,index) in teachers"
          :key="index"
          @click="selectTeacher(item.teacherImage, item.teacherName, item.teacherResume)"
          class="swiper-slide teacher-item"
        >
          <div class="teacher-img">
            <img :data-src="item.teacherImage" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="teacher-name">{{ item.teacherName }}</div>
          <div class="teacher-tag">{{ item.teacherTag }}</div>
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
      teachers: [],
      // 轮播图选项
      swiperOption: {
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        freeMode: true,
        spaceBetween: 16,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 3,
          loadOnTransitionStart: true
        }
      }
    }
  },

  async mounted() {
    await this.getTeachers()
  },

  methods: {
    async getTeachers() {
      // 通过服务器接口获取数据
      const response = await this.$axios.get(`wwwapi/findTeacherTeam`)
      this.teachers = response.data.data
      this.$nextTick(() => {
        this.mySwiper.lazy.load()
      })
    },
    // 选择老师
    selectTeacher(img, name, resume) {
      this.$router.push({
        name: 'teacher-detail',
        params: { img, name, resume }
      })
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
.teacher {
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
      position: relative;
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

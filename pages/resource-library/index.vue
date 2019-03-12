<template>
  <div class="resourse">
    <!-- 滚动选择 -->
    <div class="swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          :class="['swiper-slide', {'selected': currentSelectedSubject == index}]"
          v-for="(item,index) in rollerList"
          :key="index"
          @click="selectSubject(index, item.fileName)"
        >
          <div class="swiper-slide-number">{{item.number}}</div>
          <div class="swiper-slide-name">{{item.name}}</div>
        </div>
      </div>
    </div>

    <!-- 精选视频 -->
    <course-list
      show-title
      list-name="精选视频"
      :course-list="goodCourseList"
      margin-top="0"
      :show-all="false"
      :course-type="courseType"
      :video-type="0"
      v-if="goodCourseList.length"
    ></course-list>

    <!-- VIP独家视频 -->
    <course-list
      show-title
      list-name="VIP独家视频"
      :course-list="vipCourseList"
      margin-top="50px"
      :show-all="false"
      :course-type="courseType"
      :video-type="1"
      v-if="vipCourseList.length"
    ></course-list>
  </div>
</template>

<script>
import CourseList from '~/components/CourseList.vue'

export default {
  name: 'ResourceLibrary',

  layout: 'home',

  components: {
    CourseList
  },

  data() {
    return {
      // 滚动区域选项列表
      rollerList: [
        { id: 0, number: 12, name: 'JAVA架构', fileName: 'java' },
        { id: 1, number: 3, name: '人工智能', fileName: 'ai' },
        { id: 2, number: 12, name: '大数据', fileName: 'bigdata' },
        { id: 3, number: 21, name: '测试', fileName: 'test' },
        { id: 4, number: 5, name: '前端', fileName: 'web' }
      ],
      // 当前选中学科
      currentSelectedSubject: 0,
      // 轮播图选项
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true
      },
      // 精选课程列表
      goodCourseList: [],
      // VIP独家视频
      vipCourseList: [],
      // 当前页的课程类型
      courseType: 'java'
    }
  },

  methods: {
    // 选择学科
    selectSubject(index, fileName) {
      this.currentSelectedSubject = index
      this.getCourseList(fileName)
      this.courseType = fileName
    },

    /**
     *  获取课程详情
     *  @param { String } courseName 课程对应json文件名
     */
    async getCourseList(courseName) {
      const res = await this.$axios.get(
        `${window.location.origin}/datas/resourse/${courseName}.json`
      )
      const resData = res.data.data
      this.goodCourseList = resData.featuredVideos.data
      this.vipCourseList = resData.vipVideos ? resData.vipVideos.data : []
    }
  },

  mounted() {
    this.getCourseList('java')
  }
}
</script>

<style scoped>
.resourse .swiper {
  margin: 32px 0 46px 0;
}
.resourse .swiper-wrapper {
  padding-left: 32px;
}
.resourse .swiper-wrapper .swiper-slide {
  width: 174px;
  height: 94px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10rpx;
  box-sizing: border-box;
  margin-right: 16px;
}
.resourse .swiper-slide div {
  color: #666;
}
.resourse .swiper-slide .swiper-slide-number {
  font-size: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.resourse .swiper-slide .swiper-slide-name {
  font-size: 28px;
}
.resourse .swiper-wrapper .selected {
  background: #fee9e5;
}
.resourse .swiper-wrapper .selected div {
  color: #fd553a;
}
</style>

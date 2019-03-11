<template>
  <div class="resourse">

    <!-- 滚动选择 -->
    <div class="swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div :class="['swiper-slide', {'selected': currentSelectedSubject == index}]"
          v-for="(item,index) in rollerList"
          :key="index"
          @click="selectSubject(index)">
            <div class="swiper-slide-number">{{item.number}}</div>
            <div class="swiper-slide-name">{{item.name}}</div>
        </div>
      </div>
    </div>

    <!-- 精选视频 -->
    <course-list
      show-title
      list-name="精选视频"
      :course-list="courseList"
      @check-all="navToAll">
    </course-list>

    <!-- VIP独家视频 -->
    <course-list
      show-title
      list-name="VIP独家视频"
      :course-list="courseList"
      @check-all="navToAll"
      style="margin-top:50px;">
    </course-list>
  </div>
</template>

<script>
import CourseList from '~/components/CourseList.vue'

export default {
  name: 'ResourceLibrary',

  components: {
    CourseList
  },

  data() {
    return {
      // 滚动区域选项列表
      rollerList: [
        { id: 0, number: 10, name: 'JAVA架构' },
        { id: 1, number: 20, name: '人工智能' },
        { id: 2, number: 30, name: '大数据' },
        { id: 3, number: 30, name: '大数据' },
        { id: 4, number: 30, name: '大数据' },
        { id: 5, number: 30, name: '大数据' },
        { id: 6, number: 30, name: '大数据' }
      ],
      // 当前选中学科
      currentSelectedSubject: 0,
      // 轮播图选项
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true
      },
      // 课程列表数据
      courseList: [
        { id: 0, imageUrl: '../../assets/img/course/bigdata.png', watchedTimes: 1222, courseName: '咕泡学院人工智能发布会咕泡学院人工智能发布会咕泡学院人工智能发布会咕泡学院人工智能发布会', courseTeacher: '咕泡学院-Tom' },
        { id: 1, imageUrl: '../../assets/img/course/bigdata.png', watchedTimes: 2222, courseName: '咕泡学院人工智能发布会', courseTeacher: '咕泡学院-Tom' },
        { id: 2, imageUrl: '../../assets/img/course/bigdata.png', watchedTimes: 3222, courseName: '咕泡学院人工智能发布会', courseTeacher: '咕泡学院-Tom' },
        { id: 3, imageUrl: '../../assets/img/course/bigdata.png', watchedTimes: 4222, courseName: '咕泡学院人工智能发布会', courseTeacher: '咕泡学院-Tom' }
      ]
    }
  },

  methods: {
    // 选择学科
    selectSubject(index) {
      this.currentSelectedSubject = index
    },

    // 查看全部
    navToAll() {
      console.log('查看全部')
    }
  }
}
</script>

<style scoped>
.resourse .swiper{
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
  background: #FEE9E5;
}
.resourse .swiper-wrapper .selected div {
  color: #FD553A;
}
</style>

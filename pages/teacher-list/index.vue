<template>
  <div class="teacher">
    <!-- 滚动选择 -->
    <div class="swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          :class="['swiper-slide', {'selected': currentSelectedTeacher == item.teacherType}]"
          v-for="(item,index) in rollerList"
          :key="index"
          @click="selectTeacher(item.teacherType)"
        >
          <div class="swiper-slide-number">{{item.number}}</div>
          <div class="swiper-slide-name">{{item.name}}</div>
        </div>
      </div>
    </div>

    <!-- 老师列表 -->
    <div class="teacher-list">
      <div
        class="teacher-item"
        v-for="(item, index) in currentTeacherList"
        :key="index"
        @click="navToDetail(item.teacherImage, item.teacherName, item.teacherResume)">
          <img :src="item.teacherImage" alt="">
          <div class="teacher-name">{{item.teacherName}}</div>
          <div class="teacher-tag">{{item.teacherTag}}</div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  layout(context) {
    return 'course'
  },

  data() {
    return {
       // 滚动区域选项列表
      rollerList: [
        { id: 0, number: 6, name: 'JAVA架构', teacherType: 'java' },
        { id: 1, number: 1, name: '人工智能', teacherType: 'ai' },
        { id: 2, number: 11, name: '大数据', teacherType: 'bigdata' },
        { id: 3, number: 7, name: '软件测试', teacherType: 'test' },
        { id: 4, number: 1, name: 'Web前端', teacherType: 'web' }
      ],
      // 当前选中老师类型
      currentSelectedTeacher: 'java',
      // 轮播图选项
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true
      },
      // 全部老师列表
      teacherList: [],
      // 当前类目老师
      currentTeacherList: []
    }
  },

  methods: {
    // 选择老师
    selectTeacher(teacherType) {
      this.currentSelectedTeacher = teacherType
      this.currentTeacherList = this.teacherList.filter(ele => ele.teacherType == teacherType)
      console.log(teacherType)
    },

    // 获取老师列表
    async getTeacherList() {
      const res = await this.$axios.get('http://192.168.8.122/manageapi/wwwapi/findTeacherTeam')
      const data = res.data.data
      this.teacherList = data
      this.currentTeacherList = data.filter(ele => ele.teacherType == this.currentSelectedTeacher)
      console.log(data)
    },

    // 跳转详情
    navToDetail(img, name, resume) {
      this.$router.push({
        name: 'teacher-detail',
        params: { img, name, resume }
      })
    }
  },

  mounted() {
    this.getTeacherList()
  }
}
</script>
  
<style lang="scss" scoped>

.swiper {
  margin: 32px 0 46px 0;
  .swiper-wrapper {
    padding-left: 32px;
    .swiper-slide {
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
      div {
        color: #666;
      }
      .swiper-slide-number {
        font-size: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .swiper-slide-name {
        font-size: 28px;
      }
    }
    .selected {
      background: #fee9e5;
      div {
        color: #fd553a;
      }
    }
  }
}
.teacher-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 32px;
  .teacher-item {
    width: 326px;
    background: #ECECEC;
    padding-bottom: 30px;
    margin-bottom: 30px;
      text-align: center;
    img {
      width: 100%;
      height: 326px;
    }
    .teacher-name {
      font-size: 32px;
      margin: 10px 0;
    }
    .teacher-tag {
      font-size: 26px;
      color: #666;
    }
  }
}
</style>
  
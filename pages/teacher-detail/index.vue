<template>
  <div class="teacher">
    <div class="teacher-name">
      <img :src="teacherImage" alt="">
      <div>{{teacherName}}</div>
    </div>
    <div class="teacher-description">{{teacherDescription}}</div>

    <!-- 主讲课程 -->
    <course-list
      show-title
      list-name="主讲课程"
      :course-list="mainCourseList"
      :show-all="false"
      :show-teacher-name="false"
      margin-top="60px">
    </course-list>
  </div>
</template>

<script>
import CourseList from '~/components/CourseList.vue'

export default {
  layout(context) {
    return 'course'
  },

  components: {
    CourseList
  },

  data() {
    return {
      teacherImage: require('../../assets/img/course/bigdata.png'),
      teacherName: '咕泡教育-James',
      teacherDescription: '10年行业经验，其中3年外企、7年互联网工作经验。曾就职于惠普、大众点评、互联网金融行业，丰富的前后台大型项目架构经验。 有着丰富的分布式服务，高并发高可用应用经验。对系统诊断、调优有大量的实战经验精通java、j2ee架构、redis、mongodb、消息组件如kafka、activeMq。 格言：不仅授人以鱼，而且要授人以鱼杆。',
      // 主讲课程
      mainCourseList: [
        {
          id: 0,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 1222,
          courseName: '咕泡学院人工智能发布会咕泡学院人工智能发布会咕泡学院人工智能发布会咕泡学院人工智能发布会',
          currentPrice: 99.00,
          originalPrice: 100
        },
        {
          id: 1,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 2222,
          courseName: '咕泡学院人工智能发布会',
          courseTeacher: '咕泡学院-Tom',
          currentPrice: 99.00,
          originalPrice: 100
        },
        {
          id: 2,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 3222,
          courseName: '咕泡学院人工智能发布会',
          courseTeacher: '咕泡学院-Tom',
          currentPrice: 99.00,
          originalPrice: 100
        },
        {
          id: 3,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 4222,
          courseName: '咕泡学院人工智能发布会',
          courseTeacher: '咕泡学院-Tom',
          currentPrice: 99.00,
          originalPrice: 100
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.teacher {
  padding-top: 40px;
  .teacher-name {
    display: flex;
    align-items: center;
    padding: 0 30px;
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }
    div {
      color: #252525;
      font-size: 36px;
      margin-left: 20px;
    }
  }
  .teacher-description {
    padding: 0 30px;
    font-size: 28px;
    color: #666;
    margin-top: 24px;
    text-align: justify;
  }
}
</style>

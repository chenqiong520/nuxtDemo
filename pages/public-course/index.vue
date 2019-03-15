<template>
  <div class="public-course">
    <div class="course-title-box">
      <div class="left">
        <div><img src="@/assets/img/home/public-icon.png"><span class="course-title">今日公开课</span></div>
        <div class="title-desc">
          提前了解技术大牛精心研发课程
        </div>
      </div>
    </div>
    <public-course :publicCourseList="publicCourseList"></public-course>
  </div>
</template>

<script>
import PublicCourse from '@/components/PublicCourse'
export default {
  name: 'Index',
  layout: 'course',
  components: {
    PublicCourse
  },
  data() {
    return {
      publicCourseList: [
        {
          coverImg: require('@/assets/img/home/public/java.png'),
          url: 'https://m.ke.qq.com/course/185189?_bid=167&_wv=1',
          courseName: ' JAVA开发架构课',
          courseTeacher: '咕泡学院-jack老师',
          courseStatus: ''
        },
        {
          coverImg: require('@/assets/img/home/public/bigdata.png'),
          url: 'https://m.ke.qq.com/course/280820?_bid=167&_wv=1',
          courseName: ' 大数据&机器学习',
          courseTeacher: '咕泡学院-Vingo老师',
          courseStatus: ''
        },
        {
          coverImg: require('@/assets/img/home/public/ai.png'),
          url: 'https://m.ke.qq.com/course/364348?_bid=167&_wv=1',
          courseName: ' 人工智能',
          courseTeacher: '咕泡学院-秦老师',
          courseStatus: ''
        },
        {
          coverImg: require('@/assets/img/home/public/test.png'),
          url: 'https://m.ke.qq.com/course/249690?flowToken=1002165&_bid=167&_wv=1',
          courseName: ' 软件测试',
          courseTeacher: '咕泡学院-carvin老师',
          courseStatus: ''
        },
        {
          coverImg: require('@/assets/img/home/public/web.png'),
          url: 'https://m.ke.qq.com/course/255390?tuin=9f7c6eb0&_bid=167&_wv=1',
          courseName: ' Web前端',
          courseTeacher: '咕泡学院-song老师',
          courseStatus: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.public-course {
  padding: 0 30px;
  .course-title-box {
    margin-top: 55px;
    display: flex;
    align-items: center;
  }
  .course-title-box .left img {
    width: 34px;
    margin-right: 16px;
  }
  .course-title-box .left .course-title {
    font-size: 36px;
    line-height: 36px;
    font-weight: bold;
    color: rgba(37, 37, 37, 1);
  }
  .course-title-box .left .title-desc {
    margin-top: 16px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .course-title-box .right {
    flex: 1;
    text-align: right;
  }
}
</style>

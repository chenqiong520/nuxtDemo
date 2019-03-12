<template>
  <div class="home">
    <banner />
    <!--今日公开课-->
    <div class="public-course">
      <div class="course-title-box clear">
        <div class="left">
          <div><img src="@/assets/img/home/public-icon.png"><span class="course-title">今日公开课</span></div>
          <div class="title-desc">
            提前了解技术大牛精心研发课程
          </div>
        </div>
        <div class="right">
          <i class="iconfont iconarrow-right-copy-copy-copy" style="font-size:32px; color:#444" />
        </div>
      </div>
      <div class="course-cont-wrapper clear">
        <div class="left-item">
          <div class="course-img">
            <img src="//cdn.gupaoedu.com/newIndex/images/stk/Java1.jpg">
            <div class="status-desc">
              直播中
            </div>
          </div>
          <div class="course-name">
            JAVA开发架构课
          </div>
          <div class="course-teacher">
            咕泡学院-jack老师
          </div>
        </div>
        <div class="right-item">
          <div class="course-img">
            <img src="//cdn.gupaoedu.com/newIndex/images/stk/ai.jpg">
            <div class="status-desc">
              直播中
            </div>
          </div>
          <div class="course-name">
            人工智能
          </div>
          <div class="course-teacher">
            咕泡学院-秦老师
          </div>
        </div>
      </div>
    </div>
    <!--热门课程-->
    <hot-course :hotCourse="hotCourse" />
    <!--8s服务体系-->
    <div class="service-system">
      <div class="category-title">
        <div><span class="left-line" />首创在线教育8S服务体系<span class="right-line" /></div>
        <p class="text">
          只为更好的你
        </p>
      </div>
      <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td>
            <div></div>
            <div>入学评估</div>
          </td>
          <td>
            <div></div>
            <div>学籍管理</div>
          </td>
          <td>
            <div></div>
            <div>监督学习</div>
          </td>
          <td>
            <div></div>
            <div>就业内推</div>
          </td>
        </tr>
      </table>
    </div>
    <student />
    <teacher />
  </div>
</template>

<script>
import Banner from './home/banner'
import HotCourse from '@/components/HotCourse'
import Student from './home/student'
import Teacher from './home/teacher'

export default {
  name: 'Index',
  layout: 'home',

  components: {
    Banner,
    HotCourse,
    Student,
    Teacher
  },
  data() {
    return {
      hotCourse: {
        titleIcon: '/_nuxt/assets/img/home/hot-icon.png',
        titleName: '热门课程',
        titleDesc: '做技术人的指路明灯，职业生涯的精神导师',
        courseList: [
          {
            coverImg: '//cdn.gupaoedu.com/newIndex/images/kc/Git.jpg',
            url: '',
            readNum: 14363,
            CommentNum: 460,
            courseName: ' Git入门教程',
            price: '¥29.99'
          },
          {
            coverImg: '//cdn.gupaoedu.com/newIndex/images/kc/xmkjpkc.jpg',
            url: '',
            readNum: 6112,
            CommentNum: 20,
            courseName: ' 小马哥的精品课程',
            price: ' ¥6.66'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.home {
  padding: 0 30px;
}
.clear:after {
  content: ' ';
  display: block;
  clear: both;
}
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

.course-cont-wrapper {
  margin-top: 32px;
}
.course-cont-wrapper .left-item {
  float: left;
}
.course-cont-wrapper .right-item {
  float: right;
}
.course-cont-wrapper .course-img {
  position: relative;
  width: 334px;
  height: 186px;
}
.course-cont-wrapper .course-img > img {
  width: 100%;
  height: 100%;
  background: rgba(77, 61, 238, 1);
  border-radius: 8px;
}
.course-cont-wrapper .course-img .status-desc {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 56px;
  background: rgba(31, 31, 31, 0.14);
  border-radius: 0px 0px 8px 8px;
  color: #fff;
  line-height: 56px;
  font-size: 24px;
  padding-left: 24px;
  box-sizing: border-box;
}
.course-cont-wrapper .course-name {
  line-height: 30px;
  font-size: 32px;
  font-weight: bold;
  color: rgba(37, 37, 37, 1);
  margin-top: 22px;
}
.course-cont-wrapper .course-teacher {
  font-size: 24px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
  margin-top: 14px;
}
.hot-course {
  margin-top: 69px;
}
.hot-course .price {
  margin-top: 22px;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
  color: rgba(253, 85, 58, 1);
}
.hot-course .num .span1 {
  display: inline-block;
  margin-right: 24px;
}
.hot-course .num .iconfont {
  font-size: 14px;
  margin-right: 5px;
}
.service-system {
  background: rgba(248, 248, 248, 1);
  padding-top: 48px;
}
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
</style>

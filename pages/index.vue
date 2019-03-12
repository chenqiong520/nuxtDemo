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
      <div class="service-wrapper">
        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/1.png">
          </div>
          <div class="desc">
            入学评估
          </div>
        </div>

        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/2.png">
          </div>
          <div class="desc">
            学籍管理
          </div>
        </div>
        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/3.png">
          </div>
          <div class="desc">
            监督学习
          </div>
        </div>
        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/4.png">
          </div>
          <div class="desc">
            就业内推
          </div>
        </div>
        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/5.png">
          </div>
          <div class="desc">
            奖学金管理
          </div>
        </div>

        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/6.png">
          </div>
          <div class="desc">
            毕业认证
          </div>
        </div>
        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/7.png">
          </div>
          <div class="desc">
            终身会员
          </div>
        </div>
        <div class="service-item">
          <div class="icon-box">
            <img src="//cdn.gupaoedu.com/newIndex/images/8.png">
          </div>
          <div class="desc">
            课程迭代
          </div>
        </div>
      </div>
    </div>
    <teacher />
    <!--学员反馈-->
    <div class="feedback">
      <div class="category-title">
        <div><span class="left-line" />学员反馈<span class="right-line" /></div>
        <p class="text">
          咕泡学员平均涨薪50%以上，26%学员进入BAT
        </p>
      </div>
      <div class="feedback-cont">
        <div class="feedback-item item1">
          <img class="ico-m" src="//cdn.gupaoedu.com/newIndex/images/9.png">
          <div class="item-num">
            8500+
          </div>
          <div class="item-text">
            VIP付费学员
          </div>
        </div>
        <div class="feedback-item item2">
          <img class="ico-m" src="//cdn.gupaoedu.com/newIndex/images/11.png">
          <div class="item-num">
            1600+
          </div>
          <div class="item-text">
            累计开课次数
          </div>
        </div>
        <div class="feedback-item item3">
          <img class="ico-m" src="//cdn.gupaoedu.com/newIndex/images/10.png">
          <div class="item-num">
            235000+
          </div>
          <div class="item-text">
            累计听课人数
          </div>
        </div>
      </div>

      <div>
        <div class="student-item" v-for="(item, index) in studentList" :key="index">
          <div class="student-flex">
            <div class="student-photo">
              <img :src="item.photoUrl">
            </div>
            <div class="student-info">
              <div class="student-no">
                {{item.no}}
              </div>
              <div class="student-work">
                {{item.work}}
              </div>
            </div>
            <div>
              <i class="iconfont iconarrow-right-copy-copy-copy" style="font-size:24px; color:#252525" />
            </div>
          </div>

          <div class="student-desc">
            {{item.desc}}
          </div>
        </div>
        <div class="open-all">
          展开全部学员
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './home/banner'
import HotCourse from '@/components/HotCourse'
import Teacher from './home/teacher'

export default {
  name: 'Index',
  layout: 'home',

  components: {
    Banner,
    HotCourse,
    Teacher
  },
  data() {
    return {
      hotCourse: {
        titleIcon: require('@/assets/img/home/hot-icon.png'),
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
      },
      studentList: [
        {
          photoUrl: '//cdn.gupaoedu.com/newIndex/images/user1.png',
          no: 'GP10167',
          work: 'Mark 系统架构师(薪资60K/月)',
          desc:
            '参加了咕泡的课程，巩固了我的知识，并且让我的经验发挥了效果。成功拿到了架构师职位的offer，目前在一家互联网企业担任系统架构师。'
        },
        {
          photoUrl: '//cdn.gupaoedu.com/newIndex/images/user2.png',
          no: 'GP10326',
          work: '阿里高级开发工程师(薪资38K/月)',
          desc:
            '在咕泡的一年多时间里面，不仅仅学到了技术交到了朋友建立了圈子，更是收获了信心和能量，让我现在阿里工作游刃有余，感谢咕泡感谢默默付出的导师们。'
        },
        {
          photoUrl: '//cdn.gupaoedu.com/newIndex/images/user3.jpg',
          no: 'GP10022',
          work: 'Java资深开发工程师(薪资30K/月)',
          desc:
            '短短的几个月时间，是我职业生涯中最高效的学习时间段，虽然很辛苦，与收获相比，我觉得非常值得。'
        }
      ]
    }
  }
}
</script>

<style  lang="scss" scoped>
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
.service-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  .service-item {
    width: 25%;
    text-align: center;
    .icon-box {
      width: 140px;
      height: 140px;
      line-height: 140px;
      background-color: #fff;
      border-radius: 12px;
      display: inline-block;
      img {
        margin-top: 35px;
      }
    }
    .desc {
      margin-top: 19px;
      font-size: 28px;
      color: #252525;
      line-height: 28px;
      margin-bottom: 32px;
    }
  }
}
.feedback {
  margin-top: 96px;
  .feedback-cont {
    display: flex;
    margin-top: 36px;
    margin-bottom: 40px;
    justify-content: space-between;
    .feedback-item {
      border-radius: 10px;
      width: 218px;
      height: 201px;
      color: #fff;
      padding-left: 24px;
      box-sizing: border-box;
      .ico-m {
        width: 52px;
        margin-top: 28px;
      }
      .item-num {
        font-size: 34px;
        line-height: 34px;
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: 13px;
      }
      .item-text {
        font-size: 26px;
        line-height: 26px;
        font-weight: 400;
      }
    }
    .item1 {
      background: linear-gradient(
        -20deg,
        rgba(253, 85, 58, 1),
        rgba(252, 126, 106, 1)
      );
    }
    .item2 {
      background: linear-gradient(
        -20deg,
        rgba(19, 194, 194, 1),
        rgba(49, 224, 224, 1)
      );
    }
    .item3 {
      background: linear-gradient(
        -36deg,
        rgba(47, 84, 235, 1),
        rgba(88, 119, 248, 1)
      );
    }
  }
  .student-item {
    border-top: 1px solid #eaeaea;
    .student-flex {
      display: flex;
      align-items: center;
      margin-top: 40px;
      .student-photo {
        width: 72px;
        height: 72px;
        margin-right: 27px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .student-info {
        flex: 1;
        .student-no {
          font-size: 30px;
          line-height: 30px;
          font-weight: 500;
          color: rgba(37, 37, 37, 1);
          margin-bottom: 8px;
        }
        .student-work {
          display: inline-block;
          background: rgba(254, 233, 229, 1);
          border-radius: 4px;
          font-size: 24px;
          padding: 6px 8px;
          font-weight: 500;
          color: rgba(253, 85, 58, 1);
        }
      }
    }
    .student-desc {
      font-size: 28px;
      margin-top: 30px;
      margin-bottom: 39px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
  .open-all {
    height: 72px;
    line-height: 72px;
    background: rgba(245, 245, 245, 1);
    border-radius: 6px;
    font-size: 26px;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    text-align: center;
  }
}
</style>

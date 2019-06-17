<template>
  <div class="course-bigdata">
    <main class="content">
      <nav class="banner">
        <img src="../../assets/img/course/bigdata/bigdata-banner-bg.png" alt="课程详情介绍">
      </nav>

      <!-- <section class="course-title">
        <h2 class="title">学院课程</h2>
        <img src="../../assets/img/course/bigdata/bigdata-fm.png" alt="课程详情介绍">
      </section>-->

      <!--<section class="course-summary">
        <h2>大数据高级提升课程</h2>
        <h3>站在巨人的肩膀上铸就新未来</h3>
        <p class="price">￥16800.00</p>
        <p class="cycle">
          <strong>周期</strong>4个月
        </p>
        <p class="way">
          <strong>方式</strong>直播为主，录播、学习资料为辅
        </p>
        <p class="place">
          <strong>地点</strong>腾讯课堂
        </p>
        <p class="time">
          <strong>时间</strong>每周六、周日晚20:00~22:00
        </p>
      </section>-->


      <section class="framework">
        <div class="fw-title">
          <p>大数据开发工程师高薪特训班</p>
        </div>
        <div v-swiper:courseSwiper="courseSwiperOption">
          <div class="framework-item-box swiper-wrapper">
            <div class="vip-item swiper-slide framework-item">
              <div class="price">
                <span class="price-icon">¥</span>6380
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />课程学习期限<span class="right-line" />
                </div>
                <p>直播套餐时间/1期</p>
                <p>录播套餐时间/2年</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />专属职业服务<span class="right-line" />
                </div>
                <p>大数据VIP课件PPT下载</p>
                <p>大数据VIP项目源码下载</p>
                <p>大数据VIP课堂笔记下载</p>
                <p>大数据VIP所有录播下载</p>
                <p>大数据求职简历优化服务</p>
                <p>学员专属交流微信群</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />课程优享<span class="right-line" />
                </div>
                <p>五个月大数据VIP直播课程</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />学习权限<span class="right-line" />
                </div>
                <p>名企大数据架构师一对一解答服务</p>
                <p>学员专属交流QQ群</p>
                <p>专属地区咕泡学员群</p>
                <p>专属班主任学习管理</p>
                <p>毕业名企大数据岗位内推</p>
                <p>录播课程授权账号2个</p>
              </div>
              <div class="button-group">
                <a target="_blank" href="https://ke.qq.com/course/280821?tuin=7eeb913b">  <div class="sign">前往报名</div></a>
                <div @click="toKeFu" class="advice">
                  立即咨询
                </div>
              </div>
            </div>
            <div class="svip-item swiper-slide active framework-item">
              <div class="price">
                <span class="price-icon">¥</span>6880
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />课程学习期限<span class="right-line" />
                </div>
                <p>直播套餐时间/2期</p>
                <p>录播套餐时间/4年</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />专属职业服务<span class="right-line" />
                </div>
                <p>大数据VIP套餐1全部专属职业服务</p>
                <p>资深大数据架构师一对一聊天</p>
                <p>帮你清晰规划学习路线与职业规划</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />课程优享<span class="right-line" />
                </div>
                <p>数据结构+算法+大数据算法应用</p>
                <p>python机器学习课程</p>
                <p>职场软实力提升精选课程</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />学习权限<span class="right-line" />
                </div>
                <p>名企大数据架构师一对一解答服务</p>
                <p>学员专属交流QQ群</p>
                <p>专属地区咕泡学员群</p>
                <p>专属班主任学习管理</p>
                <p>毕业名企大数据岗位内推</p>
                <p>录播课程授权账号2个</p>
              </div>

              <div class="button-group">
                <a target="_blank" href="https://ke.qq.com/course/280821?tuin=7eeb913b"> <div class="sign">前往报名</div></a>
                <div @click="toKeFu" class="advice">
                  立即咨询
                </div>
              </div>
            </div>
            <div class="cto-item swiper-slide framework-item">
              <div class="price">
                <span class="price-icon">¥</span>7680
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />课程学习期限<span class="right-line" />
                </div>
                <p>直播套餐时间/4年</p>
                <p>录播套餐时间/终身</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />专属职业服务<span class="right-line" />
                </div>
                <p>大数据VIP套餐2全部专属职业服务</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />课程优享<span class="right-line" />
                </div>
                <p>数据结构+算法+大数据算法应用</p>
                <p>python机器学习课程</p>
                <p>职场软实力提升精选课程</p>
              </div>

              <div class="item-desc-box">
                <div class="item-desc-title">
                  <span class="left-line" />学习权限<span class="right-line" />
                </div>
                <p>名企大数据架构师一对一解答服务</p>
                <p>学员专属交流QQ群</p>
                <p>专属地区咕泡学员群</p>
                <p>专属班主任学习管理</p>
                <p>毕业名企大数据岗位内推</p>
                <p>录播课程授权账号2个</p>
              </div>

              <div class="button-group">
                <a target="_blank" href="https://ke.qq.com/course/280821?tuin=7eeb913b">  <div class="sign">前往报名</div></a>
                <div @click="toKeFu" class="advice">
                  立即咨询
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="course-teacher">
        <h2>老师介绍</h2>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div v-for="teacher in teachers" :key="teacher.id" class="swiper-slide">
              <img :src="teacher.teacherImage" alt="课程详情介绍">
              <p class="teacher-name">
                {{ teacher.teacherName }}
              </p>
              <p class="teacher-tag">
                {{ teacher.teacherTag }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="course-detail">
        <h2>图文介绍</h2>
        <img src="../../assets/img/course/bigdata/bigdata-bg-js1.png" alt="课程详情介绍">
        <!-- <template v-if="isLoadAll">
          <img src="../../assets/img/course/bigdata/bigdata-bg-js2.png" alt="课程详情介绍">
        </template> -->
        <div v-show="!isLoadAll" @click="loadAll" class="load-all">
          查看全部图文
        </div>
      </section>

      <section class="course-compendium">
        <h2>课程大纲</h2>

        <div
          v-for="(compendiumItem,index) in compendium"
          :key="index"
          class="course-compendium-item"
        >
          <div class="item-title">
            <strong>{{ index+1 }}</strong>
            {{ compendiumItem.outlineTitle }}
          </div>
          <div v-for="(firstLevelItem,index1) in compendiumItem.firstLevel" :key="index1">
            <div class="video-name">
              {{ firstLevelItem.fisrtLevelName }}
            </div>
            <div class="time">
              {{ videoTime() }}分钟
            </div>
          </div>
        </div>
      </section>
    </main>

    <course-footer v-bind="footerProps" class="footer" />
  </div>
</template>

<script>
import CourseFooter from '../course/common/footer'

export default {
  name: 'CourseBigdata',

  layout(context) {
    return 'course'
  },

  components: {
    CourseFooter
  },

  data() {
    return {
      // swiper配置
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 16
      },
      courseSwiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 16
      },
      isLoadAll: false,

      // 课程老师
      teachers: [],
      // 纲要
      compendium: {},

      footerProps: {
        QQGroupTitle: '添加qq群加入大数据交流群', // QQ群提示
        QQGroupNumber: '96106784', // QQ群号
        qrcodeTitle: '扫一扫加入大数据交流群', // 微信二维码提示
        qrcodeSrc: require('@/assets/img/course/bigdata/bigdata-gzh.jpg'), // 关注二维码
        toTencentUrl: 'https://ke.qq.com/course/280821' // 跳转至腾讯课堂地址
      }
    }
  },

  mounted() {
    this.getTeachers()
    this.getCompendium()
  },

  methods: {
    /**
     * 跳转到客服
     */
    toKeFu() {
      window.open('http://q.url.cn/cdF96S?_type=wpa&qidian=true')
    },
    async getTeachers() {
      const response = await this.$axios.get(
        'wwwapi/findTeacherTeamByType?teacherType=bigdata'
      )
      if (response && response.status === 200) {
        this.teachers = response.data.data
      }
    },

    async getCompendium() {
      const response = await this.$axios.get(
        `${window.location.origin}/datas/course/bigdata-compendium.json`
      )

      if (response && response.status === 200) {
        this.compendium = response.data.data
      }
    },

    videoTime(end = 100, start = 10) {
      return parseInt(Math.random() * (end - start + 1) + start, 10)
    },

    /**
     * 加载全部图文
     */
    loadAll() {
      this.isLoadAll = true
    }
  }
}
</script>

<style lang="scss" scoped>
/* 布局 */
.course-bigdata {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;

  main.content {
    width: 100%;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .footer {
    height: 96px;
  }
}

/* 主内容 */
.course-bigdata main.content {
  nav.banner {
    height: 548px;
  }

  .course-title {
    margin-top: 54px;
  }

  .course-summary {
    margin-top: 40px;
  }

  section {
    box-sizing: border-box;
    padding: 0 30px;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
  }
}

/* banner */
.course-bigdata main.content nav.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
  }
}

/* 学院课程 */
.course-bigdata main.content .course-title {
  .title {
    height: 31px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
    line-height: 44px;
  }

  img {
    margin-top: 24px;
    width: 686px;
    height: 381px;
    border-radius: 8px;
    object-fit: cover;
  }
}

/* 课程简介 */
.course-bigdata main.content .course-summary {
  h2 {
    height: 38px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(37, 37, 37, 1);
  }

  h3 {
    margin-top: 24px;
    height: 25px;
    font-size: 26px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .price {
    margin-top: 32px;
    height: 32px;
    font-size: 42px;
    font-weight: bold;
    color: rgba(253, 85, 58, 1);
  }

  .cycle {
    margin-top: 80px;
  }

  .way,
  .place,
  .time {
    margin-top: 67px;
  }

  .cycle,
  .way,
  .place,
  .time {
    font-size: 28px;
    font-weight: 400;
    color: rgba(37, 37, 37, 1);

    strong {
      margin-right: 55px;
      width: 49px;
      height: 25px;
      font-size: 26px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
}

/* 老师介绍 */
.course-bigdata main.content .course-teacher {
  margin-top: 90px;

  h2 {
    height: 31px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
  }

  .swiper-wrapper {
    margin-top: 27px;

    .swiper-slide {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 300px;
        height: 300px;
        border-radius: 8px;
      }

      .teacher-name {
        margin-top: 24px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(37, 37, 37, 1);
      }

      .teacher-tag {
        margin-top: 19px;
        font-size: 26px;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
    }
  }
}

/* 图文介绍 */
.course-bigdata main.content .course-detail {
  margin-top: 98px;
  width: 100%;

  h2 {
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
  }

  img {
    display: block;
    margin-bottom: 31px 0 15px 0;
    width: 100%;
    object-fit: cover;
  }

  .load-all {
    margin-top: 62px;
    width: 686px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    background: rgba(245, 245, 245, 1);
    border-radius: 6px;
    font-size: 26px;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
  }
}

/* 课程大纲 */
.course-bigdata main.content .course-compendium {
  margin-top: 64px;

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: rgba(37, 37, 37, 1);
    margin-bottom: 47px;
  }

  .course-compendium-item {
    margin-bottom: 64px;
    .item-title {
      font-size: 34px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      strong {
        color: rgba(208, 208, 208, 1);
        margin-right: 10px;
      }
    }

    .video-name {
      margin-top: 48px;
      margin-left: 126px;
      font-size: 28px;
      font-weight: 400;
      color: rgba(37, 37, 37, 1);
      position: relative;

      &:before {
        content: '\e7c8';
        font-family: 'iconfont';
        position: absolute;
        font-size: 28px;
        top: 5px;
        left: -35px;
      }
    }

    .time {
      margin-top: 16px;
      margin-left: 126px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(199, 199, 201, 1);
    }
  }
}

/*架构技术*/
.framework {
  margin: 0 auto;
}
.framework .fw-title {
  margin: 50px auto;
  font-size: 32px;
  color: #252525;
  text-align: center;
  font-weight: 500;
}
.framework .fw-title .detail {
  font-size: 14px;
  color: #999;
  margin-top: 12px;
}

.framework-item-box {
  display: flex;
  margin-bottom: 60px;
}
.framework-item-box .framework-item {
  width: 413px;
  height: 1471px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.framework-item-box .framework-item.vip-item {
  background: url('../../assets/img/course/bigdata/vip1.png') no-repeat center
    center;
  background-size: 100% 100%;
  margin-right: 26px;
}
.framework-item-box .framework-item.svip-item {
  background: url('../../assets/img/course/bigdata/vip2.png') no-repeat center
    center;
  background-size: 100% 100%;
  margin-right: 26px;
}
.framework-item-box .framework-item.cto-item {
  background: url('../../assets/img/course/bigdata/vip3.png') no-repeat center
    center;
  background-size: 100% 100%;
}
.framework-item-box .framework-item .price {
  color: #fd553a;
  font-size: 36px;
  font-weight: bold;
  margin-top: 30px;
  text-align: right;
  padding-right: 25px;
  box-sizing: border-box;
}
.framework-item-box .framework-item.vip-item .price {
  color: #314659;
}
.price-icon {
  font-size: 20px;
}
.framework-item-box .framework-item .item-desc-box {
  margin-top: 50px;
  line-height: 50px;
  padding: 0 30px;
}
.framework-item-box .framework-item .item-desc-box .item-desc-title {
  font-size: 28px;
  font-weight: 500;
  color: #314659;
  display: flex;
  align-items: center;
  justify-content: center;
}
.framework-item-box .framework-item .item-desc-box .item-desc-title .left-line {
  width: 16px;
  height: 3px;
  background-color: #ced7df;
  margin-right: 12px;
}
.framework-item-box
  .framework-item
  .item-desc-box
  .item-desc-title
  .right-line {
  width: 16px;
  height: 3px;
  background-color: #ced7df;
  margin-left: 12px;
}
.framework-item-box .framework-item .item-desc-box p {
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: #717682;
}
.framework-item-box .framework-item .button-group {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
.framework-item-box .framework-item .button-group .sign {
  width: 244px;
  height: 72px;
  border: 1px solid rgba(253, 85, 58, 1);
  border-radius: 4px;
  text-align: center;
  line-height: 72px;
  color: #fd553a;
  font-size: 26px;
  box-sizing: border-box;
  margin-bottom: 22px;
  cursor: pointer;
}

.framework-item-box .framework-item .button-group .advice {
  width: 244px;
  height: 72px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  text-align: center;
  line-height: 72px;
  color: #666666;
  font-size: 26px;
  box-sizing: border-box;
  cursor: pointer;
}
.framework-item-box .framework-item.active .button-group .sign {
  background-color: #fd553a;
  color: #fff;
}
.framework-item-box .framework-item.active .button-group .advice {
  border: 1px solid rgba(253, 85, 58, 1);
  color: #fd553a;
}
</style>

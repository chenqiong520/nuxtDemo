<template>
  <div class="partner">
    <!-- tabs -->
    <div class="tabs">
      <div
        :class="['tabs-item', {'on': index == currentTab}]"
        v-for="(item, index) in tabs"
        :key="index"
        @click="switchTab(index)"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- content -->
    <div class="content">
      <div class="img-wrap">
        <img src="../../assets/img/partner/partner-teacher.png" alt="">
      </div>
      <div class="text-wrap">
        <div class="synopsis">
          {{ displayContent.synopsis }}
        </div>
        <div class="desc">
          <div class="desc-title">
            你能得到什么？
          </div>
          <ul class="desc-item">
            <li>人脉拓展：丰富的人脉资源,咕泡独有线上线下交流会拓展人脉资源</li>
            <li>高额课酬：拥有高额的课酬费和营销提成,助你爱情面包双丰收</li>
            <li>个人品牌：十几万学员粉丝资源,全方位为讲师推广快速打响知名度</li>
          </ul>
        </div>
        <div class="desc">
          <div class="desc-title">
            我们的优势
          </div>
          <ul class="desc-item">
            <li>人脉拓展：每天数千人在线听课人数，咕泡学院IT互联网教育领导品牌</li>
            <li>丰富经验：拥有丰富线上教育经验和完善的课程体系</li>
            <li>讲师培训：传授独家线上授课模式，提高个人综合能力与竞争力</li>
            <li>专业制作：专业视频人员，提供剪辑、壳件包装等一流服务</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="bottom-bar">
      <div @click="toDetail">
        职位详情
      </div>
      <div @click="toJoin">
        申请加入
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
      // tabs
      tabs: [
        { id: 1, name: '咕泡讲师' },
        { id: 2, name: '流量主' },
        { id: 3, name: '城市合伙人' },
        { id: 4, name: '咕泡员工' }
      ],
      // 当前选中tab下标
      currentTab: 0,
      // 内容
      content: {},
      // 当前展示内容
      displayContent: {}
    }
  },

  mounted() {
    this.getPartnerDetail()
  },

  methods: {
    // 切换tab
    switchTab(index) {
      this.currentTab = index
    },

    // 获取合伙人数据
    async getPartnerDetail() {
      const res = await this.$axios.get(
        `${window.location.origin}/datas/partner/index.json`
      )
      const data = res.data.data
      this.context = data
      this.displayContent = data[0]
    },
    toDetail() {
      this.$router.push('/partner-job-descript')
    },
    toJoin() {
      this.$router.push('/partner-apply-join')
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  height: 88px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .tabs-item {
    height: 100%;
    width: 25%;
    text-align: center;
    line-height: 88px;
    font-size: 32px;
    color: #252525;
    font-weight: bold;
    position: relative;
  }
  .on {
    color: #fd553a;
    &::after {
      content: '';
      width: 126px;
      height: 6px;
      border-radius: 3px;
      background: #fd553a;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
.content {
  padding-bottom: 120px;
  .img-wrap {
    width: 100%;
    margin-top: 56px;
    display: flex;
    justify-content: center;
    img {
      width: 500px;
      height: 387px;
      display: block;
    }
  }
  .text-wrap {
    padding: 0 32px;
    .synopsis {
      font-size: 28px;
      color: #666;
      margin-top: 30px;
    }
    .desc {
      .desc-title {
        font-size: 36px;
        color: #252525;
        margin-top: 60px;
      }
      .desc-item {
        font-size: 28px;
        li {
          color: #666;
          margin-top: 20px;
          list-style-type: circle;
          list-style-position: inside;
        }
      }
    }
  }
}
.bottom-bar {
  width: 100%;
  height: 98px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  z-index: 999;
  display: flex;
  div {
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 98px;
    font-size: 32px;
    color: #252525;
    &:last-child {
      color: #fd553a;
      position: relative;
      &::after {
        content: '';
        width: 1px;
        height: 64px;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #e9e9e9;
      }
    }
  }
}
</style>

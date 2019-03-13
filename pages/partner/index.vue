<template>
  <div class="partner">
    <!-- tabs -->
    <div class="tabs">
      <div
        :class="['tabs-item', {'on': index == currentTab}]"
        v-for="(item, index) in tabs"
        :key="index"
        @click="switchTab(index)">
        {{item.name}}
      </div>
    </div>

    <!-- content -->
    <div class="content">
      <div class="img-wrap">
        <img src="../../assets/img/partner/partner-teacher.png" alt="">
      </div>
      <div class="text-wrap">
        <div class="synopsis">{{displayContent.synopsis}}</div>
        <div class="desc">
          <!-- <div class="desc-title">{{displayContent.descriptionOne.title}}</div> -->
          <!-- <ul class="desc-item">
            <li v-for="(item, index) in displayContent[descriptionOne.sub]" :key="index">{{item}}</li>
          </ul> -->
        </div>
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
      console.log(this.displayContent)
    }
  },

  mounted() {
    this.getPartnerDetail()
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
    color: #FD553A;
    &::after {
      content: '';
      width: 126px;
      height: 6px;
      border-radius: 3px;
      background: #FD553A;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
.content {
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
      color: #999;
      margin-top: 30px;
    }
    .desc {
      .desc-title {
        font-size: 36px;
        color: #252525;
      }
    }
  }
}
</style>

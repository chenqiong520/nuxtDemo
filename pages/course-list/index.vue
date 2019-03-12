<template>
  <div class="course-list">
    <div class="tabs">
      <div
        :class="['tabs-item', {'on': index == currentTab}]"
        v-for="(item, index) in tabs"
        :key="index"
        @click="switchTab(index)">
        {{item.name}}
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
        { id: 1, name: '热门课程' },
        { id: 2, name: '折扣专区' },
        { id: 3, name: '猜你喜欢' }
      ],
      // 当前选中tab下标
      currentTab: 0
    }
  },

  methods: {
    // 切换tab
    switchTab(index) {
      this.currentTab = index
    }
  }
}
</script>

<style lang="scss" scoped>
.course-list {
  .tabs {
    height: 88px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tabs-item {
      height: 100%;
      width: 126px;
      text-align: center;
      line-height: 88px;
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
}
</style>

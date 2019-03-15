<template>
  <div class="position">
    <div v-for="(c,index) in positionList" :key="index" class="position-category">
      <div @click="toggleStatus(index)" class="category-name">
        {{ c.categoryName }}
        <div :class="currentIndex === index ? 'active': ''" class="right">
          <i class="iconfont iconarrow-right-copy-copy-copy" />
        </div>
      </div>
      <ul v-show="currentIndex === index">
        <li v-for="(item,i) in c.list" :key="i" @click="toJobDescript(item)" class="item">
          {{ item.itemName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Position',
  layout: 'course',
  data() {
    return {
      currentIndex: 0,
      positionList: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      // 获取本地的json文件数据
      const response = await this.$axios.get(`/datas/partner/job.json`)
      this.positionList = response.data.data
    },
    toggleStatus(index) {
      this.currentIndex = index
    },
    toJobDescript(item) {
      this.$router.push({
        path: '/job-description',
        query: { itemNo: item.itemNo }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.position {
  padding: 0 30px;
  border-top: 1px solid #ececec;
  .position-category {
    .category-name {
      line-height: 94px;
      font-size: 30px;
      font-weight: 600;
      color: #252525;
      border-bottom: 1px solid #ececec;
      .right {
        float: right;
        transform: rotateZ(90deg);
        .iconfont {
          font-size: 32px;
          color: #252525;
          font-weight: bold;
        }
        &.active {
          transform: rotateZ(-90deg);
        }
      }
    }
    ul {
      margin-left: 60px;
    }
    .item {
      list-style: circle !important;
      font-size: 28px;
      font-weight: 400;
      color: #252525;
      line-height: 90px;
      border-bottom: 1px solid #ececec;
    }
  }
}
</style>

<template>
  <div class="position-detail">
    <div class="describe">
      <div v-for="(job, index) in jobDesc" :key="index">
        <h2 class="secondary-title">
          {{ job.name }}
        </h2>
        <ul v-for="(item, i) in job.list" :key="i">
          <li> {{ item.item }}</li>
        </ul>
      </div>

      <a target="#blank" class="apply-join" @click="toJoin">申请加入</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'course',
  data() {
    return {
      jobDesc: {},
      itemNo: this.$route.query.itemNo
    }
  },
  mounted() {
    this.getJob()
  },
  methods: {
    async getJob() {
      // 获取本地的json文件数据
      const response = await this.$axios.get(`/datas/partner/job.json`)
      const list = response.data.data
      list.forEach(e => {
        e.list.forEach(job => {
          if (this.itemNo === job.itemNo) {
            this.jobDesc = job.jobDesc
          }
        })
      })
    },
    toJoin() {
      this.$router.push('/partner-apply-join')
    }
  }
}
</script>

<style lang="scss" scoped>
.position-detail {
  padding: 0 30px;
  border-top: 1px solid #e9e9e9;

  .describe .secondary-title {
    margin: 41px 0;
    height: 15px;
    font-size: 36px;
    font-weight: 500;
    color: #252525;
    line-height: 36px;
  }

  .describe .apply-join {
    display: block;
    margin-top: 65px;
    border-top: 1px solid #e9e9e9;
    color: rgba(253, 85, 58, 1);
    font-size: 32px;
    height: 98px;
    line-height: 98px;
    background: rgba(255, 255, 255, 1);
    text-align: center;
  }

  .describe .apply-join:hover {
    cursor: pointer;
  }
  ul {
    margin-left: 35px;
  }

  ul > li {
    list-style: circle !important;
    list-style-position: outside;
    font-size: 28px;
    font-weight: 400;
    color: #666;
    line-height: 56px;
  }
}
</style>

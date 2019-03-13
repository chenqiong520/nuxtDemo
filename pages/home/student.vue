<template>
  <div class="student">
    <div v-for="(item, index) in studentList" :key="index" @click="toDetail(item)" class="student-item">
      <div class="student-flex">
        <div class="student-photo">
          <img :src="item.photoUrl">
        </div>
        <div class="student-info">
          <div class="student-no">
            {{ item.no }}
          </div>
          <div class="student-work">
            {{ item.work }}
          </div>
        </div>
        <div>
          <i class="iconfont iconarrow-right-copy-copy-copy" style="font-size:24px; color:#252525" />
        </div>
      </div>

      <div class="student-desc">
        {{ item.comment | addEllipsis(45) }}
      </div>
    </div>
    <div class="open-all" style="display: none">
      展开全部学员
    </div>
  </div>
</template>

<script>
export default {
  name: 'Student',

  data() {
    return {
      studentList: []
    }
  },

  mounted() {
    this.getStudents()
  },

  methods: {
    async getStudents() {
      // 获取本地的json文件数据
      const response = await this.$axios.get(`${window.location.href}/datas/home/student.json`)
      this.studentList = response.data.datas
    },
    toDetail(item) {
      this.$router.push({
        path: '/student-detail',
        query: { no: item.no }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.student {
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
}
</style>

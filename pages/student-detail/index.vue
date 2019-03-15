<template>
  <div class="student">
    <!-- 学员简介 -->
    <div class="student-name">
      <img :src="student.photoUrl" alt>
      <div>
        <div class="student-number">
          {{student.no}}
        </div>
        <div> {{student.work}}</div>
      </div>
    </div>

    <!-- 学员故事 -->
    <div class="student-story">
      <div class="title">
        <i class="iconfont iconstory" />
        <span>学员故事</span>
      </div>
      <div>{{student.desc}}</div>
    </div>

    <!-- 学员评价 -->
    <div class="student-story">
      <div class="title">
        <i class="iconfont iconstory" />
        <span>学员评价</span>
      </div>
      <div>{{student.comment}}</div>
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
      no: this.$route.query.no,
      student: {}
    }
  },
  mounted() {
    this.getStudent()
  },
  methods: {
    async getStudent() {
      // 获取本地的json文件数据
      const response = await this.$axios.get(`${window.location.origin}/datas/home/student.json`)
      const studentList = response.data.datas
      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].no === this.no) {
          this.student = studentList[i]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.student {
  padding: 30px;
  .student-name {
    width: 100%;
    height: 134px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-right: 27px;
    }
    .student-number {
      font-size: 30px;
      + div {
        height: 36px;
        padding: 0 6px;
        background: #fee9e5;
        color: #fd553a;
        font-size: 24px;
        margin-top: 10px;
      }
    }
  }
  .title {
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #252525;
    margin-bottom: 20px;
    .iconfont {
      position: relative;
      top: 4px;
      margin-right: 10px;
    }
    + div {
      font-size: 28px;
      color: #666;
      margin-bottom: 50px;
    }
  }
}
</style>

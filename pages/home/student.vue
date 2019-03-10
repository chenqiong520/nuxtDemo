<template>
  <div class="student">
    <h1>学员评价：从本地json获取的数据</h1>
    {{students[0]}}
  </div>
</template>

<script>
export default {
  name: 'Student',

  data() {
    return {
      students: []
    }
  },

  methods: {
    async getStudents() {
      // 获取本地的json文件数据
      const response = await this.$axios.get(
        `${window.location.href}/datas/home/student.json`
      )
      this.students = response.data.datas
    }
  },

  mounted() {
    this.getStudents()
  }
}
</script>

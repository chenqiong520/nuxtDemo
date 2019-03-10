<template>
  <div class="teacher">
    <h1>老师列表：从服务器请求获取的数据</h1>
    {{teachers[0]}}
  </div>
</template>

<script>
export default {
  name: 'Teacher',

  data() {
    return {
      teachers: []
    }
  },

  methods: {
    async getTeachers() {
      // 通过服务器接口获取数据
      const response = await this.$axios.get(`wwwapi/findTeacherTeam`)
      console.log(response)

      this.teachers = response.data.data
    }
  },

  mounted() {
    this.getTeachers()
  }
}
</script>

<template>
  <div class="teacher">
    <div class="teacher-name">
      <img :src="teacherImage" alt="">
      <div>{{teacherName}}</div>
    </div>
    <div class="teacher-description">{{teacherDescription}}</div>
  </div>
</template>

<script>
import CourseList from '~/components/CourseList.vue'

export default {
  name: 'TeacherDetail',

  layout(context) {
    return 'course'
  },

  components: {
    CourseList
  },

  data() {
    return {
      teacherImage: '',
      teacherName: '',
      teacherDescription: ''
    }
  },

  mounted() {
    const { img, name, resume } = this.$route.params
    this.teacherImage = img
    this.teacherName = name
    this.teacherDescription = resume
  }
}
</script>

<style lang="scss" scoped>
.teacher {
  padding-top: 40px;
  .teacher-name {
    display: flex;
    align-items: center;
    padding: 0 30px;
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }
    div {
      color: #252525;
      font-size: 36px;
      margin-left: 20px;
    }
  }
  .teacher-description {
    padding: 0 30px;
    font-size: 28px;
    color: #666;
    margin-top: 24px;
    text-align: justify;
  }
}
</style>

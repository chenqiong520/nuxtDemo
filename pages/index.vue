<template>
  <div class="home">
    <banner/>
    <student/>
    <teacher/>
  </div>
</template>

<script>
import Banner from './home/banner'
import Student from './home/student'
import Teacher from './home/teacher'

export default {
  name: 'Index',

  components: {
    Banner,
    Student,
    Teacher
  }
}
</script>

<style scoped>
.home {
  padding: 0 30px;
}
</style>

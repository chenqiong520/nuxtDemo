<template>
  <div class="course-layout">
    <gp-header class="header"/>

    <main class="content">
      <nuxt/>
    </main>

    <course-footer/>
  </div>
</template>

<script>
import GpHeader from './home/header'
import CourseFooter from './course/footer'

export default {
  name: 'CourseLayout',

  components: {
    CourseFooter,
    GpHeader
  }
}
</script>

<style>
.course-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.course-layout .content {
  flex-grow: 1;
  overflow-y: auto;
}

.course-layout .footer {
  height: 96px;
  overflow: hidden;
}
</style>

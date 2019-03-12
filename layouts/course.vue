<template>
  <div class="course-layout">
    <gp-header class="header"/>

    <main class="content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import GpHeader from './home/header'

export default {
  name: 'CourseLayout',

  components: {
    GpHeader
  }
}
</script>

<style scoped>
.course-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.course-layout .header {
  height: 96px;
  overflow: hidden;
}

.course-layout .content {
  flex: 1;
  overflow-y: auto;
}
</style>

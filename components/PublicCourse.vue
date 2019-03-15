<template>
  <div>
    <div class="course-cont-wrapper" v-if="publicCourseList && publicCourseList.length > 0">
      <div v-for="(item, index) in publicCourseList" :key="index" class="item">
        <a :href="item.url">
          <div class="course-img">
            <img :src="item.coverImg">
            <div class="status-desc" style="display: none">
              直播中 <img src="@/assets/img/home/public/icon1.png">
            </div>
          </div>
          <div class="course-name">
            {{ item.courseName }}
          </div>
          <div class="course-teacher">
            {{ item.courseTeacher }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicCourse',
  layout: 'course',
  props: {
    publicCourseList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.course-cont-wrapper {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 334px;
    margin-bottom: 47px;
  }
}
.course-cont-wrapper .course-img {
  position: relative;
  width: 334px;
  height: 186px;
}
.course-cont-wrapper .course-img > img {
  width: 100%;
  height: 100%;
  background: rgba(77, 61, 238, 1);
  border-radius: 8px;
}
.course-cont-wrapper .course-img .status-desc {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 56px;
  background: rgba(31, 31, 31, 0.14);
  border-radius: 0px 0px 8px 8px;
  color: #fff;
  line-height: 56px;
  font-size: 24px;
  padding-left: 24px;
  box-sizing: border-box;
  img {
    width: 18px;
    margin-left: 8px;
  }
}

.course-cont-wrapper .course-name {
  line-height: 30px;
  font-size: 32px;
  font-weight: bold;
  color: rgba(37, 37, 37, 1);
  margin-top: 22px;
}
.course-cont-wrapper .course-teacher {
  font-size: 24px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
  margin-top: 14px;
}
</style>

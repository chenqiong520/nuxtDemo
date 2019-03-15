<template>
  <div class="hot-course">
    <div v-if="hotCourse.titleName" class="course-title-box clear">
      <div class="left">
        <div>
          <img :src="hotCourse.titleIcon">
          <span class="course-title">{{ hotCourse.titleName }}</span>
        </div>
        <div class="title-desc">{{ hotCourse.titleDesc }}</div>
      </div>
      <div class="right">
        <i
          @click="jump"
          class="iconfont iconarrow-right-copy-copy-copy"
          style="font-size:32px; color:#444"
        />
      </div>
    </div>
    <div class="course-cont-wrapper">
      <div
        v-for="(item, index) in hotCourse.courseList"
        :key="index"
        class="item"
        @click="onCourseClick(item)"
      >
        <div class="course-img">
          <img :src="item.coverImg">
          <div class="num status-desc">
            <span class="span1">
              <i class="iconfont iconread"/>
              {{ item.readNum }}
            </span>
            <span>
              <i class="iconfont iconcomment"/>
              {{ item.CommentNum }}
            </span>
          </div>
        </div>
        <div class="course-name">{{ item.courseName | addEllipsis(9) }}</div>
        <div class="price">{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotCourse',
  props: {
    hotCourse: {
      type: Object
    }
  },

  methods: {
    onCourseClick(course) {
      if (course && course.url) {
        window.open(course.url)
      }
    },

    jump() {
      this.$emit('jump', this.hotCourse)
    }
  }
}
</script>

<style scoped>
.clear:after {
  content: ' ';
  display: block;
  clear: both;
}
.hot-course .course-title-box {
  margin-top: 55px;
  display: flex;
  align-items: center;
}
.hot-course .course-title-box .left img {
  width: 34px;
  margin-right: 16px;
}
.hot-course .course-title-box .left .course-title {
  font-size: 36px;
  line-height: 36px;
  font-weight: bold;
  color: rgba(37, 37, 37, 1);
}
.hot-course .course-title-box .left .title-desc {
  margin-top: 16px;
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}

.hot-course .course-title-box .right {
  flex: 1;
  text-align: right;
}

.hot-course .course-cont-wrapper {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hot-course .course-cont-wrapper .item {
  margin-bottom: 40px;
  width: 334px;
}
.hot-course .course-cont-wrapper .course-img {
  position: relative;
  width: 334px;
  height: 186px;
}
.hot-course .course-cont-wrapper .course-img > img {
  width: 100%;
  height: 100%;
  background: rgba(77, 61, 238, 1);
  border-radius: 8px;
}
.hot-course .course-cont-wrapper .course-img .status-desc {
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
}
.hot-course .course-cont-wrapper .course-name {
  line-height: 30px;
  font-size: 32px;
  font-weight: bold;
  color: rgba(37, 37, 37, 1);
  margin-top: 22px;
}
.hot-course {
  margin-top: 69px;
}
.hot-course .price {
  margin-top: 22px;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
  color: rgba(253, 85, 58, 1);
}
.hot-course .num .span1 {
  display: inline-block;
  margin-right: 24px;
}
.hot-course .num .iconfont {
  font-size: 14px;
  margin-right: 5px;
}
</style>

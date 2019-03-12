<template>
  <div>
    
    <!-- 列表标题 -->
    <div class="course-list-title" v-if="showTitle">
      <div class="list-title-name">{{listName}}</div>
      <div class="list-title-all" v-if="showAll" @click="checkAll">
        <span>全部{{allCourse}}个</span>
        <i class="iconfont iconarrow-right-copy-copy-copy"></i>
      </div>
    </div>

    <!-- 列表 -->
    <div class="course-list">
      <div class="list-item" v-for="(item, index) in courseList" :key="index" @click="toDetail">
        <div class="image-container">
          <img :src="item.imageUrl" alt="">
          <div class="list-watched">
            <i class="iconfont iconwatched"></i>
            <span>{{item.watchedTimes}}</span>
          </div>
        </div>
        <div class="list-description">
          <div class="list-title">{{item.courseName | addEllipsis(20)}}</div>
          <div class="list-text">{{item.courseTeacher}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 列表标题
    listName: {
      type: String
    },
    // 全部课程
    allCourse: {
      type: Number,
      default: 0
    },
    // 是否显示列表标题
    showTitle: {
      type: Boolean,
      default: false
    },
    // 是否显示查看全部按钮
    showAll: {
      type: Boolean,
      default: true
    },
    // 课程列表
    courseList: {
      type: Array
    }
  },

  filters: {
    // 文字超出长度显示省略号
    addEllipsis(value, max) {
      if (!value) return ''
      if (value.length <= max) return value
      return value.slice(0, max) + '...'
    }
  },

  methods: {
    // 查看所有
    checkAll() {
      this.$emit('check-all')
    },

    // 跳转详情
    toDetail() {
      this.$router.push({ path: '/play', query: { isShort: 0, vid: '0320180808003', dataName: 'java' } })
    }
  }
}
</script>

<style scoped>
.course-list-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 32px;
  margin-bottom: 24px;
}
.course-list-title .list-title-name {
  font-size: 32px;
  font-weight: bold;
}
.course-list-title .list-title-all {
  font-size: 28px;
  color: #999;
  display: flex;
  align-items: center;
}
.course-list {
  padding: 0 32px;
}
.course-list .list-item {
  display: flex;
  margin-bottom: 40px;
}
.course-list .image-container {
  height: 134px;
  width: 240px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin-right: 32px;
}
.course-list .image-container img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.course-list .image-container .list-watched {
  width: 100%;
  height: 48px;
  background: rgba(31, 31, 31, .14);
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 24px;
}
.course-list .image-container .list-watched span {
  color: white;
}
.course-list .image-container .list-watched .iconfont {
  color: white;
  font-size: 10px;
  margin-right: 7px;
}
.course-list .list-description{
  width: 414px;
}
.course-list .list-description .list-title{
  font-size: 32px;
  font-weight: bold;
}
.course-list .list-description .list-text{
  font-size: 24px;
  color: #999;
  margin-top: 14px;
}
</style>

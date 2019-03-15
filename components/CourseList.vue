<template>
  <div :style="{'margin-top': marginTop}">
    <!-- 列表标题 -->
    <div class="course-list-title" v-if="showTitle">
      <div class="list-title-name">{{listName}}</div>
      <div class="list-title-all" v-if="showAll" @click="checkAll">
        <span>全部{{courseList.length}}个</span>
        <i class="iconfont iconarrow-right-copy-copy-copy"></i>
      </div>
    </div>

    <!-- 列表 -->
    <div class="course-list">
      <div class="list-item" v-for="(item, index) in courseList" :key="index" @click="toDetail(item.id)">
        <div class="image-container">
          <img :src="item.cover" alt>
          <div class="list-shadow">
            <div class="list-watched">
              <i class="iconfont iconwatched"></i>
              <span>{{item.playcount}}</span>
            </div>
            <div class="list-watched">
              <i class="iconfont iconcomment"></i>
              <span>{{item.comment}}</span>
            </div>
          </div>
        </div>
        <div class="list-description">
          <div class="list-title">{{item.title | addEllipsis(20)}}</div>
          <div class="list-text" v-if="showTeacherName">{{item.courseTeacher}}</div>
          <div class="list-price" v-else>
            ￥{{item.currentPrice}}
            <span v-if="showOriginalPrice">￥{{item.originalPrice}}</span>
          </div>
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
    },
    // 是否显示老师名字
    showTeacherName: {
      type: Boolean,
      default: true
    },
    // 是否显示原价
    showOriginalPrice: {
      type: Boolean,
      default: false
    },
    // 上边距
    marginTop: {
      type: String,
      default: '0px'
    },
    // 课程类型
    courseType: {
      type: String,
      default: 'java'
    },
    // 视频类型 0-精选视频 1-vip独家视频
    videoType: {
      type: Number
    }
  },

  methods: {
    // 查看所有
    checkAll() {
      this.$emit('check-all')
    },

    // 跳转详情
    toDetail(id) {
      console.log(id)
      this.$router.push({
        path: '/play',
        query: { id, courseType: this.$props.courseType, videoType: this.$props.videoType }
      })
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
  color: #252525;
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
.course-list .image-container .list-shadow {
  width: 100%;
  height: 48px;
  background: rgba(31, 31, 31, 0.14);
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 24px;
}
.course-list .image-container .list-watched {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.course-list .image-container .list-watched span {
  color: white;
}
.course-list .image-container .list-watched .iconfont {
  color: white;
  font-size: 10px;
  margin-right: 7px;
}
.iconcomment {
  position: relative;
  top: 2px;
}
.course-list .list-description {
  min-width: 0;
  flex: 1;
  color: #252525;
}
.course-list .list-description .list-title {
  font-size: 32px;
  color: #252525;
}
.course-list .list-description .list-text {
  font-size: 24px;
  color: #999;
  margin-top: 14px;
}
.course-list .list-description .list-price {
  font-size: 32px;
  color: #fd553a;
  margin-top: 10px;
  font-weight: bold;
}
.course-list .list-description .list-price span {
  font-size: 30px;
  padding-left: 8px;
  color: #999;
  font-weight: normal;
}
</style>

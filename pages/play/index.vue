<template>
  <div class="play">
    <video :src="courseDetail.url" class="video" controls autoplay></video>

    <div class="play-wrap">
      <!-- 课程信息 -->
      <div class="play-info">
        <div class="play-title">{{courseDetail.title}}</div>
        <div class="play-watched">
          <i class="iconfont iconwatched"></i>
          <span>{{courseDetail.playcount}}播放量</span>
        </div>
      </div>

      <!-- 学员评价 -->
      <div class="evaluation">
        <div class="evaluation-title">学员评论</div>
        <div class="evaluation-item" v-for="(item, index) in showeDevaluationList" :key="index">
          <div class="user">
            <div class="user-info">
              <img :src="item.photoURL" alt>
              <span>{{item.nickName}}</span>
            </div>
            <div class="stars">
              <i class="iconfont iconstar" v-for="(item, i) in item.star" :key="i"></i>
            </div>
          </div>
          <div class="evaluation-content">{{item.content}}</div>
          <div class="evaluation-time">
            <div>已上课{{item.duration}}时评论</div>
            <div>{{item.evaluateTime}}</div>
          </div>
        </div>
        <div class="show-more" v-if="isShowMore" @click="showMore">展开更多评价</div>
      </div>
    </div>
    
    <!-- 相关视频 -->
    <course-list
      show-title
      list-name="相关视频"
      :course-list="relativeVideo"
      :show-all="false"
      margin-top="60px">
    </course-list>
  </div>
</template>

<script>
import CourseList from '~/components/CourseList.vue'
export default {
  layout(context) {
    return 'course'
  },

  components: {
    CourseList
  },

  data() {
    return {
      // 所有评价列表
      evaluationList: [],
      // 开始展示的评价列表
      showeDevaluationList: [],
      // 是否展开更多
      isShowMore: true,
      // 相关视频
      relativeVideo: [
        {
          id: 0,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 1222,
          courseName:'咕泡学院人工智能发布会咕泡学院人工智能发布会咕泡学院人工智能发布会咕泡学院人工智能发布会',
          courseTeacher: '咕泡学院-Tom'
        },
        {
          id: 1,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 2222,
          courseName: '咕泡学院人工智能发布会',
          courseTeacher: '咕泡学院-Tom'
        },
        {
          id: 2,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 3222,
          courseName: '咕泡学院人工智能发布会',
          courseTeacher: '咕泡学院-Tom'
        },
        {
          id: 3,
          imageUrl: '../../assets/img/course/bigdata.png',
          watchedTimes: 4222,
          courseName: '咕泡学院人工智能发布会',
          courseTeacher: '咕泡学院-Tom'
        }
      ],
      // 视频详情
      courseDetail: {}
    }
  },

  methods: {
    // 获取本地的学生评价文件数据
    async getEvaluation() {
      const response = await this.$axios.get(
        `${window.location.origin}/datas/play/evaluation.json`
      )
      this.evaluationList = response.data.datas
      this.showeDevaluationList = response.data.datas.slice(0, 5)
    },

    // 查看更多
    showMore() {
      this.showeDevaluationList = this.evaluationList
      this.isShowMore = false
    },

    // 获取课程详情
    async getVideoDetail() {
      const query = this.$route.query
      const res = await this.$axios.get(
        `${window.location.origin}/datas/resourse/${query.courseType}.json`
      )
      const resData = res.data.data
      let courseList = query.videoType == 0 ? resData.featuredVideos.data : resData.vipVideos.data
      let filterResult = courseList.filter(ele => ele.id == query.id)
      this.courseDetail = filterResult[0]
      console.log(this.courseDetail)
    }
  },

  mounted() {
    this.getEvaluation()
    this.getVideoDetail()
  }
}
</script>

<style scoped>
.play .video {
  width: 100%;
  height: 376px;
  background: linear-gradient(-35deg, rgba(28, 30, 31, 1), rgba(45, 48, 49, 1));
}
.play .play-wrap {
  padding: 0 32px;
}
.play .play-info {
  padding-bottom: 40px;
  border-bottom: 1px solid #ececec;
  margin-bottom: 40px;
}
.play .play-title {
  font-size: 40px;
  margin-top: 30px;
}
.play .play-watched {
  display: flex;
  align-items: center;
  font-size: 26px;
  color: #666;
  margin-top: 20px;
}
.play .play-watched .iconfont {
  font-size: 10px;
  margin-right: 8px;
}
.play .evaluation-title {
  font-size: 36px;
  font-weight: bold;
  color: #252525;
}
.play .evaluation-item {
  padding: 30px 0;
  border-bottom: 1px solid #ececec;
}
.play .evaluation-item:last-child {
  border: 0;
}
.play .user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
}
.play .user-info {
  display: flex;
  align-items: center;
}
.play .user-info img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 20px;
}
.play .stars {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 168px;
}
.play .stars .iconfont {
  color: #fea835;
  font-size: 20px;
  margin-left: 17px;
}
.play .stars .iconfont:first-child {
  margin-left: 0;
}
.play .evaluation-content {
  font-size: 28px;
  color: #252525;
  margin: 24px 0 20px;
}
.play .evaluation-time {
  font-size: 24px;
  color: #999;
  display: flex;
  justify-content: space-between;
}
.play .show-more {
  width: 100%;
  height: 72px;
  background: #F5F5F5;
  color: #666;
  font-size: 26px;
  text-align: center;
  line-height: 72px;
}
</style>

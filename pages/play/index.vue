<template>
  <div class="play">
    <video :src="videoUrl" class="video" controls autoplay></video>

    <div class="play-wrap">
      <!-- 课程信息 -->
      <div class="play-info">
        <div class="play-title">有没有信心和勇气接手一个烂尾项目</div>
        <div class="play-watched">
          <i class="iconfont iconwatched"></i>
          <span>2345播放量</span>
        </div>
      </div>

      <!-- 学员评价 -->
      <div class="evaluation">
        <div class="evaluation-title">学员评论</div>
        <div class="evaluation-item" v-for="(item, index) in evaluationList" :key="index">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'course'
  },

  data() {
    return {
      // 视频url
      videoUrl:
        'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      // 评价列表
      evaluationList: []
    }
  },

  methods: {
    async getEvaluation() {
      // 获取本地的json文件数据
      const response = await this.$axios.get(
        `${window.location.origin}/datas/play/evaluation.json`
      )
      console.log(response)
      this.evaluationList = response.data.datas
    }
  },

  mounted() {
    this.getEvaluation()
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
</style>

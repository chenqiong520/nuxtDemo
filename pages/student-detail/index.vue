<template>
  <div class="student">
    <!-- 学员简介 -->
    <div class="student-name">
      <img src="../../assets/img/course/intelligence.png" alt>
      <div>
        <div class="student-number">GP10326</div>
        <div>阿里高级开发工程师（薪资38K/月)</div>
      </div>
    </div>

    <!-- 学员故事 -->
    <div class="student-story">
      <div class="title">
        <i class="iconfont iconstory"></i>
        <span>学员故事</span>
      </div>
      <div>在技术学习得道路上感到迷茫得时候，一个偶然得机会让我遇到了咕泡学院</div>
    </div>

    <!-- 学员评价 -->
    <div class="student-story">
      <div class="title">
        <i class="iconfont iconstory"></i>
        <span>学员评价</span>
      </div>
      <div>在咕泡的一年多时间里面，不仅仅学到了技术交到了朋友建立了圈子，更是收获了信心和能量，让我现在在阿里工作游刃有余，感谢咕泡感谢默默付出得导师们</div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'course'
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.student {
  padding: 30px;
  .student-name {
    width: 100%;
    height: 134px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-right: 27px;
    }
    .student-number {
      font-size: 30px;
      + div {
        height: 36px;
        padding: 0 6px;
        background: #fee9e5;
        color: #fd553a;
        font-size: 24px;
        margin-top: 10px;
      }
    }
  }
  .title {
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #252525;
    margin-bottom: 20px;
    .iconfont {
      position: relative;
      top: 4px;
      margin-right: 10px;
    }
    + div {
      font-size: 28px;
      color: #666;
      margin-bottom: 50px;
    }
  }
}
</style>

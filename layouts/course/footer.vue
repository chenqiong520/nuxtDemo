<template>
  <footer class="course-footer">
    <div class="tabbar">
      <i class="iconfont iconkefu"></i>
      <span class="title">客服</span>
    </div>
    <div class="tabbar" @click="showGroupPopper">
      <i class="iconfont icongroup"></i>
      <span class="title">交流群</span>
    </div>
    <div class="tabbar" @click="showWechatPopper">
      <i class="iconfont iconchat01"></i>
      <span class="title">公众号</span>
    </div>

    <div class="tencent">
      <div class="button">前往腾讯课堂听课</div>
    </div>
    
    <slot name="header"></slot>
    <!-- 群 -->
    <div v-show="isGroupPopperShow" @click="showGroupPopper" class="popper group">
      <div class="content">
        <p>添加qq群加入JAVA架构师交流群</p>
        <p>添加qq群加入JAVA架构师交流群</p>
        <p>添加qq群加入JAVA架构师交流群</p>
      </div>
    </div>

    <!-- 公众号 -->
    <div v-show="isWechatPopperShow" @click="showWechatPopper" class="popper wechat">
      <div class="content"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CourseFooter',

  data() {
    return {
      isGroupPopperShow: false,
      isWechatPopperShow: false
    }
  },

  methods: {
    showWechatPopper() {
      this.isWechatPopperShow = !this.isWechatPopperShow
    },

    showGroupPopper() {
      this.isGroupPopperShow = !this.isGroupPopperShow
    }
  }
}
</script>

<style scoped>
footer.course-footer {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border-top: 1px #e9e9e9 solid;
}

footer.course-footer .tencent {
  height: 100%;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer.course-footer .tencent > .button {
  font-weight: 500;
  text-align: center;
  background: rgba(253, 85, 58, 1);
  color: #fff;
  padding: 15px;
  border-radius: 5px;
}

footer.course-footer .tabbar {
  height: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}

footer.course-footer .tabbar .title {
  font-size: 25px;
}

footer.course-footer .tabbar .iconfont {
  font-size: 40px;
}

footer.course-footer .tabbar.active {
  color: rgba(253, 85, 58, 1);
}

/* 弹出层 */
.course-footer .popper {
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10080;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popper .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 25px;
  background: #fff;
  border-radius: 10px;
}

/* 群交流 */

/* 公众号 */
</style>

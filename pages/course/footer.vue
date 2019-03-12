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
      <div class="button" @click="toTencent">前往腾讯课堂听课</div>
    </div>

    <!-- 群交流 -->
    <div v-show="isGroupPopperShow" @click="showGroupPopper" class="popper">
      <div class="body group">
        <p class="title">添加qq群加入JAVA架构师交流群</p>
        <p class="tips">打开QQ - 加好友/群 - 粘贴QQ群号</p>
        <div class="button" @click="copyNumber">复制QQ群号</div>
        <p class="qq-number">QQ群号：96106784</p>
      </div>
    </div>

    <!-- 公众号 -->
    <div v-show="isWechatPopperShow" @click="showWechatPopper" class="popper">
      <div class="body wechat">
        <img class="qrcode" src="@/assets/img/qrcode/public-number.png">
        <p class="title">添加qq群加入JAVA架构师交流群</p>
        <p class="tips">打开微信 - 扫一扫</p>
        <div class="button" @click="saveImg">保存图片</div>
      </div>
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
    /**
     * 跳转到腾讯课堂
     */
    toTencent() {},

    /**
     * 复制qq号
     */
    copyNumber() {},

    /**
     * 保存图片
     */
    saveImg() {},

    /**
     * 微信公众号弹框
     */
    showWechatPopper() {
      this.isWechatPopperShow = !this.isWechatPopperShow
    },

    /**
     * QQ群弹框
     */
    showGroupPopper() {
      this.isGroupPopperShow = !this.isGroupPopperShow
    }
  }
}
</script>

<style lang="scss" scoped>
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

  .tencent {
    height: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .button {
      font-weight: 500;
      text-align: center;
      background: rgba(253, 85, 58, 1);
      color: #fff;
      padding: 15px;
      border-radius: 5px;
    }
  }
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

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: #fff;
    border-radius: 10px;
  }

  /* 群交流 */
  .group {
    .title {
      font-size: 28px;
      font-weight: 500;
    }

    .tips {
      margin-top: 15px;
      color: rgba(0, 0, 0, 0.7);
    }

    .button {
      margin-top: 15px;
      width: 300px;
      font-weight: 500;
      text-align: center;
      background: rgba(253, 85, 58, 1);
      color: #fff;
      padding: 15px;
      border-radius: 5px;
    }

    .qq-number {
      margin-top: 15px;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  /* 微信公众号 */
  .wechat {
    .qrcode {
      margin-top: 15px;
      color: rgba(0, 0, 0, 0.7);
    }

    .title {
      margin-top: 15px;
      font-size: 28px;
      font-weight: 500;
    }

    .tips {
      margin-top: 15px;
      color: rgba(0, 0, 0, 0.7);
    }

    .button {
      margin-top: 15px;
      width: 300px;
      font-weight: 500;
      text-align: center;
      background: rgba(253, 85, 58, 1);
      color: #fff;
      padding: 15px;
      border-radius: 5px;
    }
  }
}
</style>

<template>
  <footer class="course-footer">
    <div class="tabbar" @click="toKeFu">
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
      <div class="body group" @click.stop>
        <p class="title">添加QQ群加入JAVA架构师交流群</p>
        <p class="tips">打开QQ - 加好友/群 - 粘贴QQ群号</p>
        <div
          @click.stop
          class="button"
          v-clipboard:copy="QQGroupNumber"
          v-clipboard:success="onCopy"
        >复制QQ群号</div>
        <p class="qq-number">QQ群号：{{QQGroupNumber}}</p>
        <p class="operate-tips" v-show="showTips">{{tips}}</p>
      </div>
    </div>

    <!-- 公众号 -->
    <div v-show="isWechatPopperShow" @click="showWechatPopper" class="popper">
      <div class="body wechat" @click.stop>
        <img class="qrcode" :src="qrcodeSrc">
        <p class="title">{{qrcodeTitle}}</p>
        <p class="tips">打开微信 - 扫一扫</p>
        <div class="button" @click.stop="saveImg">保存图片</div>
        <p class="operate-tips" v-show="showTips">{{tips}}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CourseFooter',

  props: {
    //QQ群提示
    QQGroupTitle: {
      default: String,
      required: true
    },
    // QQ号码
    QQGroupNumber: {
      default: String,
      required: true
    },
    // 微信二维码提示
    qrcodeTitle: {
      default: String,
      required: true
    },
    //关注二维码
    qrcodeSrc: {
      required: true
    },
    //跳转至腾讯课堂地址
    toTencentUrl: {
      default: String,
      required: true
    }
  },

  data() {
    return {
      isGroupPopperShow: false,
      isWechatPopperShow: false,

      showTips: false,
      tips: ''
    }
  },

  methods: {
    /**
     * 跳转到客服
     */
    toKeFu() {
      window.open('https://q.url.cn/cdh5jl?_type=wpa&qidian=true')
    },

    /**
     * 跳转到腾讯课堂
     */
    toTencent() {
      window.open(this.toTencentUrl || '')
    },

    /**
     * 复制qq号
     */
    onCopy() {
      this.tips = '复制成功!'
      this.showTips = true
    },

    /**
     * 保存图片
     */
    saveImg() {
      this.tips = '保存成功!'
      this.showTips = true
    },

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
      this.showTips = false
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
      width: 299px;
      height: 80px;
      margin-right: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(253, 85, 58, 1);
      border-radius: 6px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
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
      font-size: 32px;
      font-weight: 500;
      color: rgba(37, 37, 37, 1);
    }

    .tips {
      margin-top: 21px;
      font-size: 28px;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
    }

    .button {
      margin-top: 39px;
      width: 540px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(253, 85, 58, 1);
      border-radius: 8px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    .qq-number {
      margin-top: 23px;
      font-size: 24px;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
    }
  }

  /* 微信公众号 */
  .wechat {
    .qrcode {
      width: 470px;
      color: rgba(0, 0, 0, 0.7);
    }

    .title {
      font-size: 32px;
      font-weight: 500;
      color: rgba(37, 37, 37, 1);
    }

    .tips {
      font-size: 28px;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      line-height: 64px;
    }

    .button {
      margin-top: 35px;
      width: 540px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(253, 85, 58, 1);
      border-radius: 8px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }

  .operate-tips {
    font-size: 24px;
    font-weight: 500;
    color: red;
  }
}
</style>

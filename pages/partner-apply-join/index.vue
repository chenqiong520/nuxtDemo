<template>
  <div class="join">
    <div class="input-item">
      <div>申请职位</div>
      <div class="select">
        <span>大数据讲师</span>
        <i class="iconfont iconright"></i>
      </div>
    </div>
    <div class="input-item">
      <div>真实姓名</div>
      <input type="text" placeholder="本人真实姓名">
    </div>
    <div class="input-item">
      <div>联系电话</div>
      <input type="number" placeholder="本人联系电话">
    </div>
    <div class="input-item">
      <div>QQ号码</div>
      <input type="number" placeholder="腾讯QQ号码">
    </div>
    <div class="input-item">
      <div>所在地</div>
      <input type="text" placeholder="所在地区">
    </div>
    <div class="input-item borde-none">
      <div>个人优势</div>
    </div>
    <textarea placeholder="内容填写" class="textarea"></textarea>
    <div class="tips">
      <div>简历附件可投递至邮箱 hr@gupaoedu.com</div>
      <div>复制</div>
    </div>
    <div class="submit-btn">提交申请</div>

    <!-- 选择职位modal -->
    <div class="shadow">
      <div class="modal">
        <div class="modal-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'course'
  },
  
  data () {
    return {
      // 职位选项
      positionOptions: [
        { id: 1, name: 'Java高级讲师' },
        { id: 2, name: '大数据讲师' },
        { id: 3, name: '人工智能讲师' },
        { id: 4, name: '软件测试讲师' },
        { id: 5, name: 'Web前端讲师' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.join {
  padding: 0 32px;
  .input-item {
    height: 110px;
    border-bottom: 1px solid #ECECEC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 32px;
    color: #252525;
    input {
      text-align: right;
      font-size: 32px;
      border: 0;
      outline: 0;
    }
  }
  .borde-none {
    border: 0;
  }
  .textarea {
    font-size: 32px;
    border: 0;
    outline: 0;
    width: 100%;
    height: 100px;
  }
  .tips {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 26px;
    color: #999;
    & div:last-child {
      width: 72px;
      height: 40px;
      border: 1px solid #FA5439;
      text-align: center;
      line-height: 40px;
      font-size: 26px;
      border-radius: 4px;
      color: #FA5439;
    }
  }
  .submit-btn {
    height: 98px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 98px;
    color: #FD553A;
    font-size: 32px;
    border-top: 1px solid #e9e9e9;
  }
  .shadow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 999;
    .modal {
      width: 500px;
      height: 600px;
      border-radius: 8px;
      background: white;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      overflow-y: scroll;
      .modal-item {
        height: 120px;
      }
    }
  }
}
</style>

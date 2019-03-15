<template>
  <div class="join">
    <div class="input-item" @click="isShowPositionModal = true">
      <div>申请职位</div>
      <div class="select">
        <span>{{selectedPosition}}</span>
        <i class="iconfont iconright"></i>
      </div>
    </div>
    <div class="input-item">
      <div>真实姓名</div>
      <input type="text" placeholder="本人真实姓名" v-model="userName">
    </div>
    <div class="input-item">
      <div>联系电话</div>
      <input type="number" placeholder="本人联系电话" v-model="userTel">
    </div>
    <div class="input-item">
      <div>QQ号码</div>
      <input type="number" placeholder="腾讯QQ号码"  v-model="userQQ">
    </div>
    <div class="input-item" @click="showAreaModal">
      <div>所在地</div>
      <div class="select">
        <span v-if="userCity">{{userProvince + '/' + userCity}}</span>
        <span v-else>选择省市</span>
        <i class="iconfont iconright"></i>
      </div>
    </div>
    <div class="input-item borde-none">
      <div>个人优势</div>
    </div>
    <textarea placeholder="内容填写" class="textarea" v-model="userResume"></textarea>
    <div class="tips">
      <div>简历附件可投递至邮箱 hr@gupaoedu.com</div>
      <div
        v-clipboard:copy="email"
        v-clipboard:success="onCopy">复制
      </div>
    </div>
    <div class="submit-btn" @click="submitForm">提交申请</div>

    <!-- 选择职位modal -->
    <div class="shadow" v-show="isShowPositionModal">
      <div class="modal">
        <div
          class="modal-item"
          v-for="(item, index) in positionOptions"
          :key="index"
          @click="choosePosition(item.name)">
            {{item.name}}
            <img src="../../assets/img/home/partner/selected.png" v-if="item.name == selectedPosition">
        </div>
      </div>
    </div>

    <!-- 选择省市modal -->
    <div class="shadow" v-show="isShowAreaModal">
      <div class="modal" ref="areaModal">
        <div
          class="modal-item"
          v-for="(item, index) in currentAreaList"
          :key="index"
          @click="chooseArea(item)">
            {{item.label}}
            <img src="../../assets/img/home/partner/selected.png" v-if="item.label == userProvince">
        </div>
      </div>
    </div>

    <div class="tips-modal" v-if="isShowSubmitModal">提交成功</div>
    <div class="tips-modal" v-if="isShowPassModal">请填写完整</div>
    <div class="tips-modal" v-if="isCopy">复制成功</div>
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
      ],
      // 是否显示职位弹窗
      isShowPositionModal: false,
      // 当前选择的职位
      selectedPosition: 'Java高级讲师',
      // 姓名
      userName: '',
      // 电话
      userTel: '',
      // QQ
      userQQ: '',
      // 个人优势
      userResume: '',
      // 省份
      userProvince: '',
      // 城市
      userCity: '',
      // 省市列表
      areaList: [],
      // 当前显示的省市列表
      currentAreaList: [],
      // 是否显示省市弹窗
      isShowAreaModal: false,
      // 当前选择的是省还是市 1-省 0-市
      isProvince: 1,
      // 是否显示提交成功弹窗
      isShowSubmitModal: false,
      // 验证不通过弹窗
      isShowPassModal: false,
      // 邮箱
      email: 'hr@gupaoedu.com',
      // 复制成功
      isCopy: false
    }
  },

  methods: {
    // 选择职位
    choosePosition(name) {
      this.selectedPosition = name
      this.isShowPositionModal = false
    },

    // 获取本地省市json
    async getAreaInfo() {
      const res = await this.$axios.get(`${window.location.origin}/datas/partner/city.json`)
      console.log(res.data.data)
      const data = res.data.data
      this.areaList = data
      this.currentAreaList = data
    },

    // 显示选择地区弹窗
    showAreaModal() {
      this.isShowAreaModal = true
      this.userCity = ''
    },

    // 选择地区
    chooseArea(item) {
      if (this.isProvince) {
        if (item.children) {
          this.userProvince = item.label
          this.currentAreaList = item.children
          this.isProvince = 0
          this.$refs.areaModal.scrollTop = 0
        }
      } else {
        this.userCity = item.label
        this.isShowAreaModal = false
        this.currentAreaList = this.areaList
        this.isProvince = 1
      }
    },

    // 提交表单
    async submitForm() {
      if (!this.userName || !this.userTel || !this.userProvince || !this.userCity || !this.userResume) {
        this.isShowPassModal = true
        setTimeout(() => {
          this.isShowPassModal = false
        }, 2000)
        return
      }
      let form = {
        course: this.selectedPosition,
        name: this.userName,
        phone: this.userTel,
        city: `${this.userProvince}/${this.userCity}`,
        qq: this.userQQ,
        intro: this.userResume
      }
      let formData = new FormData()
      for (let key in form) {
        formData.append(key, form[key])
      }
      const res = await this.$axios.post('http://192.168.8.122/manageapi/wwwapi/addTeacherApply', formData)
      if (res.data.success) {
        this.isShowSubmitModal = true
        setTimeout(() => {
          this.isShowSubmitModal = false
        }, 2000)
      }
    },

    // 复制成功
    onCopy() {
      this.isCopy = true
        setTimeout(() => {
          this.isCopy = false
        }, 2000)
    }
  },

  mounted() {
    this.getAreaInfo()
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
        border-bottom: 1px solid #ECECEC;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 32px;
        color: #252525;
        padding: 0 20px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  .tips-modal {
    width: 200px;
    height: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(0, 0, 0, .4);
    z-index: 999;
    border-radius: 6px;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 100px;
  }
}
</style>

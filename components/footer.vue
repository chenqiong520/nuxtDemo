<template>
  <footer class="v-footer">
    <div>首页</div>
    <div>学院</div>
    <div>资源库</div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VFooter',

  data() {
    return {
      changeShowBool1: false,
      changeShowBool2: false,
      changeShowBool3: false,
      changeShowBool4: false
    }
  },
  computed: {
    ...mapState(['headProdNav', 'headNewsNav'])
  },
  methods: {
    changeShow1() {
      this.changeShowBool1 = !this.changeShowBool1
      this.changeShowBool2 = false
      this.changeShowBool3 = false
      this.changeShowBool4 = false
    },
    changeShow2() {
      this.changeShowBool2 = !this.changeShowBool2
      this.changeShowBool1 = false
      this.changeShowBool3 = false
      this.changeShowBool4 = false
    },
    changeShow3() {
      this.changeShowBool3 = !this.changeShowBool3
      this.changeShowBool2 = false
      this.changeShowBool1 = false
      this.changeShowBool4 = false
    },
    changeShow4() {
      this.changeShowBool4 = !this.changeShowBool4
      this.changeShowBool2 = false
      this.changeShowBool3 = false
      this.changeShowBool1 = false
    }
  }
}
</script>

<style scoped>
footer.v-footer {
  box-sizing: border-box;
  width: 100%;
  background-color: #3e3f43;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-top: 1px solid gray;
}
</style>

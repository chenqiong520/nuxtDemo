<template>
  <div class="home">
    <banner />    
  </div>
</template>

<script>
import Banner from './home/banner'
export default {
  name: 'Index',

  components:{
    Banner
  }
}
</script>

<style scoped>
.home {
  padding: 0 30px;
}
</style>

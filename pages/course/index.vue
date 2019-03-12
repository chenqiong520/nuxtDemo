<template>
  <div class="course">
    <div class="one-column">
      <nuxt-link class="img-container java" to="course/java">
        <h1 class="title">JAVA架构师学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>

    <div class="one-column">
      <nuxt-link class="img-container intelligence" to="course/intelligence">
        <h1 class="title">人工智能学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>

    <div class="two-column">
      <nuxt-link class="img-container block" to="course/block">
        <h1 class="title">区块链学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
      <div class="gutter"></div>
      <nuxt-link class="img-container web" to="course/web">
        <h1 class="title">Web前端学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>

    <div class="two-column">
      <nuxt-link class="img-container test" to="course/test">
        <h1 class="title">软件测试学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
      <div class="gutter"></div>
      <nuxt-link class="img-container bigdata" to="course/bigdata">
        <h1 class="title">大数据学院</h1>
        <h3 class="count">97541人已学</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',

  layout(context) {
    return 'home'
  }
}
</script>

<style scoped>
.course {
  margin: 0 33px;
}

.course > div {
  margin-bottom: 18px;
}

.course .img-container {
  height: 198px;
  border-radius: 12px;
  overflow: hidden;
}

.course .two-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.course .two-column .img-container {
  flex: auto;
  width: 50%;
  /* width:40%; */
}

.img-container.java {
  background: url(../../assets/img/course/java.png);
  background-size: cover;
}

.img-container.intelligence {
  background: url(../../assets/img/course/block.png);
  background-size: cover;
}

.img-container.block {
  background: url(../../assets/img/course/intelligence.png);
  background-size: cover;
}

.img-container.web {
  background: url(../../assets/img/course/web.png);
  background-size: cover;
}

.img-container.test {
  background: url(../../assets/img/course/test.png);
  background-size: cover;
}

.img-container.bigdata {
  background: url(../../assets/img/course/bigdata.png);
  background-size: cover;
}

.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.img-container .title {
  font-size: 36px;
}

.img-container .count {
  display: block;
  padding: 5px 15px;
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

.gutter {
  height: 100%;
  width: 20px;
}
</style>

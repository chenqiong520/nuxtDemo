<template>
  <div class="home-layout">
    <gp-header class="header"/>

    <main class="content">
      <nuxt/>
    </main>

    <gp-footer class="footer"/>
  </div>
</template>

<script>
import GpHeader from './home/header'
import GpFooter from './home/footer'

export default {
  name: 'HomeLayout',

  components: {
    GpHeader,
    GpFooter
  }
}
</script>

<style>
.home-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.home-layout .header {
  height: 96px;
  overflow: hidden;
}

.home-layout .content {
  flex: 1;
  overflow-y: auto;
}

.home-layout .footer {
  height: 96px;
  overflow: hidden;
}
</style>

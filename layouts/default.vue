<template>
  <div class="layout">
    <gp-header class="header"/>

    <main class="content">
      <nuxt/>
    </main>

    <gp-footer class="footer"/>
  </div>
</template>

<script>
import GpHeader from './header'
import GpFooter from './footer'

export default {
  name: 'Layout',

  components: {
    GpHeader,
    GpFooter
  }
}
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.header {
  height: 96px;
  overflow: hidden;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
}

.footer {
  height: 96px;
  overflow: hidden;
}
</style>

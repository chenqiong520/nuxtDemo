<template>
  <div class="layout">
    <v-header class="header" />

    <main class="content">
      <nuxt />
    </main>

    <v-footer class="footer" />
  </div>
</template>

<script>
import VHeader from '../components/header'
import VFooter from '../components/footer'

export default {
  components: {
    VHeader,
    VFooter
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

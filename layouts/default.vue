<template>
  <div class="default-layout">

    <main class="content">
      <nuxt/>
    </main>

  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',

}
</script>

<style>
.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

</style>

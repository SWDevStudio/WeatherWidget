<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.push('/')
  }
}
</script>
<style lang="stylus">
#app {
  max-width 280px
  margin-top: 25px
  margin-left: 25px
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
   async beforeCreate() {
      if (!this.$store.state.cities.length) {
        const {data} = await this.axios.get('http://ip-api.com/json/')
        this.$store.commit('addCity', data.city)
      }
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

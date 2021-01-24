<template>
  <div class="home">
    <weather-widget/>
  </div>
</template>

<script>

import WeatherWidget from "@/components/WeatherWidget";

export default {
  name: 'index',
  components: {
    WeatherWidget
  },
  async created() {
    const {data} = await this.$sendRequest({
      params: {
        q: 'Moscow'
      }
    })
    console.log(data)
  }
}
</script>
<style lang="stylus">

</style>

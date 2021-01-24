<template>
  <div class="home">
    <weather-widget
      :info="info"
      class="home__widget"
    />
  </div>
</template>

<script>

import WeatherWidget from "@/components/WeatherWidget";

export default {
  name: 'index',
  components: {
    WeatherWidget
  },
  data: () => ({ info: {} }),
  async created() {
    const {data} = await this.$sendRequest({
      params: {
        q: 'Москва'
      }
    })
    this.info = data
  },
}
</script>
<style lang="stylus">
.home {
  display flex
  max-width 280px
  margin-top: 25px
  margin-left: 25px
  &__widget {
    border 1px solid black
    flex 1 1 auto
  }
}
</style>

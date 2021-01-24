<template>
  <div class="widgets">
    <weather-widget
      v-for="(item, key) in showWidgets"
      :key="key"
      :info="item"
      class="widgets__widget"
    />
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget";

export default {
  name: 'widgets',
  components: {
    WeatherWidget
  },
  data: () => ({
    showWidgets: []
  }),
  async created() {
    for (const city of this.$store.state.cities) {
      const {data} = await this.$sendRequest({
        params: {
          q: city
        }
      })
      this.showWidgets.push(data)
    }
  },
}
</script>
<style lang="stylus">
.widgets {
  max-width 280px
  margin-top: 25px
  margin-left: 25px

  &__widget {
    border 1px solid black
    width: 100%
    &:not(:first-child) {
      margin-top: 15px
    }
  }
}
</style>

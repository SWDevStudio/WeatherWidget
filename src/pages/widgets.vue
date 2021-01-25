<template>
  <div class="widgets">
    <router-link
      to="/options"
      class="widgets__link"
    >
      <font-awesome-icon icon="cog"/>
    </router-link>
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
  width 100%
  position relative

  &__link {
    position: absolute
    top 3px
    right 0
  }

  &__widget {
    width: 100%

    &:not(:first-child) {
      margin-top: 15px
    }
  }
}
</style>

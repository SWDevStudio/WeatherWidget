<template>
  <div class="widget"
    v-if="Object.keys(info).length !== 0"
  >
    <div class="widget__name">
      {{ info.name }} {{ info.sys.country }}
    </div>
    <div class="widget__weather">
      <div class="widget__img">
        <img
          :src="iconUrl"
          alt="icon weather"
        >
      </div>
      <div class="widget__temp">
        {{ info.main.temp }} °С
      </div>
      <div class="widget__estimate widget-estimate">
        {{widgetEstimate}}
      </div>
    </div>
    <div class="widget__data widget-data">
      <div
        class="widget-data__item"
        title="wind speed and direction"
      >
        {{ info.wind.speed }}m/s
      </div>
      <div
        class="widget-data__item"
        title="pressure in hpa"
      >
        {{ info.main.pressure }}hPa
      </div>
      <div
        class="widget-data__item"
      >
        humidity: {{info.main.humidity}}%
      </div>
      <div
        class="widget-data__item"
      >
        Dew point: 0 °С
      </div>
      <div
        class="widget-data__item"
      >
        Visibility: {{info.visibility | toKm}}km
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherWidget",
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    iconUrl() {
      if (this.info.weather)
        return `http://openweathermap.org/img/wn/${this.info.weather[0].icon}@2x.png`
      return ''
    },
    widgetEstimate() {
      const estimates = this.info.weather.map(item => item.description).join(', ')
      return estimates[0].toUpperCase() +estimates.slice(1)
    }
  },
  filters: {
    toKm: meter => meter/1000
  }
}
</script>

<style lang="stylus">
.widget {
  font-family $font
  font-size $size-text
  &__name {
    font-weight bold
  }

  &__weather {
    display grid
    grid-template-columns repeat(2, 1fr)
    align-items center
  }
  &__temp {
    font-weight bold
    font-size: $size-title
  }
  &__estimate {
    grid-column 1/3
  }
}
.widget-data {
  display flex
  flex-wrap wrap
  &__item {
    flex 1 0 50%
    margin-top: 10px
  }
}
</style>

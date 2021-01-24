<template>
  <div class="widget">
    {{ weather.id }}
  </div>
</template>

<script>
export default {
  name: "WeatherWidget",
  props: {
    weather: {
      type: Object,
      default: () => ({
        id: 0
      })
    }
  }
}
</script>

<style lang="stylus">

</style>

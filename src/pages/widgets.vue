<template>
  <div class="widgets">
    <router-link
      to="/options"
      class="widgets__link"
    >
      <font-awesome-icon icon="cog"/>
    </router-link>
    <weather-widget
      v-for="(item, key) in widgets"
      :key="key"
      :info="item"
      class="widgets__widget"
    />
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import WeatherWidget from "@/components/widget/WeatherWidget";

export default {
  name: 'widgets',
  components: {
    WeatherWidget
  },
  computed: {
    ...mapState(['cities']),
    ...mapGetters({
      widgets: 'getWidgets'
    })
  },
  created() {
    !this.cities.length ? this.getCity() : this.fetchWidgets()
  },
  methods: {
    ...mapMutations(['addWidget', 'removeWidget', 'addCity']),
    ...mapActions(['fetchUserCity', 'fetchWidgets']),
    getCity() {
      navigator.geolocation.getCurrentPosition(() => {
        this.fetchUserCity()
        .then(() => {
            this.fetchWidgets()
        })
      }, () => {
        alert('Невозможно определить город, выбран London')
        this.addCity('London')
        this.fetchWidgets()
      })
    }
  }
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

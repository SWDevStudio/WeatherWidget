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
import { mapState, mapMutations } from 'vuex'
import WeatherWidget from "@/components/WeatherWidget";

export default {
  name: 'widgets',
  components: {
    WeatherWidget
  },
  computed: {
    ...mapState(['widgets', 'cities'])
  },
  created() {
    this.$store.dispatch('fetchWidgets')
  },
  methods: {
    ...mapMutations(['addWidget', 'removeWidget'])
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

<template>
  <div
    class="city-line"
  >
    <font-awesome-icon
      icon="bars"
      class="city-line__bars"
    />
    <span class="city-line__name"> {{ city }} </span>
    <font-awesome-icon
      icon="trash-alt"
      data-testid="trash-alt"
      @click="removeCity(city)"
      class="city-line__trash trash-alt"
    />
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "CityLine",
  props: {
    city: {
      type: String,
      default: 'no name'
    }
  },
  methods: {
    ...mapMutations(['removeCity']),
  }

}
</script>

<style lang="stylus">
.city-line {
  display flex
  padding 10px
  justify-content space-between
  align-items center
  background-color #EDEBE9

  &__name {
    margin-right auto
    margin-left: 10px
  }

  &__bars, &__trash {
    cursor pointer
  }
}
</style>

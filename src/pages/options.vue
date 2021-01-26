<template>
  <div class="options">
    <header class="options__header">
      <span> Settings </span>
      <router-link
        to="/"
      >
        <font-awesome-icon icon="times"/>
      </router-link>
    </header>
    <div class="options__content">
      <draggable
        v-model="cities"
        group="people"
        handle=".city-line__bars"
      >
        <city-line
          class="options__city"
          v-for="(city, key) in cities"
          :key="key"
          :city="city"
        />
      </draggable>
      <text-field
        class="options__text-field"
        @send="inputData"
        v-model="city"
        ref="input"
      />
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import draggable from 'vuedraggable'
import TextField from "@/components/options/TextField";
import CityLine from "@/components/options/CityLine";

export default {
  components: {
    CityLine,
    TextField,
    draggable
  },
  data: () => ({
    city: ''
  }),
  computed: {
    cities: {
      get() {
        return this.$store.state.cities
      },
      set(v) {
        this.$store.commit('setCities', v)
      }
    }
  },
  methods: {
    ...mapMutations(['addCity']),
    inputData() {
      if (!this.$refs.input.$v.$invalid)
        this.addCity(this.city)
    }
  }
}
</script>
<style lang="stylus">
.options {
  font-family $font

  &__header {
    display flex
    justify-content space-between
    font-size $size-text
  }

  &__content {
    font-size $size-text
  }

  &__city {
    margin-top: 15px
    min-height 40px
  }

  &__input, &__text-field {
    margin-top: 15px
  }
}

</style>

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
      <div
        class="options__city city-line"
        v-for="city in cities"
        :key="city"
        @click="removeCity(city)"
      >
        <font-awesome-icon icon="bars"/>
        <span class="city-line__name"> {{ city }} </span>
        <font-awesome-icon icon="trash-alt"/>
      </div>
      <div class="options__text-field text-field">
        <label for="add-location" class="text-field__title">Add Location</label>
        <div class="text-field__enter">
          <input
            type="text"
            id="add-location"
            class="input text-field__input"
            v-model.trim="city"
            @keyup.enter="inputData"
          >
          <label
            for="add-location"
            class="text-field__icon"
            @click="inputData"
          >
            <font-awesome-icon icon="level-down-alt"/>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data: () => ({
    city: ''
  }),
  computed: {
    ...mapState({
      cities: 'cities'
    })
  },
  methods: {
    ...mapMutations(['removeCity', 'addCity']),
    inputData() {
      this.addCity(this.city)
      this.city = ''
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

.text-field {
  &__title {
    cursor pointer
  }

  &__enter {
    display flex
    flex-wrap wrap
    align-items center
    justify-content space-between
  }

  &__input {
    margin-top: 10px
    flex 1 1 80%
  }

  &__icon {
    flex 1 0 auto
    display flex
    justify-content center
    transform rotate(90deg)
    font-size 24px
    cursor pointer
  }
}

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
}
</style>

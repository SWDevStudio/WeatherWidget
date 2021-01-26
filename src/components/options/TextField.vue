<template>
  <div class="text-field">
    <label :for="id" class="text-field__title">Add Location</label>
    <div class="text-field__enter">
      <input
        type="text"
        :id="id"
        class="input text-field__input"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="send"
        v-model="input"
      />
      <label
        :for="id"
        class="text-field__icon"
        @click="send"
      >
        <font-awesome-icon icon="level-down-alt"/>
      </label>
    </div>
    <div
      class="text-field__error"
      v-if="!$v.input.val"
    >
      Latin letters only
    </div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  computed: {
    id: () => `input-${Math.random() * 101}`
  },
  data:() => ({
    input: ''
  }),
  props: {
    validation: {
      type: Function,
      default: val => !val.length || /^[A-z0-9]+$/.test(val)
    }
  },
  methods: {
    send(){
      this.$emit('send')
      this.input = ''
    }
  },
  validations() {
    return {
      input: {
        val: this.validation
      }
    }
  }
}
</script>

<style lang="stylus">
.text-field {
  font-family $font
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
  &__error {
    color red
  }
}

</style>

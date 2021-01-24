import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],

  state: {
    cities: []
  },
  mutations: {
    addCity: (state, city) => { state.cities.push(city) },
    removeCity: (state, city) => { state.cities = state.cities.filter(item => item !== city) }
  },
  actions: {
  },
  modules: {
  }
})

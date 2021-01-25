import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import constants from "@/utils/constants";

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],

  state: {
    cities: [],
    widgets: []
  },
  mutations: {
    addCity: (state, city) => {
      state.cities.push(city)
    },
    removeCity(state, city) {
      state.cities = state.cities.filter(item => item !== city)
      const widget = state.widgets.find(item => item.name === city)
      if (widget)
        this.commit('removeWidget', widget)
    },
    addWidget: (state, widget) => {
      const widgetInState = state.widgets.findIndex(item => item.id === widget.id)
      if (!~widgetInState) {
        state.widgets.push(widget)
        return
      }
      if (state.widgets[widgetInState].dt + 600 < widget.dt) {
        state.widgets[widgetInState] = widget
      }
    },
    removeWidget: (state, widget) => {
      state.widgets = state.widgets.filter(item => item.id !== widget.id)
    }
  },
  actions: {
    async fetchWidgets({state, commit, dispatch}) {
      const {cities, widgets} = state
      if (!cities.length) {
        await dispatch('fetchUserCity')
      }
      for (let city of cities) {
        const widget = widgets.find(item => item.name === city)
        if (!widget || widget.dt + 600 < new Date().getTime()) {
          try {
            const {data} = await axios.get(
              '/data/2.5/weather',
              {
                params: {
                  appid: constants.API_KEY,
                  lang: constants.lang,
                  units: constants.units,
                  q: city
                }
              }
            )
            commit('addWidget', data)
          } catch (e) {
            if (e.response.status) {
              commit('removeCity', e.response.config.params.q)
              alert(`Город ${e.response.config.params.q} не найдет, он будет удален из списка`)
            }
          }

        }
      }
    },
    async fetchUserCity({commit}) {
      const {data} = await axios.get('http://ip-api.com/json/')
      commit('addCity', data.city)
    }
  },
  getters: {},
  modules: {}
})

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
// TODO Kotaro use a inject ?
import send from "@/plugins/sendRequest";

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
      this.commit('removeWidget', state.widgets.find(item => item.name === city))
    },
    addWidget: (state, widget) => {
      const widgetInState = (state.widgets.findIndex(item => item.id === widget.id))
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
    async fetchWidgets(ctx) {
      const {cities, widgets} = ctx.state
      for (let city of cities) {
        const widget = widgets.find(item => item.name === city)
        if (!widget || widget.dt + 600 < new Date().getTime()) {
          const {data} = await send.$sendRequest({
            params: {
              q: city
            }
          })
          ctx.commit('addWidget', data)
        }
      }
    }
  },
  getters: {},
  modules: {}
})

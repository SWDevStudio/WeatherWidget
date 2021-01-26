import axios from "axios";
import constants from "@/utils/constants";

export default {
  async fetchWidgets({state, commit}) {
    const {cities, widgets} = state
    for (let city of cities) {
      const widget = widgets.find(item => item.name === city)
      if (!widget || widget.dt + 600 < new Date().getTime()) {
        try {
          const {data} = await axios.get(
            '/data/2.5/weather',
            {
              params: {
                appid: constants.API_KEY,
                lang: constants.LANG,
                units: constants.UNITS,
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
}

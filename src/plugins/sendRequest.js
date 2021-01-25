import axios from 'axios'
import constants from "@/utils/constants";

export default {
  async $sendRequest ({ url, params } = {}) {
    try {
      return await axios.get(
        url || '/data/2.5/weather',
        {
          params: {
            appid: constants.API_KEY,
            lang: constants.lang,
            units: constants.units,
            ...params
          }
        }
      )
    } catch (e) {
      console.log(e)
      return {}
    }
  },
  install(Vue) {
    Vue.prototype.$sendRequest = this.$sendRequest
  }
}

import axios from 'axios'
import constants from "@/utils/constants";

export default {
  install(Vue) {
    // eslint-disable-next-line no-unused-vars
    Vue.prototype.$sendRequest = async function ({ url, params} = {}) {
      try {
        const res = await axios.get(
          url || '/weather',
          {
            params: {
              appid: constants.API_KEY,
              lang: constants.lang,
              ...params
            }
          }
        )
        return res
      } catch (e) {
        console.log(e)
        return {}
      }
    }
  }
}

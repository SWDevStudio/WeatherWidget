import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import sendRequest from "@/plugins/sendRequest";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(sendRequest)
Vue.config.productionTip = false

import '@/assets/global.styl'





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



window.onload = function () {
  window.$vue = document.getElementById('app').__vue__
}

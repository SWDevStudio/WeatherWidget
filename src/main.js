import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faTimes, faTrashAlt, faBars, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog, faTimes, faTrashAlt, faBars, faLevelDownAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
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

import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import sendRequest from "@/plugins/sendRequest";

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

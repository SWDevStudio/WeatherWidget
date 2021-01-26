import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import actions from "@/store/main/actions";
import getters from "@/store/main/getters";
import mutations from "@/store/main/mutations";
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    cities: [],
    widgets: []
  },

  mutations: mutations,
  actions: actions,
  getters: getters
})

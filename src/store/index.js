import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import actions from "@/store/Main/actions";
import getters from "@/store/Main/getters";
import mutations from "@/store/Main/mutations";
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

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editPost: null,
    user: null,
    profileEmail: "",
    profileFirstName: "",
    profileLastName: "",
    profilToken: null,

  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getCurrentUser({ commit }){
      let currentUser = localStorage.getItem('user')
      commit("setProfileInfo", currentUser)  
    }
  },
  modules: {
  }
})

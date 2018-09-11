import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navbarTitle: 'default value',
    users: []
  },
  getters: {
    titleCount: state => state.navbarTitle.length
  },
  mutations: {
    changeText(state, payload) {
      state.navbarTitle = payload
    },
    SET_USERS: (state, payload) => (state.users = payload),
    increment(state) {
      state.count++
    }
  },
  actions: {
    loadUsers(context) {
      axios
        .get('/users')
        .then(response => response.data)
        .then(response => context.commit('SET_USERS', response))
    }
  }
})

export default store

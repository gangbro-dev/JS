import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const API_URL = "http://127.0.0.1:8000/"

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: 1,
        title: '제목',
        content: '내용'
      },
      {
        id: 2,
        title: '제목2',
        content: '내용2'
      },
    ],
    token: null,
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, data) {
      state.articles = data
    },
    SIGN_UP(state, token) {
      state.token = token
    }
  },
  actions: {
    getArticles(context) {
      const url = API_URL + 'api/v1/articles/'
      axios({
        method: 'get',
        url: url,
      })
      .then((response) => {
        context.commit("GET_ARTICLES", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    signUp(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}accounts/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
        },
      })
      .then((res) => {
        console.log(res)
        context.commit('SIGN_UP', res.data.key)
      })
      .catch((error) => {
        console.log(error)
      })
    },
  },
  modules: {
  }
})

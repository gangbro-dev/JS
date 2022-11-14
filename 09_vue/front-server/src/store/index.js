import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

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
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, data) {
      state.articles = data
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
    }
  },
  modules: {
  }
})

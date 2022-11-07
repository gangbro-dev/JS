import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length
    },
    completedTodosCount(state) {
      return state.todos.reduce((acc, todo) => {
        if(todo.isCompleted) {acc++}
        return acc
      }, 0)
    },
    incompletedTodosCount(state) {
      return state.todos.reduce((cnt=0, todo) => {
        if(!todo.isCompleted) {cnt++}
        return cnt
      }, 0)
    },
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, idx) {
      state.todos.splice(idx, 1)
    },
    TOGGLE_COMPLETED(state, todo) {
      const idx = state.todos.indexOf(todo)
      state.todos[idx].isCompleted = !state.todos[idx].isCompleted

    }
  },
  actions: {
    createTodo(context, todoInputData) {
      const todoItem = {
        title: todoInputData,
        isCompleted: false,
      }
      context.commit("CREATE_TODO", todoItem)
    },
    deleteTodo(context, todo) {
      const idx = context.state.todos.indexOf(todo)
      context.commit("DELETE_TODO", idx)
    },
    toggleCompleted(context, todo) {
      context.commit("TOGGLE_COMPLETED", todo)
    },
    saveTodosToLocalStorage(context) {
      const jsonTodos = JSON.stringify(context.state)
      localStorage.setItem('todos', jsonTodos)
    }
  },
  modules: {
  }
})

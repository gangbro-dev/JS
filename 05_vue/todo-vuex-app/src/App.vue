<template>
  <div id="app">
    <h1>Todo List</h1>
    <h2>모든 Todo 개수: {{ allTodosCount }}</h2>
    <h2>완료된 Todo 개수: {{ completedTodosCount }}</h2>
    <h3>미완료된 Todo 개수: {{ incompletedTodosCount }}</h3>
    <TodoList/>
    <TodoForm/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';


export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  },
  data() {
    return{

    }
  },
  methods: {

  },
  computed: {
    allTodosCount() {
      return this.$store.getters.allTodosCount
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount
    },
    incompletedTodosCount() {
      return this.$store.getters.incompletedTodosCount
    }
  },
  updated() {
    this.$store.dispatch("saveTodosToLocalStorage")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <input 
    type="text" 
    id="todoInput"
    v-model="todoInputData"
    @keyup.enter="createTodo">
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return{
      'todoInputData': null,
    }
    
  },
  methods: {
    createTodo() {
      if (this.todoInputData) 
      {
        this.$store.dispatch('createTodo', this.todoInputData)
        this.todoInputData = null
      }
    }
  }
}
</script>

<style>

</style>
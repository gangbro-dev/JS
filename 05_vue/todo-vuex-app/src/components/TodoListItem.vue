<template>
  <div>
    <span @click="completeTodo" style="cursor: default">{{ todo.title }}</span>    
    <button
      @click="deleteTodo">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    completeTodo(event) {
      this.$store.dispatch('toggleCompleted', this.todo)
      event.target.classList.toggle("completed")
    },
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
    }
  },
}
</script>

<style>
  .completed {
    text-decoration: line-through;
    color: lightslategray
  }
</style>
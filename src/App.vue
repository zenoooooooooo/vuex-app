<template>
  <addTodos-component></addTodos-component>
  <filtertodos-component></filtertodos-component>
  <todos-component></todos-component>
</template>

<script>
import Todos from "./components/Todos.vue"
import AddTodo from "./components/AddTodo.vue"
import FilterTodos from "./components/FilterTodos.vue"

export default {
  name: "App",
  components: {
    'todos-component': Todos,
    'addTodos-component': AddTodo,
    'filtertodos-component': FilterTodos
  }
}
</script>

<style scoped></style>
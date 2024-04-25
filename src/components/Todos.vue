<template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div class="todos">
            <div @dblclick="onDblClick(todo)" v-for="todo in allTodos" class="todo" :key="todo.id"
                :class="{ 'is-complete': todo.completed }">
                {{ todo.id }}. {{ todo.title }}
                <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Todos',
    methods: {
        ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
        onDblClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updTodo)
        }
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }

}


</script>
  
<style scoped>
.legend {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: purple;
    color: white;
    align-items: center;
}

.incomplete-box {
    width: 10px;
    height: 10px;
    background: red;
    display: inline-block
}

.complete-box {
    width: 10px;
    height: 10px;
    background: green;
    display: inline-block;
}
.todos {
    background: red;
    color: white;
}
.is-complete {
    background: green;
}
</style>
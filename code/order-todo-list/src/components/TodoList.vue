<template>
  <div>
    todo-list
    <div>
      <input v-model="newTodo" type="text" @keypress.enter="todoStore.addTodo(newTodo)" />
      <div>
        <ul v-for="todo in todoStore.todos" :key="todo.id">
          <li>
            <TodoItem :todo="todo"></TodoItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "../store/todo";
import { ref } from "vue";

const newTodo = ref("");
const todoStore = useTodoStore();
</script>

<style lang="scss" scoped></style>

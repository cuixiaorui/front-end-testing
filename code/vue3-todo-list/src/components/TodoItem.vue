<template>
  <div>
    <h1>{{ todoItem.title }}</h1>
    <div>
      <button @click="handleRemove">remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TodoItem, useTodoStore } from "../stores/todo";

interface Props {
  id: number;
}
const props = defineProps<Props>();

const todoStore = useTodoStore();

const todoItem = todoStore.findTodo(props.id) as TodoItem;

function handleRemove() {
  todoStore.removeTodo(props.id);
}
</script>

<style scoped></style>

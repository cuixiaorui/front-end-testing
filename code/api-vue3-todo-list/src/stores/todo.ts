import { defineStore } from "pinia";
import { ref } from "vue";
import { createTodoItem } from "./todoItem";
import { fetchTodoList, fetchAddTodo, fetchRemoveTodo } from "../api";

export interface TodoItem {
  id: number;
  title: string;
}

type Todos = TodoItem[];

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todos>([]);

  async function updateTodoList() {
    const { data } = await fetchTodoList();
    todos.value = data.todoList;
  }

  async function addTodo(title: string) {
    if (!title) return null;
    const { data, state } = await fetchAddTodo(title);

    const todo = createTodoItem(data.todo.id, data.todo.title);
    if (state) {
      todos.value.push(todo);
    }
    return todo;
  }

  async function removeTodo(id: number) {
    const { data, state } = await fetchRemoveTodo(id);

    if (state === 0) {
      throw new Error(`id:${id} does not exist`);
    }

    const todoItem = findTodo(data.id);
    if (state) {
      if (todoItem) {
        todos.value = todos.value.filter((todoItem) => {
          return todoItem.id !== id;
        });
      }
    }
    return todoItem;
  }

  function findTodo(id: TodoItem["id"]) {
    return todos.value.find((todoItem) => {
      return todoItem.id === id;
    });
  }

  return {
    todos,
    addTodo,
    removeTodo,
    findTodo,
    updateTodoList,
  };
});

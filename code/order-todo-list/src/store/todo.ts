import { defineStore } from "pinia";
import { ref } from "vue";

interface Todo {
  title: string;
  id: number;
}

function createTodo(title) {
  const todo: Todo = {
    title,
    id: id++,
  };

  return todo
}

let id = 1;

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);
  function addTodo(title: string) {
    if (title.startsWith("reverse:")) {
      title = title.slice(8).split("").reverse().join("");
    }

    const todo = createTodo(title)
    todos.value.push(todo);

    return todo;
  }

  function removeTodo(id: Todo["id"]) {
    todos.value = todos.value.filter((t) => {
      return t.id !== id;
    });
  }

  return {
    todos,
    addTodo,
    removeTodo,
  };
});

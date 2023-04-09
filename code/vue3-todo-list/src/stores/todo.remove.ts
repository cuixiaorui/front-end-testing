import { defineStore } from "pinia";
import { ref } from "vue";
import { parseCommand } from "./command";
import { createTodoItem } from "./todoItem";

export interface TodoItem {
  id: number;
  title: string;
}

type Todos = TodoItem[];

let isAdded = false;

export function reset() {
  isAdded = false;
}

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todos>([]);

  function addTodo(title: string) {
    // if (isAdded) return;

    type CommandNames = "top" | "reverse";
    const commandHandlers = {
      top: (todo: TodoItem, todos: Todos) => {
        todos.unshift(todo);
      },
      reverse: (todo: TodoItem, todos: Todos) => {
        todo.title = title.split("").reverse().join("");
      },
    };

    const commands = parseCommand(title);

    title = title.slice(title.indexOf(":") + 1);
    const item = createTodoItem(title);

    commands.forEach((command: CommandNames) => {
      const handler = commandHandlers[command];
      handler(item, todos.value);
    });

    if (!commands.find((command) => command === "top")) {
      todos.value.push(item);
    }

    // isAdded = true

    return item;
  }
  function removeTodo(id: number) {
    const todoItem = findTodo(id);
    if (todoItem) {
      todos.value = todos.value.filter((todoItem) => {
        return todoItem.id !== id;
      });
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
  };
});

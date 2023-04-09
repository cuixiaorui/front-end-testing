import { test, expect } from "vitest";
import { reset, useTodoStore } from "./todo.remove";
import { setActivePinia, createPinia } from "pinia";

test("remove todo", () => {
  setActivePinia(createPinia());
  const store = useTodoStore();

  // round-trip
  // 后门操作
  //   const todo = {
  //     id: 1,
  //     title: "吃饭",
  //   };
  //   store.todos.push(todo);

  const todo = store.addTodo("吃饭");

  expect(store.todos.length).toBe(0);
});

import { test, expect } from "vitest";
import { reset, useTodoStore } from "./todo";
import { setActivePinia, createPinia } from "pinia";

test("add todo", () => {
  // 准备数据
  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  const title = "吃饭";

  // 调用
  todoStore.addTodo(title);

  // 验证
  expect(todoStore.todos[0].title).toBe(title);

});
test("add todo with reverse", () => {
  // 准备数据
  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  const title = "reverse:heihei";

  // 调用
  todoStore.addTodo(title);

  // 验证
  expect(todoStore.todos[0].title).toBe("iehieh");
});

test("remove todo", () => {
  // 准备数据
  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  const todo = todoStore.addTodo("吃饭")  // round-trip

  // 调用
  todoStore.removeTodo(todo!.id);

  // 验证
  expect(todoStore.todos.length).toBe(0);
});

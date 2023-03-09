import { expect, it, describe, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "./todo";

describe("todo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("add todo", () => {
    const todoStore = useTodoStore();
    todoStore.addTodo("heihei");
    expect(todoStore.todos[0].title).toEqual("heihei");
  });
  it("add todo with reverse command", () => {
    const todoStore = useTodoStore();
    todoStore.addTodo("reverse:heihei");
    expect(todoStore.todos[0].title).toEqual("iehieh");
  });

  it("remove todo", () => {
    const todoStore = useTodoStore();
    const todo = todoStore.addTodo("heihei");

    todoStore.removeTodo(todo.id)

    expect(todoStore.todos.length).toBe(0)
  });
});

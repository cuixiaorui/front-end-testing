import { it, expect, describe } from "vitest";
import { todos, addTodo, clearTodos } from "./global.todo";

describe("global", () => {
  it("first", () => {
    addTodo("吃饭");

    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe("吃饭");

    // 低层次的代码
    clearTodos()
  });
  it("second", () => {
    addTodo("打豆豆");

    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe("打豆豆");

    clearTodos()
  });
});

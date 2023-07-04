import { test, expect, vi } from "vitest";
import { useTodoStore } from "./todo";
import { setActivePinia, createPinia } from "pinia";
import axios from "axios";

vi.mock("axios");

test("add todo", async () => {
  // 准备数据
  vi.mocked(axios.post).mockImplementation((path, { title }: any) => {
    return Promise.resolve({
      data: { data: { todo: { id: 1, title } }, state: 1 },
    });
  });
  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  const title = "吃饭";

  // 调用
  await todoStore.addTodo(title);

  // 验证
  expect(todoStore.todos[0].title).toBe(title);
});

test("should not add todo when title is empty string", async () => {
  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  const title = "";

  // 调用
  await todoStore.addTodo(title);

  // 验证
  expect(todoStore.todos.length).toBe(0);
});

test("remove todo", async () => {
  vi.mocked(axios.post).mockImplementationOnce((path, { title }: any) => {
    return Promise.resolve({
      data: { data: { todo: { id: 1, title } }, state: 1 },
    });
  });
  vi.mocked(axios.post).mockImplementationOnce((path, { id }: any) => {
    return Promise.resolve({
      data: { data: { id }, state: 1 },
    });
  });

  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  const todo = await todoStore.addTodo("吃饭"); // round-trip

  // 调用
  await todoStore.removeTodo(todo!.id);

  // 验证
  expect(todoStore.todos.length).toBe(0);
});

test("should throw error when removed id does not exist ", async () => {
  // 准备数据
  vi.mocked(axios.post).mockImplementationOnce((path, { id }: any) => {
    return Promise.resolve({
      data: { data: null, state: 0 },
    });
  });

  setActivePinia(createPinia());
  const todoStore = useTodoStore();

  expect(async () => {
    // 调用
    await todoStore.removeTodo(2);
    // 抛出一个错误
  }).rejects.toThrowError("id:2 不存在");
});

test("update todo list", async () => {
  const todoList = [{ id: 1, title: "写代码" }];
  vi.mocked(axios.get).mockResolvedValue({ data: { data: { todoList } } });

  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  await todoStore.updateTodoList();

  expect(todoStore.todos[0].title).toBe("写代码");
});

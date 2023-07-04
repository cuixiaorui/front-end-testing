import { rest } from "msw";

export function mockAddTodo() {
  return rest.post(
    "http://localhost/api/addTodo",
    async (req, res, context) => {
      const { title } = await req.json();
      return res(
        context.json({
          data: { todo: { id: 1, title } },
          state: 1,
        })
      );
    }
  );
}

export function mockRemoveTodo() {
  return rest.post(
    "http://localhost/api/removeTodo",
    async (req, res, context) => {
      const { id } = await req.json();
      return res(
        context.json({
          data: { id },
          state: 1,
        })
      );
    }
  );
}

export function mockTodoList(todoList: any[]) {
  return rest.get(
    "http://localhost/api/todoList",
    async (req, res, context) => {
      return res(
        context.json({
          data: { todoList },
          state: 1,
        })
      );
    }
  );
}

interface Todo {
  title: string;
  content: string;
  state:State
}

export enum State {
  active,
  completed,
  removed,
}

export const todos: Todo[] = [];
export function addTodo(todo: Todo) {}

export function fighting() {}


export function createTodo(title: string, content: string = "这是一个 todo 的内容") {
  return {
    title,
    content,
    state: State.active,
  };
}
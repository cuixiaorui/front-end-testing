let id = 0;

export function createTodoItem(title: string) {
  return {
    title,
    id: id++,
  };
}

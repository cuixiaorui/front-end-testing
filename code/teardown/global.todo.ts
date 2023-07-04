interface Todo {
  title: string;
}

// 全局  数据库 文件 永久数据
export const todos: Todo[] = [];

export function addTodo(title: string) {
  todos.push({
    title,
  });
}


export function clearTodos () {
  todos.length = 0
}


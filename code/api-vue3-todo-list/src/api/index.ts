import axios from "axios";

export function fetchTodoList() {
  return axios.get("/api/todoList").then(({ data }) => {
    return data;
  });
}

export function fetchAddTodo(title: string) {
  return axios
    .post("/api/addTodo", {
      title,
    })
    .then(({ data }) => {
      return data;
    });
}

export function fetchRemoveTodo(id: number) {
  return axios
    .post("/api/removeTodo", {
      id,
    })
    .then(({ data }) => {
      return data;
    });
}

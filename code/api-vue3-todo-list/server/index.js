const Koa = require("koa");
const Router = require("koa-router");
const { koaBody } = require("koa-body");

const app = new Koa();
const router = new Router();

// 假设这个 todoList 是从数据库中获取的
let todoList = [
  { id: 1, title: "完成 KoaJS 实战课程" },
  { id: 2, title: "购买水果" },
  { id: 3, title: "学习英语" },
];

// 获取 todoList
router.get("/api/todoList", (ctx, next) => {
  ctx.body = { data: { todoList }, state: 1 };
});

// 添加 todo
router.post("/api/addTodo", (ctx, next) => {
  const newTodo = {
    id: todoList.length + 1,
    title: ctx.request.body.title, // 从请求正文中获取 title 数据
  };
  todoList.push(newTodo);
  ctx.body = { data: { todo: newTodo }, state: 1 };
});

// 删除 todo
router.post("/api/removeTodo", (ctx, next) => {
  const { id } = ctx.request.body; // 从请求正文中获取 id 数据
  todoList = todoList.filter((todo) => todo.id !== id);
  ctx.body = { data: { id }, state: 1 };
});

app.use(koaBody()); // 解析 POST 请求正文
app.use(router.routes()); // 启动路由

// 启动服务器
app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});

import { it, expect, describe } from "vitest";
import { addTodo, State, todos } from "..";
import { createTodo } from "./helpers/todo";
// 1. 代码重复的问题
// 2. 可读性的问题
// 工厂函数

// 原则 ：
// function createTodo(title: string, content: string = "这是一个 todo 的内容") {
//   return {
//     title,
//     content,
//     state: State.active,
//   };
// }

function createRemovedTodo(title: string) {
  const todo = createTodo(title, "heihei");
  todo.state = State.removed;
  return todo;
}

describe("委托", () => {
  it("normal addTodo", () => {
    // given
    // 中高层次的代码
    // const todo = createTodo("吃饭");
    // todo.content = "nihaoya";
    // todo.state = State.removed

    const todo = createRemovedTodo();

    // when
    addTodo(todo);

    // then
    expect(todos[0]).toEqual(todo);
  });
  it(" addTodo with top command", () => {
    // given
    const todo = createTodo("吃饭", "dddd");

    // when
    addTodo(todo);

    // then
    expect(todos[0].title).toEqual("吃饭");
  });

  it(" addTodo with reverse command", () => {
    // given
    const todo = createTodo("吃饭");

    // when
    addTodo(todo);

    // then
    expect(todos[0].title).toEqual("饭吃");
  });

  it("难理解的 given ", () => {
    // 简单容易理解 可读性要高
    // todo 需要一个更贴切的 case
    // given
    const { playerA, playerB, users } = createPlayersAndUsers();

    // when
    fighting(playerA, playerB, users);

    // then
    expect(playerA.life).toBe(2);
  });
});

function createPlayersAndUsers(arguments) {
  const userA = {
    name: "cxr",
    age: 18,
  };

  const userB = {
    name: "cxr",
    age: 18,
  };

  const userC = {
    name: "cxr",
    age: 18,
  };

  const playerA = new Player(new Weapons("冲锋枪"));
  playerA.life = 3;
  playerA.attack = () => {
    return 3;
  };
  const playerB = new Player(new Weapons("手枪"));
  playerA.life = 2;
  playerA.attack = () => {
    return 3;
  };

  return {
    playerA,
    playerB,
    users: [userA, userB, userC],
  };
}

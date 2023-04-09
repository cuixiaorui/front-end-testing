
// TDL 测试驱动学习

import { expect, it } from "vitest";

it("toBe", () => {
  // ===
  expect(1).toBe(1);
});

it("toEqual", () => {
  const user = {
    name: "xiaohong",
  };

  expect(user).toEqual({
    name: "xiaohong",
  });
});

it("toBeTruthy", () => {
  expect(1).toBeTruthy();
  expect(true).toBeTruthy();
  expect("1234").toBeTruthy();
});

it("toBeFalsy", () => {
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
  expect("").toBeFalsy();
});

it("toContain", () => {
  // 数组 string
  const item1 = {
    name: "xiaohong",
  };
  const item2 = {
    name: "xiaoming",
  };
  const item3 = {
    name: "x",
  };
  const list = [item1, item2];
  expect(list).toContain(item1);
  //   expect(list).toContain(item3);

  expect("<div>1234</div>").toContain("1234");
});

it("toThrow", () => {
  function getName(name) {
    if (typeof name !== "string") {
      throw new Error("错误的name");
    }
    return "hei";
  }

  expect(() => {
    getName(111);
  }).toThrow("错误的name");
});

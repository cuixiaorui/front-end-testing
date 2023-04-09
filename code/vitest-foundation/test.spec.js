import { test, it, expect } from "vitest";
import { add } from "./add";

// test it
// it -> BDD 行为驱动开发  TDD
// it should xxx xxx , Mocha Jasmine
// test it Jest
// vitest -> test it
test("should ", () => {
  const r = add(1, 1);
  expect(r).toBe(2);
});

// describe
// it("should ", () => {

// 	add()

// });

// test.todo("");

// 功能
// 1. xxx add
// 2. xxx remove

// test("add")
// test("add reverse")
// test.todo("remove")

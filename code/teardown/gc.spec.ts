import { test, expect } from "vitest";
import { Dog } from "./gc";

test("gc", () => {
  // 临时的数据
  // 新鲜的夹具
  const dog = new Dog("heihei");

  expect(dog.sayHi()).toBe("hi, my name is heihei. How are you");

  //   dog.clear();
  //   dog = null;

});

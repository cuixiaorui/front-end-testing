import { it, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./use-class";

vi.mock("./User", async (importOriginal) => {
  return {
    User: class {
      age = 2
    },
  };
});

describe("使用class的形式", () => {
  it("user age", () => {
    // given

    // 一个是修改方法
    // User.prototype.getAge = () => 2;

    // when
    const age = doubleUserAge();

    // then
    expect(age).toBe(4);
  });
});

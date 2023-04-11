import { it, expect, describe, vi } from "vitest";
import { tellAge } from "./use-object";
import { config } from "./config";


describe("使用对象的形式", () => {
  it("allow ", () => {
    // given
    config.allowTellAge = true;

    // when
    const age = tellAge();

    // then
    expect(age).toBe(18);
  });
});

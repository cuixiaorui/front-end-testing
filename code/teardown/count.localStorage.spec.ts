import { test, afterEach, expect, describe, beforeEach } from "vitest";
import { clearCount, getCount, increaseCount } from "./count.localStorage";
describe("count", () => {
  afterEach(() => {
    clearCount();
  });
  test("first should count ++", () => {
    increaseCount("error");

    expect(getCount()).toBe(1);

  });
  test("second should count ++", () => {
    increaseCount();

    expect(getCount()).toBe(1);

  });
});

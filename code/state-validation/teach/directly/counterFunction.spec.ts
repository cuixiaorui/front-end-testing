import { afterEach, it, expect, describe } from "vitest";
import { getCount, increment, reset } from "./counterFunction";

describe("counter function", () => {
  afterEach(() => {
    reset()
  })
  it("increment", () => {
    // 0 -> 1
    increment();

    expect(getCount()).toBe(1);
  });
  it("increment second", () => {
    // 0 -> 1
    increment();

    expect(getCount()).toBe(1);
  });
});

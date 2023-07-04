import { afterEach, it, expect, describe } from "vitest";
import { increment, getCount, reset } from "./counterFunction";

describe("counter function", () => {
  afterEach(() => {
    reset();
  });
  it("increment", () => {
    increment();

    expect(getCount()).toBe(1);
  });
  it("second", () => {
    increment();

    expect(getCount()).toBe(1);
  });
});

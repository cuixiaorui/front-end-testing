import { Counter } from "./counter";
import { beforeEach, it, expect, describe } from "vitest";

describe("Counter", () => {
  it("increment", () => {
    // 0 -> 1
    const counter = new Counter();

    counter.increment();

    expect(counter.getCount()).toBe(1);
  });
});

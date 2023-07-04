import { Counter } from "./counter";
import { beforeEach, it, expect, describe } from "vitest";

describe("Counter", () => {
  it("increment", () => {
    const counter = new Counter();

    counter.increment();

    expect(counter.getCount()).toBe(1);
  });
});

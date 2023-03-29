import { add } from "./index";
import { test, expect } from "vitest";

test("vitest", () => {
  expect(add(1, 1)).toBe(2);
});

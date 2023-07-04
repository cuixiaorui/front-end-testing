import { vi, test, expect, describe } from "vitest";
import { user } from "./spy";

test("spy", () => {
  vi.spyOn(user, "getName");

  const result = user.getName();

  expect(result).toBe("cxr");
  expect(user.getName).toBeCalled();
});

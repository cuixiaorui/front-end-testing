import { vi, test, expect, describe } from "vitest";
import { user } from "./spy";

test("spy", () => {
  vi.spyOn(user, "getName").mockImplementation(() => "heiheihei");
  user.getName();

  expect(user.getName).toBeCalled();
  expect(user.getName()).toBe("heiheihei");
  console.log(user.getName);
});

import { vi, it, expect, describe } from "vitest";
import { cxrLogin } from "cxr";
import { login } from "./login";

vi.mock("./login.ts", () => {
  return {
    cxrLogin: vi.fn(),
  };
});

describe("login", () => {
  it("should called login function from cxr  ", () => {
    login("cxr", "jiubugaosuni");

    expect(cxrLogin).toBeCalledWith("cxr", "jiubugaosuni");
  });
});

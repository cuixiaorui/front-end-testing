import { describe, it, expect } from "vitest";
import { isHttp } from "./utils";

describe("isHttp", () => {
  it("should return true for the specific case: http://www.baidu.com", () => {
    const url = "http://www.baidu.com";
    expect(isHttp(url)).toBeTruthy();
  });

  it("should return false for non-http URLs", () => {
    const url = "https://www.google.com";
    expect(isHttp(url)).toBeFalsy();
  });
  it("should return false for non-http URLs", () => {
    const url = "";
    expect(isHttp(url)).toBeFalsy();
  });
});

import { vi, it, expect, describe } from "vitest";

import { log, logObj } from "./log";

describe("spy", () => {
  it("log", () => {
    vi.spyOn(logObj, "addData");
  });
});

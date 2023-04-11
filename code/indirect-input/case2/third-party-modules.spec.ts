import { test, vi, expect } from "vitest";
import { doubleUserAge } from "./third-party-modules";
import axios from "axios";
import { config } from "./config";

vi.mock("axios");

test("第三方模式的处理 axios", async () => {
  // vi.mocked(axios).mockResolvedValue({ name: "cxr", age: 18 });
  vi.mocked(axios.get).mockResolvedValue({ name: "cxr", age: 18 });

  const r = await doubleUserAge();

  expect(r).toBe(36);
});

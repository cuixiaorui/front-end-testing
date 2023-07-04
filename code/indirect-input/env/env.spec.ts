import { beforeEach, it, expect, vi, describe } from "vitest";
import { doubleUserAge } from "./env";

beforeEach(() => {
  vi.unstubAllEnvs();
});

it("process", () => {
  vi.stubEnv("USER_AGE", "99");
  //   import.meta.env  vite webpack
  //   process.env.USER_AGE = "15";
  const r = doubleUserAge();

  console.log(r);

  vi.unstubAllEnvs();
});

it("second", () => {
  const r = doubleUserAge();

  console.log(r);
});

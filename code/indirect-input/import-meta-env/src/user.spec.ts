import { vi, it, expect } from "vitest";
import { doubleUserAge, doubleUserAgeNew } from "./user";
import { userAge } from "./env";

vi.mock("./env");

it("doubleUserAge", () => {
  vi.stubEnv("VITE_USER_AGE", "99");

  const r = doubleUserAge();

  expect(r).toBe(198);

  vi.unstubAllEnvs();
});

it("doubleUserAgeNew", () => {
  vi.mocked(userAge).mockReturnValue(2);

  const r = doubleUserAgeNew();

  expect(r).toBe(4);
});


it('should ', () => {
   
  const callback = vi.fn()
  result.current.handleSubmit(callback)
  expect()
  
});
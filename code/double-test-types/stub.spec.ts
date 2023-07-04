// user.test.js
import { vi, it, expect, describe } from "vitest";
import { sendWelcomeEmail } from "./stub";

vi.mock("./stub.database", () => {
  return {
    getUserEmail: vi.fn(() => "test@example.com"),
  };
});

it("sendWelcomeEmail sends email to the correct address", async () => {
  const result = sendWelcomeEmail(123);

  expect(result).toBe("test@example.com");
});

// user.test.js
import { vi, it, expect, describe } from "vitest";
import { sendWelcomeEmail } from "./stub";
import { getUserEmail } from "./stub.database";

vi.mock("./stub.database.ts", () => {
  return {
    getUserEmail: vi.fn(() => "test@gmail.com"),
  };
});

it("sendWelcomeEmail sends email to the correct address", async () => {
  const email = sendWelcomeEmail(1);
  console.log(getUserEmail)
  expect(email).toBe("test@gmail.com");
});

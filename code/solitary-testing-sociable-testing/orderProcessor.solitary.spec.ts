import { OrderProcessor } from "./orderProcessor";
import { vi, test, expect, describe } from "vitest";
import { sendEmail } from "./EmailService";

vi.mock("./EmailService", () => {
  return {
    sendEmail: vi.fn(),
  };
});

vi.mock("./InventoryService.ts", () => {
  return {
    //stub
    checkStock() {
      return true;
    },
  };
});

// 独居
test("processOrder should succeed when there is enough stock", () => {
  const orderProcessor = new OrderProcessor();

  orderProcessor.processOrder({ name: "hei", count: 1 });

  expect(sendEmail).toBeCalled();
});

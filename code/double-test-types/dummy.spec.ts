import { test, beforeEach, it, expect, describe } from "vitest";
import { Recipient, sendEmail } from "./dummy";

describe("EmailService", () => {
  it("should send email", () => {
    const message = {
      subject: "Test Subject",
      body: "Test Body",
    };

    //     const dummyRecipient: Recipient = {
    //       email: "",
    //       name: "",
    //     };
    const dummyRecipient = {} as Recipient; // 这是我们的哑元对象

    sendEmail(message, dummyRecipient);
  });
});

test("dummy", () => {
  const message = {
    subject: "subject",
    body: "body",
  };

  //   const dummyRecipient: Recipient = {
  //     email: "",
  //     name: "",
  //   };
  // 核心 就是和当前要测试的功能无关的代码不要写
  const dummyRecipient = {} as Recipient;

  sendEmail(message, dummyRecipient);
});

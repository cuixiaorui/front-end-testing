import { test, beforeEach, it, expect, describe } from "vitest";
import { Message, Recipient, sendEmail } from "./dummy";

test("EmailService", () => {
  const message: Message = {
    subject: "heihei",
    body: "hahaha",
  };
  //   const dummyRecipient: Recipient = {
  //     email: "",
  //     name: "",
  //   };
//   const dummyRecipient = {} as Recipient;
  
  sendEmail(message, {});
});

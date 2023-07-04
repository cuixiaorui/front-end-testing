export interface Message {
  subject: string;
  body: string;
}

export interface Recipient {
  email: string;
  name: string;
}

export function sendEmail(message: Message, recipient: Recipient) {
  // 假设这里是发送邮件的真实逻辑，它只使用了 message 参数
  console.log(`Email subject: ${message.subject}`);
  console.log(`Email body: ${message.body}`);

  // 真实逻辑会调用 recipient
  // console.log(recipient);
}

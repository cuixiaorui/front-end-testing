import { checkStock } from "./InventoryService";
import { sendEmail } from "./EmailService";
// 订单处理系统
export class OrderProcessor {
  processOrder(order) {
    // 检查并更新库存，发送确认邮件
    const isOk = checkStock(order);
    if (isOk) {
      sendEmail();
    }
  }
}

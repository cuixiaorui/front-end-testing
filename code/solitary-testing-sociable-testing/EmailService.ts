import axios from "axios";
// 邮件服务

export function sendEmail() {
  axios.get("/sendEmail");
}

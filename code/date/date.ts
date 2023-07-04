/**
 * 检测今天是否为周五
 * @returns 如果今天是周五返回 "开心"，否则返回 "不开心"
 */
export function checkFriday(): string {
  const today = new Date();
  console.log(today.getDay());
  if (today.getDay() === 5) {
    return "happy";
  } else {
    return "sad";
  }
}

/**
 * 基于 Math.random 生成一个随机字符串
 * @param length 字符串长度
 * @returns 生成的随机字符串
 */
export function generateRandomString(length: number): string {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // 生成 0 到字符串长度之间的随机整数
    result += characters.charAt(randomIndex); // 将指定位置上的字符添加到结果字符串中
  }
  return result;
}

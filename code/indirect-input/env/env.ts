// 使用环境变量
// 两种使用环境变量的方式吧
// 一种是通过 process 来使用
// 还有一种是通过 import 来使用
// 那么它两的区别是什么
export function doubleUserAge() {
  return process.env.USER_AGE;
}

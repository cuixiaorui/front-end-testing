// 调用第三方模块
// 比如调用了 axios
// 那我应该如何测试呢?
import axios from "axios";

interface User {
  name: string;
  age: number;
}

export async function doubleUserAge() {
  // 调用了第三方模块
  // const user: User = await axios("/user/1");
  // 对象  让你直接调用对象上的方法
  const user: User = await axios.get("/user/1");
  return user.age * 2;
}
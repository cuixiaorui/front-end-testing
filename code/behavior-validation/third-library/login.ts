// 第三方库
import { cxrLogin } from "cxr";

const state = {
  tipString: "",
};

export function login(username: string, password: string) {
  cxrLogin(username, password);
  // 做一系列的处理
  // 最后调用 cxr.login
  //   const isLogin = cxrLogin(username, password);

  //   if (isLogin) {
  //     state.tipString = "登录成功拉";
  //   }
}

export function getTipString() {
  return state.tipString;
}

import { cxrLogin } from "cxr";

const state = {
  tipString: "",
};

export function login(username: string, password: string) {
  cxrLogin(username, password);
}

export function loginV2(username: string, password: string) {
  const isLogin = cxrLogin(username, password);

  if (isLogin) {
    state.tipString = "登录成功拉";
  }
}

export function getTip() {
  return state.tipString;
}

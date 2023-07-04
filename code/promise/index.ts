export function fetchUserData() {
  return new Promise((resolve, reject) => {
    resolve("1");
  });
}

export function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, time);
  });
}

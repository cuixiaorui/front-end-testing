export function increaseCount(flag = "") {
  let count = Number(localStorage.getItem("count")) || 0;

  count++;

  localStorage.setItem("count", count + "");

  if (flag === "error") {
    throw new Error("increase count is fail");
  }
}

export function getCount() {
  return Number(localStorage.getItem("count"));
}

export function clearCount() {
  localStorage.removeItem("count");
}

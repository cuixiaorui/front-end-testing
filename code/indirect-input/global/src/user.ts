export function doubleUserAge() {
  const userAge = localStorage.getItem("userAge");
  return Number(userAge) * 2;
}

export function doubleInnerWidth() {
  return innerWidth * 2;
}

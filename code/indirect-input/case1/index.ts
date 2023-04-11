import { fetchUserAge, userAge } from "./user";

// 直接 input
function add(a: number, b: number) {
  return a + b;
}

// 间接的 input
export function doubleUserAge(): number {
  return userAge() * 2;
}
export async function fetchDoubleUserAge(): Promise<number> {
  const userAge = await fetchUserAge();
  return userAge * 2;
}

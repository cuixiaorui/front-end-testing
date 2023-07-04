import { userAge } from "./env";
export function doubleUserAge() {
  return Number(import.meta.env.VITE_USER_AGE) * 2;
}

export function doubleUserAgeNew() {
  return Number(userAge()) * 2;
}

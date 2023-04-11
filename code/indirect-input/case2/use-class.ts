import { User } from "./User";

export function doubleUserAge(): number {
  const user = new User();
  console.log(user)

  // return user.getAge() * 2;
  return user.age * 2
}

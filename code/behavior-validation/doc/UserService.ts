import { Database, User } from "./database";

export class UserService {
  constructor(private database: Database) {}

  createUser(name: string): User {
    const id = Math.floor(Math.random() * 1000);
    const newUser: User = { id, name };
    this.database.addUser(newUser);
    return newUser;
  }

  findUser(id: number) {
    return this.database.getUser(id);
  }
}

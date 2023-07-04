import { vi, it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

describe("UserService", () => {
  it("should create user ", () => {
    // setup
    Database.prototype.addUser = vi.fn()
    const database = new Database();

    // vi.spyOn(database, "addUser")

    // addUser.isCalled = false
    // addUser.isCalled = true
    console.log(database.addUser)
    const userService = new UserService(database);

    userService.createUser("cxr")

    expect(database.addUser).toBeCalled()

  });
});

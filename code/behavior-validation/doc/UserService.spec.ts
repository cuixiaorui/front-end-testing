import { vi, it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

describe("UserService", () => {
  it("should create user ", () => {
    // mock 只要验证 + 改变了行为了 这种就叫做 mock 测试替身 
    // 没有验证+ 改变行为的话  那么就是 spy
    const addUser = vi.fn();
    Database.prototype.addUser = addUser;

    const database = new Database();

    const userService = new UserService(database);

    const user = userService.createUser("cxr");

    // expect(userService.findUser(user.id)?.name).toBe("cxr");
    // 优先使用状态验证  
    // 状态很难获取到  那么你就只能使用行为验证了
    expect(addUser).toBeCalled();
    expect(addUser).toBeCalledWith({ name: "cxr", id: user.id });
  });
});

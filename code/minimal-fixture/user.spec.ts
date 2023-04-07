import { it, expect, describe } from "vitest";
import { User } from "./User";
import { Product } from "./Product";

describe("User", () => {
  it("should buy a product", () => {
    // 准备测试数据 - 包含无关的信息
    const user = new User("Alice", 25, "alice@example.com", "123 Main St");
    const product = new Product("Book", 15, "A great book on software testing");

    // 测试购买功能
    const result = user.buy(product);
    const expectedResult = "User Alice bought Book";

    expect(result).toBe(expectedResult);
  });

  it("should buy a product", () => {
    const user = new User("Cxr", 18, "cuixiaorui@heihei.com", "beijing");
    const product = new Product("Book", 15, "a great book on frontEnd testing");

    const result = user.buy(product);

    expect(result).toBe("User Cxr bought Book");
  });
  it("v1.0 修改业务代码本身的逻辑 ", () => {
    // 测试也是业务代码的用户之一
    // 测试可以驱动我们程序的设计
    const user = new User("Cxr");
    const product = new Product("Book");

    const result = user.buy(product);

    expect(result).toBe("User Cxr bought Book");
  });
  it("v2.0 委托 工厂函数 来隐藏不需要关心的属性", () => {
    // 委托 来去隐藏不需要关心的属性
    const user = createUser("Cxr");
    const product = createProduct("Book");

    const result = user.buy(product);

    expect(result).toBe("User Cxr bought Book");
  });

  it("v3.0 虚拟对象的方式", () => {
    // 虚拟对象的方式
    const user = new User("Cxr");
    const product = { name: "Book" } as Product;

    const result = user.buy(product);

    expect(result).toBe("User Cxr bought Book");
  });
});

function createUser(name: string) {
  return new User(name, 18, "cuixiaorui@heihei.com", "beijing");
}

function createProduct(name: string) {
  return new Product(name, 15, "a great book on frontEnd testing");
}

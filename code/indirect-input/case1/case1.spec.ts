import { doubleUserAge, fetchDoubleUserAge } from "./index";
import { beforeEach, vi, it, expect, describe } from "vitest";
import { userAge, fetchUserAge } from "./user";

// stub   存根
// 替换掉真实的逻辑实现
vi.mock("./user", () => {
  return {
    fetchUserAge: () => Promise.resolve(2),
  };
});

// vi.mock("./user");

// 我们是否可以控制 间接input 的值呢 ( user userAge)
describe("间接input", () => {
//   beforeEach(() => {
//     vi.doMock("./user", () => {
//       return {
//         userAge: () => 2,
//       };
//     });
//   });
  it("first", async () => {
    // given
    //     vi.mocked(userAge).mockReturnValue(2);
//     const { doubleUserAge } = await import("./index");

    // when
    const r = await fetchDoubleUserAge();

    // then
    expect(r).toBe(4);
  });

  it("second", () => {
    //     vi.mocked(userAge).mockReturnValue(4);

//     console.log(userAge());
  });
});

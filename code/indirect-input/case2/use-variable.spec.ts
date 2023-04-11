import { it, expect, describe, vi } from "vitest";
import { tellName } from "./use-variable";
import { name, gold } from "./config";

vi.mock("./config", async (importOriginal) => {
  return { ...await importOriginal() as any, name: "xiaohong" };
});

describe("使用变量的形式", () => {
  it("tell name ", () => {
    console.log(gold);
    // when
    const name = tellName();

    // then
    expect(name).toBe("xiaohong-heiheihei");
  });
});

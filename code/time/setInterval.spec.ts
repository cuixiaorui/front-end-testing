import { vi, it, expect, describe } from "vitest";
import { sayHi } from "./setInterval";

describe("setInterval", () => {
  it("should call one", () => {
    vi.useFakeTimers();
    vi.spyOn(console, "log");
    sayHi();
    //     vi.advanceTimersToNextTimer()
    //     vi.advanceTimersToNextTimer()
//     vi.advanceTimersByTime(1100);

    expect(console.log).toBeCalledWith("hi");
  });
});

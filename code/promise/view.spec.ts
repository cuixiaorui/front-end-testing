import { it, expect, describe } from "vitest";
import { View } from "./view";
import flushPromises from "flush-promises";

describe("View", () => {
  it("should change count", async () => {
    const view = new View();

    view.render();
    await flushPromises();

    expect(view.count).toBe(3);
  });
});

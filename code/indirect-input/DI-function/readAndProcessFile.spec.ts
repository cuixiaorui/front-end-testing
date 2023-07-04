import { it, expect, describe } from "vitest";
import { readAndProcessFile, FileReader } from "./readAndProcessFile";

describe("di function", () => {
  it("read and process file", () => {
    class StubFileReader implements FileReader {
      read() {
        return "cxr";
      }
    }

    const result = readAndProcessFile("./test", new StubFileReader());

    expect(result).toBe("cxr-> test unit");
  });
});

import { processData, Data } from "./dataProcessor";
import { it, expect, describe } from 'vitest'

const testData: Data[] = [
  { category: "regular", value: 100, date: "2021-02-01" },
  { category: "discounted", value: 200, date: "2021-03-01" },
  { category: "excluded", value: 300, date: "2021-04-01" },
  { category: "regular", value: 400, date: "2020-12-31" },
];

describe("processData", () => {
  it("should filter out excluded and outdated data", () => {

    const { result } = processData(testData);

    expect(result).toEqual([
      { category: "regular", value: 100, date: "2021-02-01" },
    ]);

  });

  it("should calculate the correct total", () => {

    const { total } = processData(testData);

    expect(total).toBe(100);
  });
});

export type Data = {
  category: string;
  value: number;
  date: string;
};

// 1.  过滤不满足条件的数据
// 2.  计算数据的总和
export function processData(data: Data[]): { result: Data[]; total: number } {
  // 过滤掉不满足条件的数据
  const filteredData = data.filter(
    (item) =>
      item.category !== "excluded" &&
      new Date(item.date) >= new Date("2021-01-01")
  );

  // 按日期排序
  const sortedData = filteredData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // 计算总和
  const total = sortedData.reduce((acc, cur) => acc + cur.value, 0);

  // 根据业务逻辑处理数据
  const result = sortedData.map((item) => {
    if (item.category === "discounted") {
      return { ...item, value: item.value * 0.9 };
    }
    return item;
  });

  return { result, total };
}

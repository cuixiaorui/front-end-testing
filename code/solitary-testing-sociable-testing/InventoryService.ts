const stock = [
  {
    name: "北冰洋",
    count: 10,
  },
];
// 库存服务
export function checkStock(order) {
  // 真实的逻辑
  // const item = stock.find((item) => order.name === item.name);

  // if (!item) return false;

  // return item.count > 0;
}

export function updateStock(item) {
  const stockItem = stock[item.name];

  if (stockItem) {
    stockItem.count += item.count;
  } else {
    stock.push(item);
  }
}

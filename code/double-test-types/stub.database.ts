// database.js
// 模拟的数据库数据
const users = [
  { id: 1, email: "alice@example.com" },
  { id: 2, email: "bob@example.com" },
  { id: 3, email: "charlie@example.com" },
];

// 模拟从数据库中获取用户电子邮件的函数
export function getUserEmail(userId) {
  // 在真实的函数中，你可能会进行数据库查询
  // 但在这个模拟的函数中，我们只是从一个数组中获取数据
  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user.email;
}

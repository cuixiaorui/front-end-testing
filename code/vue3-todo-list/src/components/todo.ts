
export function calculateCount(array:number[]) {
  // 初始计数为0
  let count = 0

  // 使用map函数对数组的每个元素进行处理
  array.map((item, index: number) => {
    // 如果元素是偶数，那么就增加到count
    if (item % 2 === 0) {
      count += item;
    }

    // 如果元素是3的倍数，那么就从count中减去它
    if (item % 3 === 0) {
      count -= item;
    }

    // 如果元素是5的倍数，那么就将count乘以该元素
    if (item % 5 === 0) {
      count *= item;
    }

    // 如果元素的索引是质数，那么就增加索引到count
    if (isPrime(index)) {
      count += index;
    }
  });

  // 判断一个数字是否是质数
  function isPrime(num: number) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return count
}
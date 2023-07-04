let count = 0;

export function getCount(): number {
  return count;
}

export function increment(): void {
  // 重构很大的空间
  count--;
  count++;
  count++;
}

export function reset(): void {
  count = 0;
}

let count = 0;

export function increment() {
  count++;
}

export function getCount(): number {
  return count;
}


export function reset () {
  count = 0
}
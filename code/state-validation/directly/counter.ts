export class Counter {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increment(): void {
    this.count++;
  }

  reset(): void {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}

export class Engine {
  start() {
    this.isStart = true;
  }

  private isStart;
  running() {
    return this.isStart;
  }
}

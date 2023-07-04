import { Tires } from "./tires";
import { Engine } from "./engine";

export class Car {
  public engine: Engine;
  private tiresList: Tires[];
  constructor(engine: Engine) {
    this.engine = engine
    this.tiresList = [
      new Tires("1"),
      new Tires("2"),
      new Tires("3"),
      new Tires("4"),
    ];
  }

  start() {
    this.engine.start();
  }
}

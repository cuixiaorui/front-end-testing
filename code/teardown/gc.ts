export class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    return `hi, my name is ${this.name}. How are you`;
  }

  clear() {
    // clear logic
  }
}

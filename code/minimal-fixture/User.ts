import { Product } from "./Product";

export class User {
  name: string;
  age: number;
  email: string;
  address: string;
  constructor(name: string, age: number = 0, email: string = "", address: string = "") {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }

  buy(product: Product) {
    return `User ${this.name} bought ${product.name}`;
  }
}

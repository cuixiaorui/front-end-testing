export class Product {
  name: any;
  price: any;
  description: any;
  constructor(name: string, price: number = 1, description: string = "") {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

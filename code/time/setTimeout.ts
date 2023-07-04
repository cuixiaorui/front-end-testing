export class User {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  fetchData(callback: (data: string) => void, delay: number): void {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      callback(data);
    }, delay);
  }

  fetchDataV2(callback: (data: string) => void): void {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      callback(data);
    }, 2000);
  }
}

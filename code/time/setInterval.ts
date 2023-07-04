export function sayHi() {
  setTimeout(() => {
    setInterval(() => {
      console.log("hi");
    }, 100);
  }, 1000);
}

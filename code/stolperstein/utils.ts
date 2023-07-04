// url http
// url https
// url ""
// url "dslkfj"
// url "123"
// url 
export function isHttp(url: string): boolean {
  const pattern = /^http:\/\/www\./;
  return pattern.test(url);
}

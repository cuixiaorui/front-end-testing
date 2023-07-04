import { isHttp } from "./utils";

export function fetchWebsite(url: string) {
  "" "ldkjf"
  if (isHttp(url)) {
    fetch(url).then(() => {
      // 做一些处理
    });
  }
}

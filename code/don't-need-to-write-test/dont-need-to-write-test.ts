import { isEqual } from "lodash";
import { getLogger } from "log4js";


// 简单的Getter和Setter
// 这些通常只是读取或设置值，并不涉及任何复杂逻辑。
class User {
  private _name: number;

  constructor(name: number) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: number) {
    this._name = value;
  }
}

// Position {x,y}
class Position {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// 对第三方库的简单包装
// utils.ts
export function areObjectsEqual(obj1: object, obj2: object): boolean {
  return isEqual(obj1, obj2);
}

// 非关键的工作，例如日志记录
// 非关键代码
const logger = getLogger();

function logInfo(message: string) {
  logger.info(message);
}

function getVip5Users(users: { name: string; age: number; level: number }[]) {
  return users.filter((user) => {
    return user.level === 5;
  });
}

// store

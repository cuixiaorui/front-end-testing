// import { readFileSync } from "fs";

// export class ReadAndProcessFile {
//   run(filePath: string) {
//     const content = readFileSync(filePath, { encoding: "utf-8" });

//     return content + "->unit test";
//   }
// }

export interface FileReader {
  read(filePath: string): string;
}

// 构造器
// export class ReadAndProcessFile {
//   private fileReader: FileReader;
//   constructor(fileReader: FileReader) {
//     // fileReader 是个必选项
//     this.fileReader = fileReader;
//   }
//   run(filePath: string) {
//     //     const content = readFileSync(filePath, { encoding: "utf-8" });
//     const content = this.fileReader.read(filePath);

//     return content + "->unit test";
//   }
// }

// 属性
// export class ReadAndProcessFile {
//   run(filePath: string) {
//     //     const content = readFileSync(filePath, { encoding: "utf-8" });
//     const content = this.fileReader.read(filePath);

//     return content + "->unit test";
//   }

//   private _fileReader: FileReader;
//   get fileReader(): FileReader {
//     return this._fileReader;
//   }

//   set fileReader(fileReader: FileReader) {
//     this._fileReader = fileReader;
//   }
// }

// 方法
// 策略模式
export class ReadAndProcessFile {
  run(filePath: string) {
    //     const content = readFileSync(filePath, { encoding: "utf-8" });
    const content = this._fileReader.read(filePath);

    return content + "->unit test";
  }

  private _fileReader: FileReader;
  setFileReader(fileReader: FileReader) {
    this._fileReader = fileReader;
  }
}
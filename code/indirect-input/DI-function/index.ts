import { readAndProcessFile, FileReader } from "./readAndProcessFile";
import { readFileSync } from "fs";

class TextFileReader implements FileReader {
  read(filePath: string) {
    return readFileSync(filePath, { encoding: "utf-8" });
  }
}

const result = readAndProcessFile("example.txt", new TextFileReader());

console.log(result);

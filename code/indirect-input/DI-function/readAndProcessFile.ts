// 接口
export interface FileReader {
  read(filePath: string): string;
}

export function readAndProcessFile(
  filePath: string,
  fileReader: FileReader
): string {
  const content: string = fileReader.read(filePath);
  // 在实际的场景下可能 process 的过程会更复杂一点
  return content + "-> test unit";
}

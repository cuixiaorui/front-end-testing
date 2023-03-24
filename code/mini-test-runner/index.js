import fs from "fs/promises";
import { build } from "esbuild";
import glob from "glob";

// 查找所有以 `.spec.js` 结尾的测试文件
const testFiles = glob.sync("**/*.spec.js");

// 运行所有测试文件
for (const testFile of testFiles) {
  const fileContent = await fs.readFile(testFile, "utf-8");
  await runModule(fileContent + "import { run } from './core.js'; run()");
}

async function runModule(fileContent) {
  try {
    // 转换代码为 CommonJS 格式并捆绑依赖
    const result = await build({
      stdin: {
        contents: fileContent,
        resolveDir: process.cwd()
      },
      write: false,
      bundle: true,
      target: "esnext",
    });

    // 获取转换后的代码
    const transformedCode = result.outputFiles[0].text;
    // 执行代码
    const runCode = new Function(transformedCode);
    runCode();
  } catch (error) {
    console.error("Error executing module:", error);
  }
}

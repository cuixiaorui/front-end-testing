export default {
  title: "FrontEndTesting",
  description: "front end testing",

  themeConfig: {
    logo:"/logo.png",
    sidebar: [
      {
        text: "Why&What",
        items: [
          {
            text: "概述",
            link: "/guide/00-introduction",
          },
          {
            text: "为什么要写测试",
            link: "/guide/01-why-write-testing",
          },
          { text: "自动化思维的体现", link: "/guide/02-automatic-thinking" },
          { text: "单元测试的定义", link: "/guide/03-unit-test-definition" },
          { text: "不写测试的原因", link: "/guide/04-why-not-write-tests" },
          { text: "在什么时候写测试", link: "/guide/05-when-writing-tests" },
        ],
      },
      {
        text: "第一个测试",
        items:[
          {
            text: "编写第一个单元测试",
            link: "/guide/06-write-first-unit-test",
          },
          {
            text: "Vitest Test Api",
            link: "/guide/07-vitest-test-api",
          },
          {
            text: "Vitest Debug",
            link: "/guide/08-vitest-debug",
          },
          {
            text: "Vitest VS Jest",
            link: "/guide/09-vitest-vs-jest",
          },
          {
            text: "实现 mini test runner",
            link: "/guide/10-mini-test-runner",
          },
        ]
      },
      {
        text:"测试四部曲",
        items:[
          {
            text: "准备数据",
            link: "/guide/11-to-prepare-data",
          },
          {
            text: "放置测试数据的策略",
            link: "/guide/12-where-put-test-data",
          },
          {
            text: "程序的输入和输出",
            link: "/guide/13-input-and-output",
          },
          {
            text: "验证的方式",
            link: "/guide/14-verify-way",
          },
          {
            text: "验证哪些内容",
            link: "/guide/15-verify-what",
          },
          {
            text: "测试替身 Test Double",
            link: "/guide/16-test-double",
          },
          {
            text: "测试替身的类型",
            link: "/guide/17-test-double-types",
          },
          {
            text: "Setup 测试替身",
            link: "/guide/18-setup-test-double",
          },
        ]
      }
    ],
  },
};

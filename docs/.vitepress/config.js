export default {
  title: "FrontEndTesting",
  description: "front end testing",

  themeConfig: {
    logo: "/logo.png",
    sidebar: [
      {
        text: "Why&What",
        items: [
          // {
          //   text: "前端单元测试课",
          //   link: "/guide/course-overview",
          // },
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
          { text: "在什么时候写测试", link: "/guide/04-when-writing-tests" },
          { text: "不写测试的原因", link: "/guide/05-why-not-write-tests" },
        ],
      },
      {
        text: "初识 Vitest",
        items: [
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
        ],
      },
      {
        text: "测试四部曲",
        items: [
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
          {
            text: "分层测试",
            link: "/guide/19-layer-test",
          },
          {
            text: "参数化验证",
            link: "/guide/20-parameterized-test",
          },
          {
            text: "测试异步逻辑",
            link: "/guide/21-test-asynchronous",
          },
          {
            text: "测试 api",
            link: "/guide/22-test-api",
          },
          {
            text: "测试第三方库",
            link: "/guide/23-test-third-party-library",
          },
          {
            text: "测试日期",
            link: "/guide/24-test-date",
          },
          {
            text: "拆卸",
            link: "/guide/25-tear-down",
          },
        ],
      },
      {
        text: "测试原则",
        items: [
          {
            text: "只测试一个关注点",
            link: "/guide/26-test-only-one-focus",
          },
          {
            text: "避免条件测试逻辑",
            link: "/guide/27-avoid-condition-test-logic",
          },
          {
            text: "保持测试独立",
            link: "/guide/28-keeping-test-independent",
          },
          {
            text: "保持简单易读",
            link: "/guide/29-easy-and-read",
          },
          {
            text: "易测性设计",
            link: "/guide/30-testable-design",
          },
          {
            text: "使用前门优先",
            link: "/guide/31-use-the-front-door-first",
          },
          {
            text: "隔离 SUT",
            link: "/guide/32-isolation-SUT",
          },
          {
            text: "完备而不重复",
            link: "/guide/53-mature-and-not-repeat",
          },
        ],
      },
      {
        text: "测试坏味道",
        items: [
          {
            text: "低层次的断言",
            link: "/guide/33-low-levels-of-assertions",
          },
          {
            text: "过渡断言",
            link: "/guide/34-transition-assertion",
          },
          {
            text: "魔法字符串",
            link: "/guide/35-magic-string",
          },
          {
            text: "过分保护",
            link: "/guide/36-overprotective",
          },
          {
            text: "冗长安装",
            link: "/guide/37-lengthy-installation",
          },
          {
            text: "人格分裂",
            link: "/guide/38-schizobulia",
          },
          {
            text: "无关附加的细节",
            link: "/guide/40-immaterial-details",
          },
          {
            text: "重复",
            link: "/guide/41-repetition",
          },
          {
            text: "脆弱的测试",
            link: "/guide/42-the-fragile-test",
          },
          {
            text: "缺乏内聚",
            link: "/guide/43-the-lack-of-cohesion",
          },
          {
            text: "注释掉的测试",
            link: "/guide/44-comment-out-the-test",
          },
          {
            text: "歧义注释",
            link: "/guide/45-ambiguity-annotation",
          },
          {
            text: "永不失败的测试",
            link: "/guide/46-never-failed-test",
          },
          {
            text: "说谎的测试",
            link: "/guide/47-the-test-of-lying",
          },
          {
            text: "过于宽松",
            link: "/guide/48-too-loose",
          },
          {
            text: "断言滚轮",
            link: "/guide/49-assertions-roller",
          },
          {
            text: "手动调试",
            link: "/guide/50-manual-debugging",
          },
          {
            text: "手动干预",
            link: "/guide/51-manual-intervention",
          },
          {
            text: "缓慢测试",
            link: "/guide/52-slow-test",
          },
        ],
      },
      {
        text: "设计和可测试性",
        items: [
          {
            text: "面向对象原则 SOLID 和可测试性",
            link: "/guide/54-oop-and-SOLID",
          },
        ],
      },
      {
        text: "项目实战",
        items: [
          {
            text: "Vue3 的页面应用",
            link: "/guide/55-vue3-project",
          },
          {
            text: "Vue3 版本的俄罗斯方块",
            link: "/guide/57-vue3-tetris",
          },
          {
            text: "给 mini-vue 的 runtime core 添加测试",
            link: "/guide/58-mini-vue-runtime-core-add-test",
          },
          {
            text: "一个 TDD 项目",
            link: "/guide/59-tdd-args",
          },
          {
            text: "React 页面应用",
            link: "/guide/56-react-project",
          },
        ],
      },
    ],
  },
};

export default {
  name: "custom cxr",
  setup(global) {
    console.log(" vitest - env - cxr");
    global.localStorage = {
      getItem() {},
      setItem() {},
    };

    return {
      teardown() {
        // called after all tests with this env have been run
      },
    };
  },
};

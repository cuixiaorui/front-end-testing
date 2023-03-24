const tests = [];
const onlyTests = [];
const beforeEachs = [];
const beforeAlls = [];
const afterEachs = [];
const afterAlls = [];
const describes = [];

export const it = test;
export function test(title, callback) {
  tests.push({
    title,
    callback,
  });
}

test.only = (title, callback) => {
  onlyTests.push({
    title,
    callback,
  });
};

export function run() {
  beforeAlls.forEach((beforeAllFn) => {
    beforeAllFn();
  });

  const executiveTests = onlyTests.length > 0 ? onlyTests : tests;

  for (const { title, callback } of executiveTests) {
    beforeEachs.forEach((beforeEachFn) => {
      beforeEachFn();
    });

    try {
      callback();
      console.log(`ok: ${title}`);
    } catch (error) {
      console.log(`error: ${title}`);
    }

    afterEachs.forEach((afterEachFn) => {
      afterEachFn();
    });
  }

  afterAlls.forEach((afterAllFn) => {
    afterAllFn();
  });
}

export function afterEach(fn) {
  afterEachs.push(fn);
}
export function afterAll(fn) {
  afterAlls.push(fn);
}

export function beforeEach(fn) {
  beforeEachs.push(fn);
}

export function beforeAll(fn) {
  beforeAlls.push(fn);
}

export function expect(actual) {
  return {
    toBe(expected) {
      if (actual === expected) {
        console.log("通过");
      } else {
        throw new Error(
          `不通过, actual: ${actual} 不等于 expected: ${expected} `
        );
      }
    },
  };
}

export function describe(title, callback) {
  describes.push({
    title,
    callback,
  });

  callback();
}

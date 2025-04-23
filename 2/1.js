function run() {
    Object.prototype[Symbol.iterator] = function*() {
      yield this.a;
      yield this.b;
    };
  }
  run();
  const [a, b] = {a: 1, b: 2};
  console.log(a, b); // 输出 1 2
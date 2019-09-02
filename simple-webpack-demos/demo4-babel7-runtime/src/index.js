// const set1 = new Set([1, 2]);
// console.log(set1)

const o = {};

const weakmap = new WeakMap();
weakmap.set(o, 1);
console.log(weakmap)

console.log(o);

let abc = () => {};

// @babel/polyfill 模块包括 core-js 和一个自定义的 regenerator runtime 模块
// 用于模拟完整的 ES2015+ 环境
// 对全局范围（global scope）造成污染的


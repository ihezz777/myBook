'use strict'
const lodash_curry = require('lodash').curry;
// 柯里化，将多参函数拆分为单参函数

// const add = function (x, y, z) {
//   return x * y * z
// };
//
// const curry = function (fn) {
//   let args = [].slice.call(arguments, 1);
//   return function() {
//     let newArgs = args.concat([].slice.call(arguments));
//     return fn.apply(this, newArgs)
//   };
// };
//
// const curryAdd = curry(add);
//
// console.log(curryAdd(1, 2, 3));

// 场景
const match = lodash_curry(function(what, str) {
  return str.match(what);
});

const replace = lodash_curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});

const filter = lodash_curry(function(f, ary) {
  return ary.filter(f);
});

const map = lodash_curry(function(f, ary) {
  return ary.map(f);
});
console.log(match('77')('ihezz77')); // [ '77', index: 5, input: 'ihezz77', groups: undefined ]
console.log(replace('77')('88')('ihezz77'))


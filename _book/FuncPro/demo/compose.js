const lodash_curry = require('lodash').curry;
const toUpperCase = function(x) { console.log(1); return x.toUpperCase(); };
const exclaim = function(x) { console.log(2); return x + '!'; };
const replace = function (what, replacement, str) {return str.replace(what, replacement);}

const composeLeft = (...args) => {
  return (data) => {
    return args.reduce((fn1, fn2) => fn2(fn1(data)))
  }
}

const composeRight = (...args) => {
  return (data) => {
    return args.reduceRight((fn1, fn2) => fn2(fn1(data)))
  }
}

const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]

  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const curryReplace = lodash_curry(replace)('!')('?');

// const composeL = composeLeft(toUpperCase, exclaim);
const composeR = compose(curryReplace, toUpperCase, exclaim);
// console.log(composeL('hello world'));
console.log(composeR('hello world'));



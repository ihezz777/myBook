# 柯里化

> 柯里化是将一个多参数函数转换成多个单参数函数。

```
// 柯里化之前
function add(x, y) {
  return x + y;
}

add(1, 2) // 3

// 柯里化之后
function addX(y) {
  return function (x) {
    return x + y;
  };
}

addX(2)(1) // 3
```

#### 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
```
const curry = require('lodash').curry;

const match = curry(function(what, str) {
  return str.match(what);
});

const replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});

const filter = curry(function(f, ary) {
  return ary.filter(f);
});

const map = curry(function(f, ary) {
  return ary.map(f);
});

```

#### 柯里化函数的实现

```
// from: https://juejin.im/post/5b70157bf265da28104f52ab
// es5
var curry = function(fn, arr) {
 arr = arr || []
 return function () {
  var args = [].slice.call(argments);
  var arg = arr.concat(args);
  return arg.length >= fn.length ? fn.apply(null, arg) : curry(fn, arg)
 }
}

// es6
const curry = (fn, arr = []) => (...args) => (
  arg => arg.length >= fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])

// 例：
const f = (a, b, c, d) => { ... }
const curried = curry(f)

curried(a, b, c, d)
curried(a, b, c)(d)
curried(a)(b, c, d)
curried(a, b)(c, d)
curried(a)(b, c)(d)
curried(a)(b)(c, d)
curried(a, b)(c)(d)

```

#### 场景

```js
import { curry } from 'lodash'
const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]

  return fns.reduce((a, b) => (...args) => a(b(...args)))
}
// 模拟场景
const toUpperCase = function(x) { return x.toUpperCase(); };
const exclaim = function(x) { return x + '!'; };
const replace = function (what, replacement, str) {return str.replace(what, replacement);}

const composeFn1 = compose(replace, toUpperCase, exclaim);

const curryReplace = curry(replace)('!')('?');
const composeFn2 = compose(curryReplace, toUpperCase, exclaim);
console.log(composeFn1('hello world'));  // 报错
console.log(composeFn2('hello world'));  // hello world?
```





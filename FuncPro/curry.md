##### 柯里化是将一个多参数函数转换成多个单参数函数。

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

##### 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

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

##### 偏函数

> 一个函数，接受一个多参数的函数且传入部分参数后，返回一个需要更少参数的新函数。

```
import { curry, partial } from 'lodash'

const add = (x, y, z) => x + y + z

const curriedAdd = curry(add)       // <- 只接受一个函数

const addThree = partial(add, 1, 2) // <- 不仅接受函数，还接受至少一个参数
curriedAdd(1)(2)              // <- 柯里化每次都返回一个单参函数

```

##### 常见的科里化函数

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





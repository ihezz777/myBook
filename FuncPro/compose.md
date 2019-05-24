# 组合

#### 如果一直值要经过多个函数才能变成另一个值，就可以将多个函数组合成一个函数

- 函数组合就是将当前函数的返回值作为下一个函数的参带入

```javascript
const compose = function (f, g) {
  return function (x) {
    return f(g(x));
  };
}

var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

shout("send in the clowns"); // "SEND IN THE CLOWNS!"
```

#### 无所不能的reduce

> reduce 接受一个 reducer 函数以及一个初始值，最终返回一个累积值。对于数组的每步迭代，reducer 函数都会被调用，并且向其传入了累积值和当前迭代到的数组元素。

> reudx 中的 reducer 接收一个当前应用状态 state 和 和交互对象 action 作为参数，当前状态就相当于累积值，而 action 就相当于目前处理的元素

```javascript
// 用reduce实现map
const map = (fn, arr) => arr.reduce((acc, item, index, arr) => {
  return acc.concat(fn(item, index, arr));
}, []);

// 用reduce实现filter
const filter = (fn, arr) => arr.reduce((newArr, item) => {
  return fn(item) ? newArr.concat([item]) : newArr;
}, []);

// 用reduce实现some
const some = (fn, arr) => !!filter(fn, arr).length

// 用reduce实现every
const every = (fn, arr) => arr.length === filter(fn, arr).length

```

#### 复合函数

> 如果 y 是 w 的函数，w 又是 x 的函数，即 y = f(w), w = g(x)，那么 y 关于 x 的函数 y = f[g(x)] 叫做函数 y = f(w) 和 w = g(x) 的复合函数。其中 w 是中间变量，x 是自变量，y 是函数值。

#### 常见的组合函数

```javascript
// redux 版
const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

// 一行版，支持多参数，但必须至少传一个函数
const compose = (...fns) => fns.reduceRight((acc, fn) => (...args) => fn(acc(...args)))
// 一行版，只支持单参数，但支持不传函数
const compose = (...fns) => arg => fns.reduceRight((acc, fn) => fn(acc), arg)

// 用reduce实现组合, 从左到右执行
const pipe = (...args) => {
  return (data) => {
    return args.reduce((fn1, fn2) => fn2(fn1(data)))
  }
}

// 从右到左执行
const compose = (...args) => {
  return (data) => {
    return args.reduceRight((fn1, fn2) => fn2(fn1(data)))
  }
}

```

#### 场景

```js
// 目录|——src
//      |—— app.js
//      |—— file.txt
const fs = require('fs');

const composeSync = function (f, g) {
  return function(x) {
    return f(g(x))
  }
};

// 同步读取文件类容
const readFileSync = function (path) {
  return fs.readFileSync(__dirname + '/' + path)
}

// 将数据流转化文本
const fileTostring = function (file) {
  return file.toString()
}

const readFileContent = composeSync(fileTostring, readFileSync);

readFileContent('file.txt') // hello world ihezz777!

// 异步读取文件内容
// ...
const composeAsync = function (f, g) {
  return (x, cd) => {
    g(x, y => cd(f(y)))
  }
};

const readFileAsync = function (path, cd) {
  fs.readFile(`${__dirname}/${path.trim()}`, function (err, data) {
    cd(data)
  })
};

const toFileContent = function (content) {
  return content.toString()
};

const readFileContentASync = composeAsync(toFileContent, readFileAsync);

readFileContentASync("text", result => {
  console.log(result) // 'hello world! ihezz777'
});
```

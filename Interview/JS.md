###### 闭包

> Closure is when a function remembers and accesses variables from outside of its own scope, even when that function is executed in a different scope.

```js
// Closure demo
function cube(x) {
  let z = 1;
  return function larger(y) {
    return x * y * z++;
  };
}

const makeCube = cube(10);
console.log(makeCube(5)); // 50
console.log(makeCube(5)); // 100
```

在控制台查看makeCube.prototype，点开会发现原来是有个[[Scopes]]这个内置属性里的Closure(cube)记住了函数larger返回时记住的变量x和z。如果多嵌套几层函数，也会发现多个Closure(name)在[[Scopes]]的Scopes[]数组里，按序查找变量

如图：

![blockchain](https://user-gold-cdn.xitu.io/2019/4/18/16a30d856665c6dd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

---

###### 传参

1. ['1', '2', '3'].map(parseInt)

###### parseInt(string, radix)接收两个参数，而map函数中接收的回调函数callback(currentValue[, index[, array]])，第二个参数是index，此时如果parseInt的使用就是错误的。

- 解决

```js
// 一元函数: 某个函数上传递一个参数
const unary = fn => arg => fn(arg);

['1', '2', '3'].map(unary(parseInt)) // [1, 2, 3]
```

---

###### 箭头函数和普通函数中 arguments 区别

> 严格模式下不允许使用arguments（规定），并且，普通函数里 arguments 代表了调用时传入的参数，但是箭头函数不是，箭头函数会把 arguments 当成一个普通的变量，顺着作用域链由内而外地查询（词法作用域）arguments可以用[...rest](https://juejin.im/entry/596c7fc15188254b6237a29c)取代，所以完全没必要追求argument。


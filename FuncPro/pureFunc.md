在系统里，纯函数与非纯函数相比，在可测试性、可维护性、可移植性、并行计算和可扩展性方面都有着巨大的优势。

##### 相同的输入总是会返回相同的输出

```
var xs = [1,2,3,4,5];

// 纯的
xs.slice(0,3); // [1,2,3]
xs.slice(0,3); // [1,2,3]
xs.slice(0,3); // [1,2,3]

// 不纯的
xs.splice(0,3); // [1,2,3]
xs.splice(0,3); // [4,5]
xs.splice(0,3); // []
```

##### 不依赖于外部状态

````
// 纯的
var checkAge = function(age) {
  var minimum = 21;
  return age >= minimum;
};

// 不纯的
var minimum = 21;
var checkAge = function(age) {
  return age >= minimum;
};
```

##### 不产生副作用

> 当一个函数的输出不受外部环境影响，同时也不影响外部环境时

##### 小函数大作为

`const identity = v => v;`

###### 场景

```
const arr = [1, false, 2, true, 3, 'true', null]
console.log(arr.some( identity )); // false
console.log(arr.filter( identity )); // [1, 2, true, 'true']
```

- spreadArgs & gatherArgs

`const spreadArgs = fn => argsArr => fn( ...argsArr );`

###### 场景

```
function cube(x, y, z) {
  return x * y * z;
}

function make(fn, points) {
  return fn(points);
}

console.log(make(cube, [3, 4, 5])); // NaN
console.log(make(spreadArgs(cube), [3, 4, 5])); // 60

```

`const gatherArgs = fn => (...argsArr) => fn( argsArr );`

###### 场景

```
function combineFirstTwo([v1, v2]) {
  return v1 + v2;
}

console.log([1, 2, 3, 4, 5].reduce(combineFirstTwo)); // Uncaught TypeError
console.log([1, 2, 3, 4, 5].reduce(gatherArgs(combineFirstTwo))); // 15

```

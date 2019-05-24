# 函数

#### 定义函数类型

```typescript
// function (参数1: 参数类型, 参数2?: 可选参数类型(ps: 必须在必选参数后面，除非他有默认参数), ...rest: 剩余参数类型（e.g: string[])): 返回值类型 {
// return 返回值
// }
```

- 定义函数有函数声明和函数表达式两种形式

函数声明

```typescript
let age : number = 22;
//            参数类型    返回值类型
function f(age:number) : string {
    return `找到了${age}的小哥哥`;
}

let res : string = f(age);
console.log(res)
```

函数表达式

```typescript
let f1 = (age:number) : string => {
    return `找到了${age}的小哥哥`;
}
let age1 :number = 21;
let res1 : string = f1(age1);
console.log(res1)

// 或

// let fn: (x: Type, y: Type) => Type = (x, y) => {}

//例子
var run3: (x: number, y: number) => string = function(x: number, y: number): string{
    return 'run3';
}
console.log(run3(1, 2))


//当给变量run3指定类型的时候，应该是函数的参数和返回值的约束类型。如果用后面学到的ts类型推论，可以简写为：

var run4: (x: number, y: number) => string = function(x, y){ 
// 类型推论可以确定函数的参数和返回值类型，也就可以省略类型指定
    return 'run4';
}
console.log(run4(1, 2))
```

- 重载

```typescript
function padding(all: number): object;
function padding(topAndBottom: number, leftAndRight: number): object;
function padding(top: number, right: number, bottom: number, left: number): object;
function padding(a: number, b?: number, c?: number, d?: number): object {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  }
  else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

console.log(padding(12))
console.log(padding(12, 14))
// console.log(padding(12, 14, 13)) error
console.log(padding(12, 14, 13, 14))
```

编译后：

```js
function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
console.log(padding(12));
console.log(padding(12, 14));
// console.log(padding(12, 14, 13)) error
console.log(padding(12, 14, 13, 14));

```


# 接口

#### 当需要对多个属性进行类型判断时

```typescript
interface IPerson {
  name: string;
  age: number;
  readonly sex: string;
  // 索引签名，表示接受任意数量合类型的的属性
  // TypeScript支持两种索引签名：字符串和数字。
  // 这个索引签名表示了当用 string 去索引 IPerson 时会得到 any 类型的返回值。
  [propName: string]: any;
}



function addPerson(person: IPerson):void {
  console.log(person)
}

addPerson({
  name: 'he',
  age: 26,
  sex: '男',
  occupation: 'web'
})
```

#### 函数的接口

```typescript
interface IName {
  // 声明函数类型
  // (参数: 参数类型): 返回值类型
  (params1: string): string
}

// 创建一个函数类型的变量
let setName:IName;
// 并将一个同类型的函数赋值给这个变量。
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是匹配的。如果你不想指定类型 function(name){...}，TypeScript的类型系统会推断出参数类型，
setName = function (name: string) {
  return name
}
```

#### 类的接口

- 需要注意的是：当一个类实现了一个接口时，只对其实例部分进行类型检查，类的静态部分不再检查范围内(constructor存在于类的静态部分)。
- 解决方法：对类型的静态部分和实例部分分开检查

```typescript
// 静态部分
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
// 实例部分
interface ClockInterface {
    currentTime: Date;
  	showTime(time: Date):void
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

// 类需要实现接口的属性和方法
class DigitalClock implements ClockInterface {
    currentTime: Date; // 如果不声明ClockInterface接口上的属性，则会提示错误
    constructor(h: number, m: number) { }
    showTime(){}
}

let digital = createClock(DigitalClock, 12, 17);

```

#### 继承接口

- 一个接口可以继承一个或多个接口，创建出多个接口的合成接口。

```typescript
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}
```

#### [小技巧](https://zhuanlan.zhihu.com/p/39620591)

- 巧用 typeof 将一个对象定义为一个接口

```typescript
// 我们一般先写类型，再使用：
interface Opt {
  timeout: number
}
const defaultOption: Opt = {
  timeout: 500
}

// 有时候可以反过来：
const defaultOption = {
  timeout: 500
}
type Opt = typeof defaultOption
```

- 巧用查找类型 引用其他类型

```typescript
interface Person {
  addr: {
    city: string,
    street: string,
    num: number,
  }
}
// 1.
interface Address {
  city: string,
  street: string,
  num: number,
}
interface Person {
  addr: Address,
}

// 2.
Person["addr"]
```

- 巧用查找类型+泛型+keyof 根据传入的类型迭代匹配的类型进行检查

```typescript
interface API {
  '/user': { name: string },
  '/menu': { foods: number },
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}
```

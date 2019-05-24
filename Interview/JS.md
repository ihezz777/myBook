#### 闭包

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

#### 传参

1. ['1', '2', '3'].map(parseInt)

#### parseInt(string, radix)接收两个参数，而map函数中接收的回调函数callback(currentValue[, index[, array]])，第二个参数是index，此时如果parseInt的使用就是错误的。

- 解决

```js
// 一元函数: 某个函数上传递一个参数
const unary = fn => arg => fn(arg);

['1', '2', '3'].map(unary(parseInt)) // [1, 2, 3]
```

---

#### 箭头函数和普通函数中 arguments 区别

> 严格模式下不允许使用arguments（规定），并且，普通函数里 arguments 代表了调用时传入的参数，但是箭头函数不是，箭头函数会把 arguments 当成一个普通的变量，顺着作用域链由内而外地查询（词法作用域）arguments可以用[...rest](https://juejin.im/entry/596c7fc15188254b6237a29c)取代，所以完全没必要追求argument。

#### 实现一个 new 操作符

原生 new 操作符具体做了哪些事情

- 它创建了一个全新的对象。

- 它会被执行[[Prototype]]（也就是__proto__）链接。

- 它使this指向新创建的对象。

- 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。

- 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。

```js
function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}
var obj = New(A, 1, 2);
// equals to
var obj = new A(1, 2);

```

#### 实现一个JSON.stringify

- Boolean | Number| String 类型会自动转换成对应的原始值。

- undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）

- 不可枚举的属性会被忽略

- 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。

```js
function jsonStringify(obj) {
    let type = typeof obj;
    if (type !== "object") {
        if (/string|undefined|function/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = []
        let arr = Array.isArray(obj)
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = '"' + v + '"';
            } else if (type === "object") {
                v = jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
}
jsonStringify({x : 5}) // "{"x":5}"
jsonStringify([1, "false", false]) // "[1,"false",false]"
jsonStringify({b: undefined}) // "{"b":"undefined"}"

```

#### 实现一个call或 apply

- 将函数设为对象的属性, 将函数设为对象的属性, 将函数设为对象的属性

- 指定this到函数并传入给定参数执行函数

- 如果不传入参数，默认指向为 window

- 执行&删除这个函数

**总结：** 将被调用的函数（bar）设置成传入上下文（foo）的属性，然后执行这个方法拿到执行结果删除这个属性后返回结果

```js
// call

Function.prototype.call2 = function(content = window) {
    // 将函数设为对象的属性, 将函数设为对象的属性, 将函数设为对象的属性
    // foo = {value: 1, bar: this}
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content.fn;
    return result;
}
let foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.call2(foo, 'black', '18') // black 18 1


// apply
Function.prototype.apply2 = function(context = window) {
    context.fn = this
    let result;
    // 判断是否有第二个参数
    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
// ISSUES-1 如果第一个参数为原始类型(string, number, boolean, null, undefined)时，无法为值添加属性（context.fn = this）

```

#### 实现一个bind

```js
Function.prototype.bind2 = function(content) {
    // 若没问参数类型则从这开始写
    let fn = this;
    let args = [...arguments].slice(1);
    
    let resFn = function() {
        return fn.apply(this instanceof resFn ? this : content,args.concat(...arguments) )
    }
    function tmp() {}
    tmp.prototype = this.prototype;
    resFn.prototype = new tmp();
    
    return resFn;
}
```

#### 防抖（debounce）和 节流（Throttling）

- 防抖

> 当一次事件发生后，事件处理器要等一定阈值的时间，如果这段时间过去后 再也没有 事件发生，就处理最后一次发生的事件。

- 节流 

> 可以将一个函数的调用频率限制在一定阈值内

```js
// 防抖动函数
function debounce(fn,wait=50,immediate) {
    let timer;
    return function() {
        if(immediate) {
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(this,arguments)
        },wait)
    }
}

// 节流函数
function throttle(fn, wait) {
	let prev = new Date();
	return function() { 
	    const args = arguments;
		const now = new Date();
		if (now - prev > wait) {
			fn.apply(this, args);
			prev = new Date();
		}
	}

```

#### 重载的实现

> 函数或者方法有相同的名称，但是参数个数或类型不相同的情形，这样的同名不同参的函数或者方法之间，互相称之为重载函数或方法。

- 根据参数判断实现

```js
people.find = function () {
  switch (arguments.length) {
    case 0:
      return this.values;

    case 1:
      return this.values.filter((value) => {
        var firstName = arguments[0];
        return value.indexOf(firstName) !== -1 ? true : false;
      });

    case 2:
      return this.values.filter((value) => {
        var fullName = `${arguments[0]} ${arguments[1]}`;
        return value.indexOf(fullName) !== -1 ? true : false;
      });
  }
};

console.log(people.find());                 // ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"]
console.log(people.find('Dean'));           // ["Dean Edwards", "Dean Tom"]
console.log(people.find('Dean', 'Edwards'));   // ["Dean Edwards"]
```

- 利用arguments和闭包实现重载

```js
function addMethod (object, name, fn) {
  // 把前一次添加的方法存在一个临时变量old中
  var old = object[name];

  // 重写object[name]方法
  object[name] = function () {
    if (fn.length === arguments.length) {
      // 如果调用object[name]方法时，如果实参和形参个数一致，则直接调用
      return fn.apply(this, arguments);
    } else if (typeof old === 'function') {
      // 如果实参形参不一致，判断old是否是函数，如果是，就调用old
      return old.apply(this, arguments);
    }
  };
}

addMethod(people, 'find', function() {
  return this.values;
});

addMethod(people, 'find', function(firstName) {
  return this.values.filter((value) => {
    return value.indexOf(firstName) !== -1 ? true : false;
  });
});

addMethod(people, 'find', function(firstName, lastName) {
  return this.values.filter((value) => {
    var fullName = `${firstName} ${lastName}`;
    return value.indexOf(fullName) !== -1 ? true : false;
  });
});

console.log(people.find());                     // ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"]
console.log(people.find('Dean'));               // ["Dean Edwards", "Dean Tom"]
console.log(people.find('Dean', 'Edwards'));    // ["Dean Edwards"]
```





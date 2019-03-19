# 函子

##### 函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器----函子。函子接受各种函数，处理容器内部的值。

```
class Functor {
  constructor(val) { 
    this.val = val; 
  }
  map(f) {
    return new Functor(f(this.val));
  }
}
Functor.of = function(val) {
  return new Functor(val);
};
```

##### Maybe函子

> 函子接受各种函数，处理容器内部的值。这里就有一个问题，容器内部的值可能是一个空值（比如null），而外部函数未必有处理空值的机制，如果传入空值，很可能就会出错。

```
class Maybe extends Functor {
  map(f) {
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
  }
}
```

##### Either函子

> 条件运算if...else是最常见的运算之一，函数式编程里面，使用 Either 函子表达。

```

```

##### ap函子

> 不同类型函子间的调用，例如A函子的值是函数，B函子的值是字符串

```
function addTwo(x) {
  return x + 2;
}

const A = Functor.of(2);
const B = Functor.of(addTwo)

class Ap extends Functor {
  ap(F) {
    return Ap.of(this.val(F.val));
  }
}

// ap 函子的意义在于，对于那些多参数的函数，就可以从多个容器之中取值，实现函子的链式操作。
function add(x) {
  return function (y) {
    return x + y;
  };
}

Ap.of(add).ap(Maybe.of(2)).ap(Maybe.of(3));
```

##### Monad 函子

> Monad 函子的作用是，总是返回一个单层的函子

```

```







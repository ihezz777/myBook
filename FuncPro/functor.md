# 函子

#### 函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器----函子。函子接受各种函数，处理容器内部的值。

> 所谓 functor（函子），相当于一个容器，接受任何类型，能够对其进行 map 操作的对象。这些对象包括了单值对象（single valued-objects）、流（streams）、树（trees）、对象（objects）等等。该方法能够将某一集合映射到另一集合。

例如一个值（value）需要经过多个函数处理才能得到，通过之前的学习我们可以通过组合（compose）得到这个值。例如：

```js
let value = compose(handleFn1, handleFn2, handleFn3);
```

但是如果队这个值的处理顺序要求很严格, compose 方式的可读性可能就不是很好。那么我们可以用函子的方式来处理这个值

- [在函子的 map 方法中接受一个函数参数，然后返回一个新的函子，新的函子中包含的值是被函数参数处理过后返回的值。该方法将函子里面的每一个值，映射到另一个函子。](https://juejin.im/post/5b4ac0d0f265da0fa959a785#heading-4)

```js
let value = functor.of(val).map(handleFn1).map(handleFn2).map(handleFn3)
```

#### 函子的实现

```javascript
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

#### Haskell 中，functor 类型被定义为如下形式

> fmap :: (a -> b) -> f a -> f b  

fmap 接受一个函数参数，该函数接受一个参数 a，并返回一个 b，最终，fmap 完成了从 f a 到 f b 的映射。f a 及 f b 可以被读作 “一个 a 的 functor” 和“一个 b 的 functor”，亦即 f a 这个容器容纳了 a，f b 这个容器容纳了 b。

#### 函子的定律

- 同一性

```javascript
f.map(x => x) == f
```

- 组合性

```javascript
F.map(x => f(g(x))) == F.map(g).map(f)
```

#### 自函子（Endofunctors）

> endofunctor（自函子）是一个能将一个范畴映射回相同范畴的 functor。

- 一个 functor 能够完成任意范畴间映射: F a -> F b

```javascript
// fmap 完成了从 f a 到 f b 的映射。

const f = [1, 2, 3];
f.map((a) => a * 2); // [2, 4, 6]
```

- 一个 endofunctor 能够完成相同范畴间的映射：F a -> F a

```javascript
f.map(x => x) == f
```

#### Maybe函子

> 函子接受各种函数，处理容器内部的值。这里就有一个问题，容器内部的值可能是一个空值（比如null），而外部函数未必有处理空值的机制，如果传入空值，很可能就会出错。

```
class Maybe extends Functor {
  map(f) {
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
  }
}
```

#### Either函子

> 条件运算if...else是最常见的运算之一，函数式编程里面，使用 Either 函子表达。

```

```

#### ap函子

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

#### Monad 函子

> Monad 函子的作用是，总是返回一个单层的函子

```

```

[原文链接](https://github.com/xitu/gold-miner/blob/master/TODO/functors-categories.md)
[ts实现函子](https://gist.github.com/lierdakil/2ece55b7684c5923b1ea4c36df643455)







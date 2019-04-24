# PointFree 风格

- 在函数式编程的世界中，有这样一种很流行的编程风格。这种风格被称为 tacit programming，也被称作为 point-free，point 表示的就是形参，意思大概就是没有形参的编程风格。

```
// 这就是有参的，因为 word 这个形参
var snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_');

// 这是 pointfree，没有任何形参
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
```

- 一个 pointfree 的函数可能是由众多非 pointfree 的函数组成的，也就是说底层的基础函数大都是有参的，pointfree 体现在用基础函数组合而成的高级函数上，这些高级函数往往可以作为我们的业务函数，通过组合不同的基础函数构成我们的复制的业务逻辑。

[原文链接](https://juejin.im/post/5c6e08276fb9a04a027af1de#heading-0)

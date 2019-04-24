# 偏函数

> 柯里化和偏函数确实很相似，所以这两种技术很容易被混淆。它们主要的区别在于参数传递的内部机制与控制

###### 区别

- 柯里化在每次分布调用时都会生成嵌套的一元函数。在底层 ，函数的最终结果是由这些一元函数逐步组合产生的。同时，curry 的变体允许同时传递一部分参数。因此，可以完全控制函数求值的时间与方式。

- 偏函数将函数的参数与一些预设值绑定(赋值)，从而产生一个拥有更少参数的新函数。改函数的闭包中包含了这些已赋值的参数，在之后的调用中被完全求值。

###### 偏函数的实现

```
import { curry, partial } from 'lodash'

const add = (x, y, z) => x + y + z

const curriedAdd = curry(add)       // <- 只接受一个函数

const addThree = partial(add, 1, 2) // <- 不仅接受函数，还接受至少一个参数
curriedAdd(1)(2)              // <- 柯里化每次都返回一个单参函数

// 通用的部分应用函数的核心实现
function partial(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

// 通用的部分应用函数的核心实现
function partial(fn, ...args) {
    return fn.bind(null, ...args)
}

```

###### 场景

- 当一个函数被多个地方调用，并且调用的参数大部分相同时[原文地址](https://juejin.im/post/5c6e08276fb9a04a027af1de#heading-0)

```js
function debug(type, firstArg, secondArg) {
    if(type === 'log') {
        console.log(firstArg, secondArg)
    } else if(type === 'info') {
        console.info(firstArg, secondArg)
    } else if(type === 'warn') {
        console.warn(firstArg, secondArg)
    } else {
        console.error(firstArg, secondArg)
    }
}

const logDebug = 部分应用(debug, 'log')
const infoDebug = 部分应用(debug, 'info')
const warnDebug = 部分应用(debug, 'warn')
const errDebug = 部分应用(debug, 'error')

logDebug('log:', '测试部分应用')
infoDebug('info:', '测试部分应用')
warnDebug('warn:', '测试部分应用')
errDebug('error:', '测试部分应用')

```

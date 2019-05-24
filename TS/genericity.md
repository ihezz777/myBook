声明一个泛型函数，调用者需要指定这个函数的类型

```typescript
// 声明
function MyConsole<T>(p1: T): T {
  return p1
}

// 使用

MyConsole<string>('hello word')
```


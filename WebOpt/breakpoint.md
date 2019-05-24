#### DOM断点

1. 在 chrome 开发者工具中打开 element 面板。
2. 右键单击需要断点的节点
3. 选择 break on
4. 满足 subtree modifications(子集被修改)、attribute modifications(属性被修改)、node removal(节点被删除)会触发断点
5. 可在断点除的 call tack(堆栈信息)中查找函数调用顺序找到执行这个操作的函数

#### ajax断点

![alt](https://user-gold-cdn.xitu.io/2019/5/15/16abaec248372fda?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![alt](https://user-gold-cdn.xitu.io/2019/5/15/16abae00f1f7396f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
[原文地址](https://juejin.im/post/5cd54ca5e51d45368a619a8b#heading-7)

#### 在线调试

1. 在source面板二级页签Overrides页签中点击select folder for overrides，选择一个本地映射目录，然后顶部弹出一个确认提示一定要选择允许。
2. 修改代码，刷新页面后。浏览器会执行你修改后的代码

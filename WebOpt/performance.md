#### 打开性能测试页面

- https://googlechrome.github.io/devtools-samples/jank/

> 谷歌性能测试页面，点击添加按钮可增加页面的复杂

#### 手动降低页面的处理性能

![alt](https://user-gold-cdn.xitu.io/2019/5/7/16a91bbf1faa7d78?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### FPS

- 页面每秒帧数, fps = 60 性能极佳, fps < 24 会让用户感觉到卡顿，因为人眼的识别主要是24帧

- 红色： 意味着帧数已经下降到影响用户体验的程度

- 绿色：其实就是Fps指数，所有绿色柱体高度越高，性能越好

未优化的页面

![alt](https://user-gold-cdn.xitu.io/2019/5/7/16a91bbfbb880976?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

已优化的页面

![alt](https://user-gold-cdn.xitu.io/2019/5/7/16a91bc018eef3d8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### Frames(帧)

- 查看特点的帧，及这帧渲染所需要的时间【渲染时间 ~ \[1000/渲染时间](帧数)】

- 点击可查看详情信息.duration: 渲染时间越少 fps 越高

![alt](https://user-gold-cdn.xitu.io/2019/5/7/16a91bc05237f3f0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 开启fps meter开关

- 在chrome中，还有格more tools选项，选中rendering选项

![alt](https://user-gold-cdn.xitu.io/2019/5/7/16a91bc07be97f8d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### Summary(总结)

![alt](https://user-gold-cdn.xitu.io/2019/5/7/16a91bc08a46f3cf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 统计页面渲染的整个耗时

#### Main 每帧执行的脚本（可在这一步查看影响页面性能的方法）

- 右上角有红色三角符号的就是 chrome 推断出影响页面性能的脚本

[原文地址](https://juejin.im/post/5cd15712e51d453a393af4c5)


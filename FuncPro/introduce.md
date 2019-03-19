##### 命令式（怎么做）

```
// 命令式
var makes = [];
for (i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}
```

##### 声明式（做什么）

```
// 声明式
var makes = cars.map(function(car){ return car.make; });
```
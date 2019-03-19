### 浮点数相加

```javascript
function add(num1, num2) {  
    var decimalLen1 = (num1.toString().split('.')[1] || '').length; 
    var decimalLen2 = (num2.toString().split('.')[1] || '').length; 
    var baseNum = Math.pow(10, Math.max(decimalLen1, decimalLen2));  
    return (num1 * baseNum + num2 * baseNum) / baseNum;
 }
 console.log(add(0.1 , 0.2)); //0.3
```
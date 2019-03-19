### 类型检查

```javascript
var Type = (function() {
                var type = {};
                var typeArr = ['String', 'Object', 'Number', 'Array','Undefined', 'Function', 'Null', 'Symbol'];
                for (var i = 0; i < typeArr.length; i++) {
                    (function(name) {
                        type['Is' + name] = function(obj) {
                            return Object.prototype.toString.call(obj) == '[object ' + name + ']';
                        }
                    })(typeArr[i]);
                }
                return type;
})();

Type.IsArray([]) // true
Type.IsArray({}) //false
Type.IsFunction(function() {}) // true
```


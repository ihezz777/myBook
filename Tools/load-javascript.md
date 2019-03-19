# 加载js脚本

```javascript
const loadScript = function (url, callback) {
  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.onload = script.onreadystatechange = function () {
    callback(!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')
  };
  script.onerror = function (res) {
    callback(false)
  };
  script.setAttribute("src", url);
  document.body.appendChild(script);
};
```
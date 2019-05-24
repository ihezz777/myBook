function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
console.log(padding(12));
console.log(padding(12, 14));
// console.log(padding(12, 14, 13)) error
console.log(padding(12, 14, 13, 14));
var REN;
(function (REN) {
    // nan = 1 ----->初始化下标
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
var SIJI;
(function (SIJI) {
    SIJI["chun"] = "\u6625";
    SIJI["xia"] = "\u590F";
    SIJI["qiu"] = "\u79CB";
    SIJI["dong"] = "\u51AC";
})(SIJI || (SIJI = {}));
console.log(REN.yao); //2
//使用数字枚举时，TS 会为枚举成员生成反向映射
console.log(REN[2]); // yao
console.log(SIJI.chun); //2
console.log(SIJI[0]); //2

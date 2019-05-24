function padding(all: number): object;
function padding(topAndBottom: number, leftAndRight: number): object;
function padding(top: number, right: number, bottom: number, left: number): object;
function padding(a: number, b?: number, c?: number, d?: number): object {
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

console.log(padding(12))
console.log(padding(12, 14))
// console.log(padding(12, 14, 13)) error
console.log(padding(12, 14, 13, 14))

enum REN {
  // nan = 1 ----->初始化下标
  nan,
  nv,
  yao
}


enum SIJI {
  chun = '春',
  xia = '夏',
  qiu = '秋',
  dong = '冬'
}

console.log(REN.yao)//2
//使用数字枚举时，TS 会为枚举成员生成反向映射
console.log(REN[2])// yao

console.log(SIJI.chun) // 春
console.log(SIJI[0]) // undefined

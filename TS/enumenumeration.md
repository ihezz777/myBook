# 枚举

#### 定义

> 枚举是一个被命名的整型常数的集合, 例如： SUNDAY、MONDAY、TUESDAY、WEDNESDAY、THURSDAY、FRIDAY、SATURDAY。通常用于一些业务系统中定义一些固定值，如用于匹配db中的字段值等。 

#### 应用场景（java）

```java
//利用构造函数将变量赋值，然后通过get方法获取指定值
public enum CompanyEnum {
    SF("顺丰速运", 1001), YTO("圆通速递", 1002),STO("申通物流",1003),YD("韵达快运",1004),YZPY("中国邮政",1005);
    private CompanyEnum(String company, int code) {
        this.company = company;
        this.code = code;
    }
    private String company; // 公司名称
    private int code; // 公司编码
    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }
    public int getCode() {
        return code;
    }
    public void setCode(int code) {
        this.code = code;
    }
}

//输出->1001 、 顺丰速运
public class TestEnum {
    public static void main(String[] args) {
        System.out.println(CompanyEnum.SF.getCode());
        System.out.println(CompanyEnum.SF.getCompany());
    }
}
```

使用数字枚举时，TS 会为枚举成员生成反向映射

```typescript
enum REN {
    // nan = 1 ----->初始化下标
    nan,
    nv,
    yao
}

console.log(REN.yao)//2
//使用数字枚举时，TS 会为枚举成员生成反向映射
console.log(REN[2])// yao
```

使用字符串枚举时，TS 不会为枚举成员生成反向映射

```typescript

enum SIJI {
    chun = '春',
    xia = '夏',
    qiu = '秋',
    dong = '冬'
}
console.log(SIJI.chun) // 春
console.log(SIJI[0]) // undefined
```
    

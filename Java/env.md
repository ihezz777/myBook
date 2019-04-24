# 环境配置

1. [下载JDK并安装](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. 拷贝java的安装目录，配置环境变量
3. 设置 tomocat 目录

> vi /etc/profile

```base
...

JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home"
CLASS_PATH="$JAVA_HOME/lib”

PATH=".:$PATH:$JAVA_HOME/bin”

export M2_HOME=/Users/ihezz777/workfile/apache-maven-3.6.0
export PATH=$PATH:$M2_HOME/bin
```



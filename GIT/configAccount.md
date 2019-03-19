# 配置账号

### 设置账号

> git config user.name "yourname"  
> git config user.email "your email"

### 查看账号

> git config user.name  
> git config user.email

### 多项目，多账号

#### 为项目 A 配置用户

```
git config user.name 'projectA'  
git config user.emai 'projectA@xx.com'
```

#### 为项目 B 配置用户

```
git config user.name 'projectB'  
git config user.emai 'projectB@xx.com'
```

#### 为不同的用户生成不同秘钥

```
// projectA.rsa
ssh-keygen -t rsa -C "projectA@xx.com"

// projectB.rsa
ssh-keygen -t rsa -C "projectB@xx.com"
```

#### 新增秘钥配置文件

```
vim config
  // vim... 注意删除注释，否则会报错
host projectA.com  #别名，随便定 后面配置地址有用
    Hostname github.com #要连接的服务器
    User projectA #用户名
    IdentityFile ~/.ssh/projectA.rsa  #密钥文件的地址，注意是私钥
host projectB.com  #别名，随便定 后面配置地址有用
    Hostname github.com #要连接的服务器
    User projectA #用户名
    IdentityFile ~/.ssh/projectB.rsa  #密钥文件的地址，注意是私钥

```

#### 增加新的私钥

```
ssh-agent bash

ssh-add ~/.ssh/projectA.rsa
ssh-add ~/.ssh/projectB.rsa
```

#### 修改项目.git/config 配置

```
core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true
+ [user]
+    email = projectA@xx.com
+    name = projectA
[remote "origin"]
-    url = git@githu.com:Lapisy/RecyclerViewSample.git
+    url = git@projectA.com:Lapisy/RecyclerViewSample.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = origin
    merge = refs/heads/master
```

[原文链接](http://blog.lapisy.com/2018/01/04/Git-Muti-User-Config/)





















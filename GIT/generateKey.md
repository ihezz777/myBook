# 生成秘钥

##### 第一次回车后会提示输入秘钥文件名

```$xslt
ssh-keygen -t rsa -C "your email"
```

##### 复制公钥到仓库

```$xslt
cd ~/.ssh
cat id_rsa.pub
```